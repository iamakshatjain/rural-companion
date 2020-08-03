import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { volumeHigh, volumeMute, arrowBackOutline } from 'ionicons/icons';

const AppBar = () => {
  const history = useHistory();
  const [isMuted, setIsMuted] = useState(false);

  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonButton onClick={() => history.goBack()}>
          <IonIcon slot="icon-only" icon={arrowBackOutline} />
        </IonButton>
      </IonButtons>
      <IonTitle>Gramin Mitra</IonTitle>
      <IonButtons slot="end">
        <IonButton onClick={() => setIsMuted(!isMuted)}>
          <IonIcon slot="icon-only" icon={!isMuted ? volumeHigh : volumeMute} />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  );
};

export default AppBar;
