import React from 'react'
import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
} from '@ionic/react'
import { Route, Switch } from 'react-router-dom'
// import history from './history';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { GiCow, GiHealthNormal, GiOpenedFoodCan, GiVacuumCleaner } from 'react-icons/gi'
import { FaBaby } from 'react-icons/fa'
import { IoIosWoman } from 'react-icons/io'
import CardList from './components/CardList'
import { IonReactRouter } from '@ionic/react-router'
// import { ellipse, square, triangle } from 'ionicons/icons'
// import Tab1 from './pages/Tab1'
// import Tab2 from './pages/Tab2'
// import Tab3 from './pages/Tab3'

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Info from './components/Info'

const categoryCards = [
	{
		img: IoIosWoman,
		desc: 'women',
	},
	{
		img: FaBaby,
		desc: 'children',
		route: '/',
	},
	{
		img: GiCow,
		desc: 'cattle',
		route: '/',
	},
]

const categoryVoices = {
	women: 'महिलाओं के बारे में जानकारी के लिए लाल बटन दबाएं',
	children: 'शिशुओं के बारे में जानकारी के लिए हरे बटन को दबाएं',
	cattle: 'मवेशियों के बारे में जानकारी के लिए नीले बटन को दबाएं',
}

const informationCards = [
	{
		img: GiHealthNormal,
		desc: 'disease',
		route: '',
	},
	{
		img: GiOpenedFoodCan,
		desc: 'nutrition',
	},
	{
		img: GiVacuumCleaner,
		desc: 'hygiene',
	},
]

const informationVoices = {
	disease: 'रोगों के बारे में जानने के लिए लाल बटन दबाएं',
	nutrition: 'स्वास्थ्य और पोषण के बारे में जानकारी प्राप्त करने के लिए, हरे बटन को दबाएं',
	hygiene: 'दैनिक स्वच्छता के बारे में जानने के लिए, नीले बटन को दबाएं',
}

const App = (props) => {
	return (
		<IonApp overflow-scroll="true">
			<IonReactRouter>
				<IonRouterOutlet>
					<Switch>
						<Route path="/:category/:info" render={(props) => <Info {...props} />} exact={true} />
						<Route
							path="/:category"
							render={(props) => <CardList cards={informationCards} voices={informationVoices} {...props} />}
							exact={true}
						/>
						<Route
							path="/"
							render={(props) => <CardList cards={categoryCards} voices={categoryVoices} {...props} />}
							exact={true}
						/>
					</Switch>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
