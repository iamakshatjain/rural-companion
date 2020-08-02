import React, { useState } from 'react';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';
import { volumeHigh, volumeMute } from 'ionicons/icons';

const AppBar = ({ history }) => {
  // console.log(history);
  const [isMuted, setIsMuted] = useState(false);
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonTitle>Gramin Mitra</IonTitle>
      <IonButtons slot="end">
        <IonButton
          onClick={() => {
            setIsMuted(!isMuted);
          }}
        >
          <IonIcon slot="icon-only" icon={!isMuted ? volumeHigh : volumeMute} />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  );
};

export default AppBar;
