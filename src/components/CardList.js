import React, {useEffect} from 'react';
import { IonButton, IonCard, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
// import { GiEntryDoor } from 'react-icons/gi';

const renderButton = (card, match) => {
	if(card.desc === "women" || card.desc === "disease"){
		return(
			<IonButton color="danger" expand="block" size="large" style={{height:"100%", width:"50%", float:"right", padding:"0px"}} routerLink={`${match.url}${card.desc}/`}>
				>
			</IonButton>
		);
	}
	else if(card.desc === "children" || card.desc === "nutrition"){
		return(
			<IonButton color="success" expand="block" size="large" style={{height:"100%", width:"50%", float:"right", padding:"0px"}} routerLink={`${match.url}${card.desc}/`}>
				>
			</IonButton>
		);
	}
	else{
		return(
			<IonButton color="primary" expand="block" size="large" style={{height:"100%", width:"50%", float:"right", padding:"0px"}} routerLink={`${match.url}${card.desc}/`}>
				>
			</IonButton>
		);
	}
}

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
							{/* <IonItem > */}
								{/* <IonItem routerLink={match.path !== '/' ? `${match.path}/${card.desc}` : `/${card.desc}`}> */}
								{/* <GiEntryDoor /> */}
								{renderButton(card, match)}
							{/* </IonItem> */}
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonCard>
		);
	});
}


const instructUser = (instructions) => {
	for(let i=0; i<instructions.length; i++){
		window.responsiveVoice.speak(instructions[i], 'Hindi Female', { rate: 0.9 })
	}
}

const CardList = ({ cards, voices, match }) => {

	return(
		<div>
			{renderCards(cards, voices, match)}
		</div>
		
	);
};

export default CardList;
