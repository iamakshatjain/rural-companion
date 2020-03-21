import React from 'react';
import { IonCard, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import { GiEntryDoor } from 'react-icons/gi';

// const voices = {
// 	"women" : "महिलाओं के बारे में जानकारी के लिए लाल बटन दबाएं",
// 	"children" : "शिशुओं के बारे में जानकारी के लिए हरे बटन को दबाएं",
// 	"cattle" : "मवेशियों के बारे में जानकारी के लिए नीले बटन को दबाएं"
// }

const CardList = ({ cards, voices, match }) => {
	console.log(match);
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
							<IonItem routerLink={`${match.url}${card.desc}/`}>
								{/* <IonItem routerLink={match.path !== '/' ? `${match.path}/${card.desc}` : `/${card.desc}`}> */}
								<GiEntryDoor />
							</IonItem>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCard>
		);
	});
};

export default CardList;
