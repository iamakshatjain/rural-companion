import React, { useEffect, Fragment, useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { IonIcon, IonButton, IonCard, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react'

import AccessibilityButton from './AccessibilityButton'
import { initialiseVoice } from '../actions'

const renderButton = (index, SYNTH) => {
	const colors = ['danger', 'success', 'primary', 'warning', 'secondary', 'tertiary', 'light', 'medium', 'dark']

	return (
		<div style={{ color: 'white' }}>
			<IonButton
				color={colors[index]}
				size="large"
				// onClick={() => SYNTH.cancel()}
			>
				&gt;
			</IonButton>
		</div>
	)
}

// temporary method
const translateToHindi = (title) => {
	const hindi = {
		women: 'महिलाएं',
		children: 'शिशु',
		cattle: 'पशु',
		disease: 'रोग',
		nutrition: 'पोषण',
		hygiene: 'स्वच्छता',
		virus: 'कोविड - 19',
		symptoms: 'लक्षण',
		handwashing: 'हाथ धोना',
		outdoor: 'घर के बाहर',
		outdoorToIndoor: 'घर लौटते समय',
		indoor: 'घर के अंदर'
	}

	if (title in hindi) {
		return hindi[title]
	} else {
		return title
	}
}

const renderCards = (cards, voices, match, SYNTH, utterance) => {
	return cards.map((card, index) => {
		return (
			<IonCard
				// onClick={() => {
				// 	SYNTH.cancel();
				// 	const instruction = voices[card.desc];
				// 	utterance.text = instruction;
				// 	SYNTH.speak(utterance);
				// }}
				// TODO : remove this hardcoding
				// To prevent accessibility button overlap
				style={{ marginBottom: index === cards.length - 1 ? '15vh' : 'auto' }}
			>
				<IonGrid>
					<IonRow className="ion-align-items-center">
						<IonCol size="4">
							<IonIcon src={card.img_url} style={{ fontSize: '100px' }} />
						</IonCol>
						<IonCol size="5" className="ion-text-center">
							<strong>{translateToHindi(card.title)}</strong>
						</IonCol>
						<IonCol size="3">
							<Link to={`${match.url}${card.title}/`} onClick={(e) => e.stopPropagation()}>
								{renderButton(index, SYNTH)}
							</Link>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCard>
		)
	})
}

const CardList = ({ cards, voices, match, SYNTH, utterance, ...props }) => {
	// componentWillMount
	useEffect(() => {
		// props.initialiseVoice();
	}, [])

	const instructionsList = Object.values(voices)
	const instruction = instructionsList.join('।')
	// if (utterance) {
	// 	utterance.text = instruction;
	// 	SYNTH.speak(utterance);
	// }

	return (
		<Fragment>
			<AccessibilityButton instruction={instruction} />

			{/* if overscroll issue add style={{ '--padding-bottom': 'xrem' }} to the IonContent accordingly
			to adjust the padding bottom so that list elements display correctly. Here it is not required as 
			list is small. */}
			<IonContent>{renderCards(cards, voices, match, SYNTH, utterance)}</IonContent>
		</Fragment>
	)
}

const mapStateToProps = (state) => {
	const { SYNTH, utterance } = state.voice
	return {
		SYNTH,
		utterance
	}
}

export default connect(mapStateToProps, { initialiseVoice })(CardList)
