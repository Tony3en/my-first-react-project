import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
// import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
// import wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';
// import hal from './hal.wav';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';

WaveSurfer.microphone = MicrophonePlugin;

class WaveSufer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            off: 1,
        }
    }


    componentDidMount() {
        this.wavesurfer = WaveSurfer.create({
            container: '#myAudio',
            waveColor: '#A8DBA8',
            progressColor: '#3B8686',
            interact: false,
            cursorWidth: 0,
            plugins: [WaveSurfer.microphone.create()]
        });
        // this.wavesurfer.load(hal);

    }
    //切换开始结束
    toggleWave = () => {
        if (this.state.off) {
            this.wavesurfer.microphone.start();
            this.setState({
                off:0,
            })
        }else{
            this.wavesurfer.microphone.stop();
            this.setState({
                off:1,
            })
        }

    }
    render() {
        return (
            <div>
                <div id="myAudio"></div>
                <button onClick={this.toggleWave}>{this.state.off ? 'Start' : 'Stop'}</button>
            </div>
        )
    }
}

export default WaveSufer;