import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import {
  IonIcon,
  IonButton,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonContent
} from '@ionic/react';
import gmApi from '../apis/gmApi';
import { setAudioSrc } from '../actions';
import AccessibilityButton from './AccessibilityButton';
import AudibleComponent from './AudibleComponent';
import { categoryCards } from '../static-data/cards';
import SineWaves from 'sine-waves';
import '../assets/stylesheets/CardList.css';

const colors = [
  'danger',
  'success',
  'primary',
  'warning',
  'secondary',
  'tertiary',
  'light',
  'medium',
  'dark'
];

const CardList = (props) => {
  const [cards, setCards] = useState([]);
  const params = useParams();
  const match = useRouteMatch();
  const refContainer = useRef();

  useEffect(() => {
    const { category = null, subcategory = null } = params;
    if (!category && !subcategory) {
      gmApi.get('/categories').then((response) => {
        setCards(response.data);
      });
    } else if (!subcategory) {
      gmApi
        .get(`/sub-categories?parent_category=${category}`)
        .then((response) => {
          setCards(response.data[0].data);
        });
    }
  }, [params]);

  return (
    <div>
      <div className="cardlist">
        {cards.map((card, index) => (
          <IonCard
            key={index}
            onClick={() => props.setAudioSrc(card.voice_url)}
            // TODO : remove this hardcoding
            // To prevent accessibility button overlap
          >
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="4">
                  <IonIcon src={card.icon_url} className="card-icon" />
                </IonCol>
                <IonCol size="5" className="ion-text-center">
                  <strong>{card.display_name}</strong>
                </IonCol>
                <IonCol size="3">
                  <Link
                    to={`/${card.keyword}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="card-button">
                      <IonButton color={`${colors[index]}`} size="large">
                        &gt;
                      </IonButton>
                    </div>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        ))}
      </div>
      <div className="bottom-bar">
        <AudibleComponent />
      </div>
    </div>
  );
};

export default connect(null, { setAudioSrc })(CardList);
