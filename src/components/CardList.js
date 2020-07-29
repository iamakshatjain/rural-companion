import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { IonIcon, IonButton, IonCard, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import gmApi from '../apis/gmApi';
import { setAudioSrc } from '../actions';
import AccessibilityButton from './AccessibilityButton';
import AudibleComponent from './AudibleComponent';
import '../assets/stylesheets/CardList.css';

const colors = [ 'danger', 'success', 'primary', 'warning', 'secondary', 'tertiary', 'light', 'medium', 'dark' ];

const CardList = (props) => {
	const [ cards, setCards ] = useState([]);
	const params = useParams();
	const location = useLocation();

	console.log(params);

	useEffect(() => {
		const { category = null, subcategory = null } = params;

		if (!category && !subcategory) {
			gmApi.get('/categories').then((response) => {
				setCards(response.data);
			});
		}
	}, []);

	return (
		<div>
			<div className="cardlist">
				{cards.map((card, index) => (
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
									<Link
										to={`${location.pathname}/${card.keyword}/`}
										onClick={(e) => e.stopPropagation()}
									>
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
				))}
			</div>
			<div className="bottom-bar">
				<AudibleComponent />
			</div>
		</div>
	);
};

export default connect(null, { setAudioSrc })(CardList);
