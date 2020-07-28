import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { IonIcon, IonButton, IonCard, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react'
import SineWaves from 'sine-waves'

import gmApi from '../apis/gmApi'
import { setAudioSrc } from '../actions'
import AccessibilityButton from './AccessibilityButton'

const colors = ['danger', 'success', 'primary', 'warning', 'secondary', 'tertiary', 'light', 'medium', 'dark']

const CardList = (props) => {
	const [cards, setCards] = useState([])
	const params = useParams()
	const location = useLocation()
	const refContainer = useRef()

	console.log(params)

	useEffect(() => {
		const { category = null, subcategory = null } = params
		if (!category && !subcategory) {
			gmApi.get('/categories').then((response) => {
				setCards(response.data)
			})
		}
	}, [])

	const onStop = () => {
		var waves = new SineWaves({
			// Canvas Element
			el: refContainer.current,

			speed: 0,

			ease: 'SineInOut',

			wavesWidth: '75%',

			waves: [
				{
					timeModifier: 4,
					lineWidth: 1,
					amplitude: 0,
					wavelength: 25
				},
				{
					timeModifier: 2,
					lineWidth: 1,
					amplitude: 0,
					wavelength: 30
				},
				{
					timeModifier: 1,
					lineWidth: 1,
					amplitude: 0,
					wavelength: 30
				},
				{
					timeModifier: 3,
					lineWidth: 1,
					amplitude: 0,
					wavelength: 40
				},
				{
					timeModifier: 0.5,
					lineWidth: 1,
					amplitude: 0,
					wavelength: 60
				},
				{
					timeModifier: 1.3,
					lineWidth: 1,
					amplitude: 0,
					wavelength: 40
				}
			],

			// Called on window resize
			resizeEvent: function () {
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
				gradient.addColorStop(0, 'rgba(25, 255, 255, 0)')
				gradient.addColorStop(0.5, 'rgba(255, 25, 255, 0.75)')
				gradient.addColorStop(1, 'rgba(255, 255, 25, 0')

				var index = -1
				var length = this.waves.length
				while (++index < length) {
					this.waves[index].strokeStyle = gradient
				}

				// Clean Up
				index = void 0
				length = void 0
				gradient = void 0
			}
		})
		console.log(waves.ctx)
	}

	const onStart = () => {
		var waves = new SineWaves({
			// Canvas Element
			el: refContainer.current,

			speed: 8,

			ease: 'SineInOut',

			wavesWidth: '50%',

			waves: [
				{
					timeModifier: 4,
					lineWidth: 1,
					amplitude: -25,
					wavelength: 25
				},
				{
					timeModifier: 2,
					lineWidth: 1,
					amplitude: -10,
					wavelength: 30
				},
				{
					timeModifier: 1,
					lineWidth: 1,
					amplitude: -30,
					wavelength: 30
				},
				{
					timeModifier: 3,
					lineWidth: 1,
					amplitude: 40,
					wavelength: 40
				},
				{
					timeModifier: 0.5,
					lineWidth: 1,
					amplitude: -60,
					wavelength: 60
				},
				{
					timeModifier: 1.3,
					lineWidth: 1,
					amplitude: -40,
					wavelength: 40
				}
			],

			// Called on window resize
			resizeEvent: function () {
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
				gradient.addColorStop(0, 'rgba(25, 255, 255, 0)')
				gradient.addColorStop(0.5, 'rgba(255, 25, 255, 0.75)')
				gradient.addColorStop(1, 'rgba(255, 255, 25, 0')

				var index = -1
				var length = this.waves.length
				while (++index < length) {
					this.waves[index].strokeStyle = gradient
				}

				// Clean Up
				index = void 0
				length = void 0
				gradient = void 0
			}
		})
		console.log(waves.ctx)
	}

	return (
		<Fragment>
			{/* <AccessibilityButton /> */}
			<IonContent>
				{cards.map((card, index) => (
					<IonCard
						key={index}
						onClick={() => props.setAudioSrc(card.voice_url)}
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
				))}

				<div className="container">
					<button onClick={onStart}>Start</button>
					<button onClick={onStop}>Stop</button>
					<canvas className="waves" ref={refContainer} />
				</div>
			</IonContent>
		</Fragment>
	)
}

export default connect(null, { setAudioSrc })(CardList)
