import React, { Fragment } from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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
  IonSkeletonText,
  IonItem,
  IonListHeader,
  IonLabel,
  IonThumbnail,
} from '@ionic/react';

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
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    const {
      match: {
        params: { category, subcategory },
      },
    } = props;

    const keyword = `${category.toUpperCase()}_${subcategory.toUpperCase()}`;
    // TODO : refactor this later to environment variables
    const baseApiUri = 'https://gramin-mitra-cms.herokuapp.com';
    axios
      .get(`${baseApiUri}/contents`, {
        params: {
          keyword,
        },
      })
      .then((res) => {
        const information = res.data[0];
        setURL(information.video_url);
        setData(information.data);
        setRecommendations(information.recommendations);
        setIsLoading(false);

        // when loading is rendered, current is not available
        if (ref.current) {
          setTimeout(() => {
            const { clientHeight } = ref.current;
            setPlayerHeight(clientHeight);
          }, 1);
        }
      })
      .catch((err) => {
        console.log('Error :: ', err);
      });
  }, [props]);

  // Don't put IonContent inside any parent element, otherwise it won't work. It should be at the root
  // 	of the component. That's why use Fragment instead to render same level elements. *
  //

  const isLoaderVisible = isLoading || !data.length;

  return isLoaderVisible ? (
    <Fragment>
      <IonList style={{ padding: '0' }}>
        <IonListHeader style={{ padding: '0' }}>
          <IonLabel style={{ margin: '0' }}>
            <IonSkeletonText
              animated
              style={{ height: '30vh', width: '100%' }}
            />
          </IonLabel>
        </IonListHeader>
        <IonItem>
          <IonThumbnail slot='start'>
            <IonSkeletonText animated />
          </IonThumbnail>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonThumbnail slot='start'>
            <IonSkeletonText animated />
          </IonThumbnail>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonThumbnail slot='start'>
            <IonSkeletonText animated />
          </IonThumbnail>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
          </IonLabel>
        </IonItem>

        {/* recommendations */}
        <IonSkeletonText
          animated
          style={{
            margin: '20px',
            height: '2.5rem',
            width: '70%',
          }}
        />
        <IonItem>
          <IonThumbnail slot='start'>
            <IonSkeletonText animated />
          </IonThumbnail>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonThumbnail slot='start'>
            <IonSkeletonText animated />
          </IonThumbnail>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
          </IonLabel>
        </IonItem>
      </IonList>
    </Fragment>
  ) : (
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

        {/* recommendations */}
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
