import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IonButton, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
import { GiConsoleController } from 'react-icons/gi';
const SYNTH = window.speechSynthesis;
var utterance = new SpeechSynthesisUtterance();

const renderButton = (card) => {
	if (card.desc === 'women' || card.desc === 'disease') {
		return (
			<IonButton
				color="danger"
				expand="block"
				size="large"
				style={{ height: '100%', width: '50%', float: 'right', padding: '0px' }}
				onClick={() => SYNTH.cancel()}
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
				onClick={() => SYNTH.cancel()}
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
				onClick={() => SYNTH.cancel()}
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
			<IonCard onClick={() => instructUser([voices[card.desc]])}>
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
	var instruction = "";
	for (let i = 0; i < instructions.length; i++) {
		instruction+=instructions[i];
		//hindi viram chinh
		instruction+="।";
	}

	console.log(instruction);
	utterance.text = instruction;
	SYNTH.speak(utterance);
};

const CardList = ({ cards, voices, match }) => {
	//componentDidUpdate
	useEffect(() => {
		SYNTH.cancel();
		const voice = SYNTH.getVoices().filter(function(voice) {
			return voice.lang === "hi-IN";
		  })[0];

		utterance.voice = voice;
		utterance.rate = 0.75;
		utterance.volume = 0.8;

		let instructions = Object.values(voices);
		instructUser(instructions);
	});

	return (
		<div>
			<IonButton
				onClick={() => {
					SYNTH.cancel();
					let instructions = Object.values(voices);
					instructUser(instructions);
				}}
			>
				Replay
			</IonButton>
			<IonButton
				onClick={() => {
					SYNTH.cancel();
					}}
			>
				Stop
			</IonButton>
			{renderCards(cards, voices, match)}
		</div>
	);
};

export default CardList;
