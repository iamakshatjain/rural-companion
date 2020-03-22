import React from 'react';
import { IonCard, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import { FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
							<Link to={`${match.url}${card.desc}/`}>
								<FaPowerOff size={70} color="red" />
							</Link>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCard>
		);
	});
};

export default CardList;
