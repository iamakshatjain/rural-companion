import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { connect } from 'react-redux';
import { AudioPlayerProvider } from 'react-use-audio-player';

import { setDevice } from './actions';
import { getDeviceInfo } from './helpers';

import CardList from './components/CardList';
import Info from './components/Info';
import AudibleComponent from './components/AudibleComponent';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = (props) => {
	useEffect(() => {
		console.log('mount');
		console.log('getting device info');
		getDeviceInfo().then((dev) => {
			console.log(`on : ${dev.platform}`);
			props.setDevice(dev.platform);
		});
	}, []);

	return (
		<AudioPlayerProvider>
			<IonApp overflow-scroll="true">
				<IonReactRouter>
					<IonRouterOutlet>
						<Switch>
							<Route path="/" exact>
								<CardList />
							</Route>
							<Route path="/:category" exact>
								<CardList />
							</Route>
							<Route path="/:category/:subcategory" exact>
								<Info />
							</Route>
						</Switch>
					</IonRouterOutlet>
				</IonReactRouter>
			</IonApp>
		</AudioPlayerProvider>
	);
};

const mapStateToProps = (state) => {
	return {
		device: state.device
	};
};

export default connect(mapStateToProps, { setDevice })(App);
