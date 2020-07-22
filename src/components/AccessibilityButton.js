import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { IonFab, IonFabList, IonFabButton, IonIcon } from '@ionic/react'
import { reloadOutline, helpOutline, pauseOutline } from 'ionicons/icons'
import { setAudioSrc } from '../actions'
import { subCategorySentences, categorySentences } from '../static-data/sentences'
import { generateUserInstructions } from '../config/tts'

// TODO : later this instruction to be stored in store
class AccessibilityButton extends React.Component {
	render() {
		return (
			<Fragment>
				<IonFab vertical="bottom" horizontal="end" style={{ margin: '1rem' }}>
					<IonFabButton color="dark">
						<IonIcon icon={helpOutline} />
					</IonFabButton>
					<IonFabList side="top">
						<IonFabButton
							onClick={() => {
								this.props.setAudioSrc(
									'https://res.cloudinary.com/dndf9znin/video/upload/v1595261131/file_example_MP3_1MG_jvuy7w.mp3'
								)
								this.props.play()
							}}
						>
							<IonIcon icon={reloadOutline} />
						</IonFabButton>
						<IonFabButton
							onClick={() => {
								this.props.stop()
							}}
						>
							<IonIcon icon={pauseOutline} />
						</IonFabButton>
					</IonFabList>
				</IonFab>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	const { src } = state.audio
	return {
		src
	}
}

export default connect(mapStateToProps, { setAudioSrc })(AccessibilityButton)
