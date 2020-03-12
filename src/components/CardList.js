import React from 'react';
import { IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
const CardList = ({ cards }) => {
	return cards.map((card) => {
		const Img = card.img;
		return (
			<IonCard>
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
		);
	});
};

export default CardList;
