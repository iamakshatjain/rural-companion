import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  IonIcon,
  IonButton,
  IonCard,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import gmApi from '../apis';
import { setAudioSrc } from '../actions';
import AudibleComponent from './AudibleComponent';
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

  const {
    match: {
      params: { category = '', subcategory = '' }
    }
  } = props;

  useEffect(() => {
    if (!category && !subcategory) {
      gmApi.get('/categories').then((response) => {
        setCards(response.data);
      });
    } else if (!subcategory) {
      gmApi.get(`/sub-categories?category=${category}`).then((response) => {
        setCards(response.data[0].data);
      });
    }
  }, [category, subcategory]);

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
                    to={`${category}/${card.keyword}`}
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
