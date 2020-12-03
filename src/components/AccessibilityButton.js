import React from 'react';
import { IonFab, IonFabList, IonFabButton, IonIcon } from '@ionic/react';
import { reloadOutline, helpOutline, pauseOutline } from 'ionicons/icons';

// TODO : later this instruction to be stored in store
const AccessibilityButton = () => {
  return (
    <IonFab vertical="bottom" horizontal="end" style={{ margin: '1rem' }}>
      <IonFabButton color="dark">
        <IonIcon icon={helpOutline} />
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton
          onClick={() => {
            console.log('play');
          }}
        >
          <IonIcon icon={reloadOutline} />
        </IonFabButton>
        <IonFabButton
          onClick={() => {
            console.log('stop');
          }}
        >
          <IonIcon icon={pauseOutline} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default AccessibilityButton;
