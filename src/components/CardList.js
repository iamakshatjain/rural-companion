import React, { Fragment, useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { IonIcon, IonButton, IonCard, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react'

import gmApi from '../apis/gmApi'
import AccessibilityButton from './AccessibilityButton'
import AudibleComponent from './AudibleComponent'

const colors = ['danger', 'success', 'primary', 'warning', 'secondary', 'tertiary', 'light', 'medium', 'dark']

const CardList = () => {
	const [cards, setCards] = useState([])
	const params = useParams()
	const location = useLocation()

	console.log(params)
	useEffect(() => {
		const { category = null, subcategory = null } = params
		if (!category && !subcategory) {
			gmApi.get('/categories').then((response) => {
				setCards(response.data)
			})
		}
	}, [])

	return (
		<Fragment>
			{/* <AccessibilityButton /> */}
			<IonContent>
				{cards.map((card, index) => (
					<AudibleComponent src={card.voice_url}>
						<IonCard
							// TODO : remove this hardcoding
							// To prevent accessibility button overlap
							style={{ marginBottom: index === cards.length - 1 ? '15vh' : 'auto' }}
						>
							<IonGrid>
								<IonRow className="ion-align-items-center">
									<IonCol size="4">
										<IonIcon src={card.icon_url} style={{ fontSize: '100px' }} />
									</IonCol>
									<IonCol size="5" className="ion-text-center">
										<strong>{card.display_name}</strong>
									</IonCol>
									<IonCol size="3">
										<Link to={`${location.pathname}/${card.keyword}/`} onClick={(e) => e.stopPropagation()}>
											<div style={{ color: 'white' }}>
												<IonButton color={`${colors[index]}`} size="large">
													&gt;
												</IonButton>
											</div>
										</Link>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCard>
					</AudibleComponent>
				))}
			</IonContent>
		</Fragment>
	)
}

export default CardList
