import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { IonIcon, IonButton, IonCard, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import gmApi from '../apis/gmApi';
import { setAudioSrc } from '../actions';
import AccessibilityButton from './AccessibilityButton';
import AudibleComponent from './AudibleComponent';
import { categoryCards } from '../static-data/cards';
import SineWaves from 'sine-waves';
import '../assets/stylesheets/CardList.css';

const colors = [ 'danger', 'success', 'primary', 'warning', 'secondary', 'tertiary', 'light', 'medium', 'dark' ];

const CardList = (props) => {
	const [ cards, setCards ] = useState([]);
	const params = useParams();
	const match = useRouteMatch();
	const refContainer = useRef();

	console.log(params);

	useEffect(
		() => {
			const { category = null, subcategory = null } = params;
			if (!category && !subcategory) {
				gmApi.get('/categories').then((response) => {
					console.log(response);
					setCards(response.data);
				});
			} else if (!subcategory) {
				gmApi.get(`/sub-categories?parent_category=${category}`).then((response) => {
					console.log(response);
					setCards(response.data[0].data);
				});
			}
		},
		[ params ]
	);

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
			resizeEvent: function() {
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				gradient.addColorStop(0, 'rgba(25, 255, 255, 0)');
				gradient.addColorStop(0.5, 'rgba(255, 25, 255, 0.75)');
				gradient.addColorStop(1, 'rgba(255, 255, 25, 0');

				var index = -1;
				var length = this.waves.length;
				while (++index < length) {
					this.waves[index].strokeStyle = gradient;
				}

				// Clean Up
				index = void 0;
				length = void 0;
				gradient = void 0;
			}
		});
		console.log(waves.ctx);
	};

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
			resizeEvent: function() {
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				gradient.addColorStop(0, 'rgba(25, 255, 255, 0)');
				gradient.addColorStop(0.5, 'rgba(255, 25, 255, 0.75)');
				gradient.addColorStop(1, 'rgba(255, 255, 25, 0');

				var index = -1;
				var length = this.waves.length;
				while (++index < length) {
					this.waves[index].strokeStyle = gradient;
				}

				// Clean Up
				index = void 0;
				length = void 0;
				gradient = void 0;
			}
		});
		console.log(waves.ctx);
	};
	console.log('returning cards');
	console.log(cards);
	return (
		<div>
			<div className="cardlist">
				{cards.map((card, index) => {
					console.log(card.display_name);

					return (
						<IonCard
							key={index}
							onClick={() => props.setAudioSrc(card.voice_url)}
							// TODO : remove this hardcoding
							// To prevent accessibility button overlap
						>
							<IonGrid>
								<IonRow className="ion-align-items-center">
									<IonCol size="4">
										<IonIcon src={card.icon_url} className="card-icon" />
									</IonCol>
									<IonCol size="5" className="ion-text-center">
										<strong>{card.display_name}</strong>
									</IonCol>
									<IonCol size="3">
										<Link to={`/${card.keyword}`} onClick={(e) => e.stopPropagation()}>
											<div className="card-button">
												<IonButton color={`${colors[index]}`} size="large">
													&gt;
												</IonButton>
											</div>
										</Link>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonCard>
					);
				})}
			</div>
			<div className="bottom-bar">
				<AudibleComponent />
			</div>
		</div>
	);
};

export default connect(null, { setAudioSrc })(CardList);
