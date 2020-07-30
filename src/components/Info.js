import React, { Fragment } from 'react';
import { useState, useEffect, useRef } from 'react';

import VideoPlayer from './VideoPlayer';
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonCard,
  IonRow,
  IonCol,
  IonIcon,
  IonGrid,
} from '@ionic/react';

// TODO : later from api
import Information from '../mock-data/information';

const createIonCard = (icon, title, content, onClick) => {
  return (
    <IonCard key={icon} onClick={onClick} style={{ cursor: 'pointer' }}>
      <IonGrid>
        <IonRow>
          <IonCol size='2'>
            <IonIcon icon={icon} style={{ fontSize: '90px' }} />
          </IonCol>
          <IonCol size='1' />
          <IonCol size='8'>
            <IonCardHeader>
              <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{content}</IonCardContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

const Info = (props) => {
  const [playerHeight, setPlayerHeight] = useState(0);

  const [URL, setURL] = useState('');
  const [data, setData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const ref = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    const informationType = [];
    let information = [];

    const {
      match: {
        params: { category, subcategory },
      },
    } = props;

    // TODO : change later
    if (category === 'virus') {
      if (
        ['symptoms', 'handwashing', 'outdoor', 'indoor'].includes(subcategory)
      ) {
        informationType.push(category.toUpperCase());
        informationType.push(subcategory.toUpperCase());
        information = Information[informationType.join('_')];
      } else {
        information = Information['VIRUS_OUTDOOR_TO_INDOOR'];
      }
    } else {
      information = Information['WOMEN_NUTRITION'];
    }
    setURL(information.video_url);
    setData(information.data);
    setRecommendations(information.recommendations);
    setTimeout(() => {
      const { clientHeight } = ref.current;
      setPlayerHeight(clientHeight);
    }, 1);
  }, [props]);

  // Don't put IonContent inside any parent element, otherwise it won't work. It should be at the root
  // 	of the component. That's why use Fragment instead to render same level elements. *
  //

  return (
    <Fragment>
      <div className='player-wrapper' ref={ref}>
        <VideoPlayer url={URL} ref={player} />
      </div>

      <div
        style={{
          height: window.innerHeight - playerHeight,
          overflowY: 'scroll',
        }}
      >
        <IonList>
          {data.map(
            ({
              image_url: image,
              display_name: title,
              content,
              timeStamp = 0,
            }) =>
              createIonCard(image, title, content, () => {
                player.current.fastForward(timeStamp);
              })
          )}
        </IonList>

        <h1
          style={{
            paddingLeft: '20px',
            fontSize: '2.5rem',
          }}
        >
          अन्य वीडियो
        </h1>

        {/* Youtube recommendations */}
        {/* fixed with URL rendered with API and stored in redux store */}
        <div>
          <IonList>
            {recommendations.map(({ icon, title, content, URL }) =>
              createIonCard(icon, title, content, () => {
                setURL(URL);
              })
            )}
          </IonList>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
