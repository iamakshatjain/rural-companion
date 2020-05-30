import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { IonButton, IonCard, IonCardTitle, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react'
import { GiConsoleController } from 'react-icons/gi'
const SYNTH = window.speechSynthesis
var utterance = new SpeechSynthesisUtterance()

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
		)
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
		)
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
		)
	}
}

// temporary method
const toHindi = (desc) => {
	if(desc === "women") return "महिलाएं";
	else if (desc === "children") return "बच्चे";
	else if (desc === "cattle") return "पशु";
	else if (desc === "disease") return "रोग";
	else if (desc === "nutrition") return "पोषण";
	else if (desc === "hygiene") return "स्वच्छता";
} 

const renderCards = (cards, voices, match) => {
	return cards.map((card) => {
		const Img = card.img
		return (
			<IonCard onClick={() => {
				SYNTH.cancel();
				instructUser([voices[card.desc]])
				}}>
				<IonGrid>
					<IonRow>
						<IonCol>
							<Img size="9em" />
						</IonCol>
						<IonCol>
							<IonCardTitle>{toHindi(card.desc)}</IonCardTitle>
						</IonCol>
						<IonCol>
							<Link 
								to={`${match.url}${card.desc}/`} 
								onClick={(e) => e.stopPropagation()}>
								{renderButton(card)}
							</Link>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCard>
		)
	})
}

const instructUser = (instructions) => {
	var instruction = ''
	for (let i = 0; i < instructions.length; i++) {
		instruction += instructions[i]
		//hindi viram chinh
		instruction += '।'
	}

	utterance.text = instruction
	SYNTH.speak(utterance)
}

const CardList = ({ cards, voices, match }) => {
	//componentDidUpdate
	useEffect(() => {
		SYNTH.cancel()
		const voice = SYNTH.getVoices().filter(function (voice) {
			return voice.lang === 'hi-IN'
		})[0]

		utterance.voice = voice
		utterance.rate = 0.75
		utterance.volume = 0.8

		let instructions = Object.values(voices)
		instructUser(instructions)
	})

	return (
		<Fragment>
			<IonButton
				onClick={() => {
					SYNTH.cancel()
					let instructions = Object.values(voices)
					instructUser(instructions)
				}}
			>
				Replay
			</IonButton>
			<IonButton
				onClick={() => {
					SYNTH.cancel()
				}}
			>
				Stop
			</IonButton>
			{/* if overscroll issue add style={{ '--padding-bottom': 'xrem' }} to the IonContent accordingly
			to adjust the padding bottom so that list elements display correctly. Here it is not required as 
			list is small. */}
			<IonContent>{renderCards(cards, voices, match)}</IonContent>
		</Fragment>
	)
}

export default CardList
