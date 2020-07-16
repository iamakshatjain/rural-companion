import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import CardList from './components/CardList';
import { IonReactRouter } from '@ionic/react-router';
import { connect } from 'react-redux';
import { setDevice } from './actions';
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
import { subCategorySentences, categorySentences, virusSentences } from './static-data/sentences';
import { subCategoryCards, categoryCards, virusCards } from './static-data/cards';
import { getDeviceInfo } from './helpers';
// Must import the package once to make sure the web support initializes
import '@capacitor-community/text-to-speech';
import { Plugins } from '@capacitor/core';

const { TextToSpeech } = Plugins;

const App = (props) => {
	useEffect(() => {
		console.log('mount');
		console.log('getting device info');
		getDeviceInfo().then((dev) => {
			console.log(`on : ${dev.platform}`);
			if (dev.platform === 'web') {
				setTimeout(() => {
					TextToSpeech.getSupportedVoices().then((data) => {
						// const voice = data.voices.filter(function(voice) {
						// 	return voice.lang === 'hi-IN';
						// })[0];

						TextToSpeech.speak({
							text: 'दैनिक स्वच्छता के बारे में ',
							locale: 'hi-IN'
						});
					});
				}, 300);
			} else if (dev.platform === 'android') {
				TextToSpeech.openInstall();
				setTimeout(() => {
					console.log('now');

					TextToSpeech.getSupportedVoices().then((data) => {
						console.log(data.voices);
						console.log(eval(data.voices)[0]);

						const voice = eval(data.voices).filter(function(voice) {
							return voice.lang === 'hi-IN';
						})[0];

						console.log(voice);

						TextToSpeech.speak({
							text: 'दैनिक स्वच्छता के बारे में ',
							voice: voice,
							lang: 'hi-IN'
						});
					});
				}, 1000);
			}
			props.setDevice(dev.platform);
		});
	}, []);

	return (
		<IonApp overflow-scroll="true">
			{/* <AccessibilityButton /> */}
			<IonReactRouter>
				<IonRouterOutlet>
					<Switch>
						<Route
							path="/virus"
							render={(props) => <CardList cards={virusCards} voices={virusSentences} {...props} />}
							exact={true}
						/>
						<Route path="/:category/:info" render={(props) => <Info {...props} />} exact={true} />
						<Route
							path="/:category"
							render={(props) => (
								<CardList cards={subCategoryCards} voices={subCategorySentences} {...props} />
							)}
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
	);
};

const mapStateToProps = (state) => ({
	device: state.device
});

export default connect(mapStateToProps, { setDevice })(App);
