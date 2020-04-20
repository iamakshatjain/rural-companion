import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IonButton, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';

const renderButton = (card) => {
	if (card.desc === 'women' || card.desc === 'disease') {
		return (
			<IonButton
				color="danger"
				expand="block"
				size="large"
				style={{ height: '100%', width: '50%', float: 'right', padding: '0px' }}
			>
				>
			</IonButton>
		);
	} else if (card.desc === 'children' || card.desc === 'nutrition') {
		return (
			<IonButton
				color="success"
				expand="block"
				size="large"
				style={{ height: '100%', width: '50%', float: 'right', padding: '0px' }}
			>
				>
			</IonButton>
		);
	} else {
		return (
			<IonButton
				color="primary"
				expand="block"
				size="large"
				style={{ height: '100%', width: '50%', float: 'right', padding: '0px' }}
			>
				>
			</IonButton>
		);
	}
};

const renderCards = (cards, voices, match) => {
	return cards.map((card) => {
		const Img = card.img;
		return (
			<IonCard onClick={() => window.responsiveVoice.speak(voices[card.desc], 'Hindi Female', { rate: 0.9 })}>
				<IonGrid>
					<IonRow>
						<IonCol size="5">
							<Img size="9em" />
						</IonCol>
						<IonCol size="7">
							<Link to={`${match.url}${card.desc}/`} onClick={(e) => e.stopPropagation()}>
								{renderButton(card)}
							</Link>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCard>
		);
	});
};

const instructUser = (instructions) => {
	for (let i = 0; i < instructions.length; i++) {
		window.responsiveVoice.speak(instructions[i], 'Hindi Female', { rate: 0.9 });
	}
};

const CardList = ({ cards, voices, match }) => {
	//componentDidMount
	useEffect(() => {
		let instructions = Object.values(voices);
		instructUser(instructions);
	}, []);

	return (
		<div>
			<IonButton
				onClick={() => {
					let instructions = Object.values(voices);
					instructUser(instructions);
				}}
			>
				Replay
			</IonButton>
			{renderCards(cards, voices, match)}
		</div>
	);
};

export default CardList;
