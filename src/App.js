import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import CardList from './components/CardList'
import { IonReactRouter } from '@ionic/react-router'

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
import { informationSentences, categorySentences } from './static-data/sentences'
import { informationCards, categoryCards } from './static-data/cards'

const App = (props) => {
	return (
		<IonApp overflow-scroll="true">
			{/* <AccessibilityButton /> */}
			<IonReactRouter>
				<IonRouterOutlet>
					<Switch>
						<Route path="/:category/:info" render={(props) => <Info {...props} />} exact={true} />
						<Route
							path="/:category"
							render={(props) => <CardList cards={informationCards} voices={informationSentences} {...props} />}
							exact={true}
						/>
						<Route
							path="/"
							render={(props) => <CardList cards={categoryCards} voices={categorySentences} {...props} />}
							exact={true}
						/>
					</Switch>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
