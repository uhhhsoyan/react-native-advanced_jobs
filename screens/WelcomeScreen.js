import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Weclome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away!', color: '#03A9F4' }

];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth')
    }

    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
            // note: dont need to bind 'this' bc we used an arrow function for callback function
        )
    }
}

export default WelcomeScreen;