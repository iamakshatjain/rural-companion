import React from 'react'
import { IonCard, IonGrid, IonRow, IonCol } from '@ionic/react'

// const voices = {
// 	"women" : "महिलाओं के बारे में जानकारी के लिए लाल बटन दबाएं",
// 	"children" : "शिशुओं के बारे में जानकारी के लिए हरे बटन को दबाएं",
// 	"cattle" : "मवेशियों के बारे में जानकारी के लिए नीले बटन को दबाएं"
// }

const CardList = ({ cards, voices }) => {
	return cards.map(card => {
		const Img = card.img
		return (
			<IonCard onClick={() => window.responsiveVoice.speak(voices[card.desc], "Hindi Female", {rate : 0.9})}>
				<IonGrid>
					<IonRow>
						<IonCol size="5">
							<Img size="9em" />
						</IonCol>
						<IonCol size="7">
							<div className="mt-5 ml-5">{card.desc}</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCard>
		)
	})
}

export default CardList
