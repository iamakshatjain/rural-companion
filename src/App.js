import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import CardList from './components/CardList';
import { IonReactRouter } from '@ionic/react-router';
import { connect } from 'react-redux';
import { setDevice, initialiseVoice } from './actions';
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

import Info from './components/Info';
import { subCategoryCards, categoryCards, virusCards } from './static-data/cards';
import { getDeviceInfo } from './helpers';

const App = (props) => {
	const refContainer = useRef(null);

	const play = () => {
		setTimeout(() => {
			console.log(refContainer.current.src);

			refContainer.current.load();
			refContainer.current.play();
		}, 10);
	};

	const stop = () => {
		console.log('stop');
		refContainer.current.pause();
	};

	useEffect(() => {
		console.log('mount');
		console.log('getting device info');
		getDeviceInfo().then((dev) => {
			console.log(`on : ${dev.platform}`);
			props.setDevice(dev.platform);
		});
	}, []);

	console.log(props.audio);
	return (
		<IonApp overflow-scroll="true">
			<IonReactRouter>
				<IonRouterOutlet>
					<Switch>
						<Route
							path="/virus"
							render={(props) => <CardList play={play} stop={stop} cards={virusCards} {...props} />}
							exact={true}
						/>
						<Route path="/:category/:info" render={(props) => <Info {...props} />} exact={true} />
						<Route
							path="/:category"
							render={(props) => <CardList play={play} stop={stop} cards={subCategoryCards} {...props} />}
							exact={true}
						/>
						<Route
							path="/"
							render={(props) => <CardList play={play} stop={stop} cards={categoryCards} {...props} />}
							exact={true}
						/>
					</Switch>
				</IonRouterOutlet>
			</IonReactRouter>
			<audio autoplay={true} src={props.audio.src} ref={refContainer} />
		</IonApp>
	);
};

const mapStateToProps = (state) => {
	const { device, audio } = state;
	return {
		device: device,
		audio: audio
	};
};

export default connect(mapStateToProps, { setDevice, initialiseVoice })(App);
