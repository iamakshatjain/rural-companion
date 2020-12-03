import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
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
  IonThumbnail
} from '@ionic/react';
import VideoPlayer from './VideoPlayer';
import cms from '../apis';

const createIonCard = (icon, title, content, onClick) => (
  <IonCard key={icon} onClick={onClick} style={{ cursor: 'pointer' }}>
    <IonGrid>
      <IonRow>
        <IonCol size="2">
          <IonIcon icon={icon} style={{ fontSize: '90px' }} />
        </IonCol>
        <IonCol size="1" />
        <IonCol size="8">
          <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{content}</IonCardContent>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonCard>
);

const Info = () => {
  const [playerHeight, setPlayerHeight] = useState(0);

  const [URL, setURL] = useState('');
  const [data, setData] = useState([]);
  // const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const player = useRef(null);

  const { category, subcategory } = useParams();

  useEffect(() => {
    cms
      .get('/contents', {
        params: {
          category: category.toUpperCase(),
          subcategory: subcategory.toUpperCase()
        }
      })
      .then((res) => {
        const information = res.data[0];
        setURL(information.video_url);
        setData(information.data);
        // setRecommendations(information.recommendations);
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
  }, [category, subcategory]);

  // Don't put IonContent inside any parent element, otherwise it won't work. It should be at the root
  // 	of the component. That's why use Fragment instead to render same level elements. *
  //

  const isLoaderVisible = isLoading || !data.length;

  return isLoaderVisible ? (
    <>
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
          <IonThumbnail slot="start">
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
          <IonThumbnail slot="start">
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
          <IonThumbnail slot="start">
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
            width: '70%'
          }}
        />
        <IonItem>
          <IonThumbnail slot="start">
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
          <IonThumbnail slot="start">
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
    </>
  ) : (
    <>
      <div className="player-wrapper" ref={ref} style={{ marginTop: '8vh' }}>
        <VideoPlayer url={URL} ref={player} />
      </div>

      <div
        style={{
          // 8% of window height is consumed in margin of player-wrapper
          // exta 2% for space at the bottom of list
          height: 0.9 * window.innerHeight - playerHeight,
          overflowY: 'scroll'
        }}
      >
        <IonList>
          {data.map(
            ({
              image_url: image,
              display_name: title,
              content,
              timeStamp = 0
            }) =>
              createIonCard(image, title, content, () => {
                player.current.fastForward(timeStamp);
              })
          )}
        </IonList>
      </div>
    </>
  );
};

export default Info;
