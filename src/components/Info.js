import React, { Fragment } from 'react';
import {useState, useLayoutEffect, useRef} from 'react';

import VideoPlayer from './VideoPlayer'
import { IonCardHeader, IonCardTitle, IonCardContent, IonList, IonCard, IonRow, IonCol, IonIcon, IonGrid, IonContent } from '@ionic/react'
import Vegetables from '../assets/images/clubbed_veg.svg'
import Fruits from '../assets/images/clubbed_fruits.svg'
import Dairy from '../assets/images/milk.svg'
import Water from '../assets/images/water.svg'

// todo : would be served from store later
const data = [
	{
		title: 'सब्जियां',
		content: 'जितनी ज्यादा सब्जियां और वैरायटी उतनी ही बेहतर।',
		image: Vegetables,
	},
	{
		title: 'फल',
		image: Fruits,
		content: 'पूरे फलों या कटे हुए फलों को चुनें (फलों के रस के बजाय) फलों के रस को प्रतिदिन एक छोटे गिलास तक सीमित करें।',
	},
	{
		title: 'दुग्धालय',
		image: Dairy,
		content: 'सादा दूध, सादा दही, कम मात्रा में पनीर और अन्य गैर मीठे डेयरी खाद्य पदार्थ चुनें।',
	},
	{
		title: 'पानी',
		image: Water,
		content: 'पानी हमारी प्यास बुझाने का सबसे अच्छा विकल्प है। यह चीनी मुक्त भी है, और निकटतम नल के रूप में आसानी से मिल जाता है।',
	},
]

const recommendations = [
	{
		URL : 'https://www.youtube.com/watch?v=13cHnQ1Suj8',
		icon : Vegetables,
		title : 'Recommended Video 1',
	},
	{
		URL : 'https://www.youtube.com/watch?v=hMBKmQEPNzI',
		icon : Vegetables,
		title : 'Recommended Video 2',
	},
	{
		URL : 'https://www.youtube.com/watch?v=3qPgHJEtOHQ',
		icon : Vegetables,
		title : 'Recommended Video 3',
	},
];

const createIonCard = (icon, title, content, onClick) => {
	return (
		<IonCard key={icon} onClick={onClick}>
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
	)
}

const Info = () => {
	const [playerHeight, setPlayerHeight] = useState(0);
	// todo : url would be dynamically served from redux-store
	const [URL, setURL] = useState('https://www.youtube.com/watch?v=StMCcxiRSL8');
	const ref = useRef(null);

	useLayoutEffect(() => {
		setTimeout(() => {
			const {clientHeight} = ref.current;
			setPlayerHeight(clientHeight);
		}, 1);
	})

	{
		/* Don't put IonContent inside any parent element, otherwise it won't work. It should be at the root 
		of the component. That's why use Fragment instead to render same level elements. */
	}

	return (
		<Fragment>
			<div className="player-wrapper" ref = {ref} >
				<VideoPlayer url = {URL}/>
			</div>
	
			<div 
				style={{
					height : (window.innerHeight - playerHeight), 
					overflowY : "scroll"
				}}
			>
				<IonList>
					{data.map((item) => createIonCard(item.image, item.title, item.content))}
				</IonList>

				<h1 
					style={{
						paddingLeft: '20px',
						fontSize: '2.5rem'
					}}
				>
					अन्य वीडियो
				</h1>
				
				{/* Youtube recommendations */}
				{/* fixed with URL rendered with API and stored in redux store */}
				<div>
					<IonList>
						{
							recommendations.map((item) => createIonCard(item.icon, item.title, item.content, () => {
								setURL(item.URL);
							}))
						}
					</IonList>
				</div>
			</div>
		</Fragment>
	)
}

export default Info
