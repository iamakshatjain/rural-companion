import React, { Fragment } from 'react'
import VideoPlayer from './VideoPlayer'
import { IonCardHeader, IonCardTitle, IonCardContent, IonList, IonCard, IonRow, IonCol, IonIcon, IonGrid, IonContent } from '@ionic/react'
import Vegetables from '../assets/images/clubbed_veg.svg'
import Fruits from '../assets/images/clubbed_fruits.svg'
import Dairy from '../assets/images/milk.svg'
import Water from '../assets/images/water.svg'

const data = [
	{
		title: 'Vegetables',
		content: 'The more veggies – and the greater the variety – the better.',
		image: Vegetables,
	},
	{
		title: 'Fruits',
		image: Fruits,
		content: 'Choose whole fruits or sliced fruits (rather than fruit juices; limit fruit juice to one small glass per day).',
	},
	{
		title: 'Dairy',
		image: Dairy,
		content: 'Choose unflavored milk, plain yogurt, small amounts of cheese, and other unsweetened dairy foods.',
	},
	{
		title: 'Water',
		image: Water,
		content: 'Water is the best choice for quenching our thirst. It’s also sugar-free, and as easy to find as the nearest tap.',
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
