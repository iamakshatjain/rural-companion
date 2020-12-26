import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  IonIcon,
  IonButton,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonProgressBar
} from '@ionic/react';
import gmApi from '../apis';
import { setAudioSrc } from '../actions';
import AudibleComponent from './AudibleComponent';
import AppBar from './AppBar';
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

const Loader = () => (
  <IonContent>
    <div
      style={{
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img
        src="https://res.cloudinary.com/dndf9znin/image/upload/v1595932996/Gramin_mitra_logo_d5059c7482.png"
        alt="logo-loader"
      />
      <IonProgressBar type="indeterminate" />
    </div>
  </IonContent>
);

const CardList = (props) => {
  const [cards, setCards] = useState([]);
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { category = '', subcategory = '' } = useParams();

  useEffect(() => {
    if (!category && !subcategory) {
      gmApi.get('/categories').then((response) => {
        setCards(response.data);
        if (isLoading) {
          setIsLoading(false);
        }
      });
    } else if (!subcategory) {
      gmApi.get(`/sub-categories?category=${category}`).then((response) => {
        setCards(response.data[0].data);
        if (isLoading) {
          setIsLoading(false);
        }
        if (overlayVisibility) {
          setOverlayVisibility(false);
        }
      });
    }
  }, [category, subcategory, overlayVisibility, isLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <AppBar showVolumeIcon={!subcategory && !overlayVisibility} />
      <div className={`cardlist ${overlayVisibility && 'overlay'}`}>
        {cards.map((card, index) => (
          <IonCard
            key={index}
            onClick={() => {
              if (!props.muted) props.setAudioSrc(card.voice_url);
            }}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setOverlayVisibility(true);
                    }}
                  >
                    <div className="card-button">
                      <IonButton
                        color={`${colors[index]}`}
                        size="large"
                        disabled={!!overlayVisibility}
                      >
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
      {!overlayVisibility && (
        <div className="bottom-bar">
          <AudibleComponent />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { muted } = state.audio;
  return {
    muted
  };
};

export default connect(mapStateToProps, { setAudioSrc })(CardList);
