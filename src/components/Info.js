import React, { Fragment } from 'react'
import VideoPlayer from './VideoPlayer'
import { IonCardHeader, IonCardTitle, IonCardContent, IonList, IonCard, IonRow, IonCol, IonIcon, IonGrid, IonContent } from '@ionic/react'
import Vegetables from '../assets/images/clubbed_veg.svg'
import Fruits from '../assets/images/clubbed_fruits.svg'
import Dairy from '../assets/images/milk.svg'
import Water from '../assets/images/water.svg'

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
		content: 'पानी हमारी प्यास बुझाने का सबसे अच्छा विकल्प है। यह चीनी मुक्त भी है, और निकटतम नल के रूप में आसानी से मिल जाता है।Water is the best choice for quenching our thirst. It’s also sugar-free, and as easy to find as the nearest tap.',
	},
]

const Info = () => {
	{
		/* Don't put IonContent inside any parent element, otherwise it won't work. It should be at the root 
		of the component. That's why use Fragment instead to render same level elements. */
	}
	return (
		<Fragment>
			<VideoPlayer />
			<IonContent style={{ '--padding-bottom': '12rem' }}>
				<IonList>
					{data.map((item) => {
						return (
							<IonCard>
								<IonGrid>
									<IonRow>
										<IonCol size="2">
											<IonIcon icon={item.image} style={{ fontSize: '90px' }} />
										</IonCol>
										<IonCol size="1" />
										<IonCol size="8">
											<IonCardHeader>
												<IonCardTitle>{item.title}</IonCardTitle>
											</IonCardHeader>
											<IonCardContent>{item.content}</IonCardContent>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCard>
						)
					})}
				</IonList>
			</IonContent>
		</Fragment>
	)
}

export default Info
