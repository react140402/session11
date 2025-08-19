import { Button } from '@rneui/base';
import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform, Text, View } from 'react-native'


async function requestMicrophonePermission() {
    if (Platform.OS !== 'android') return true;

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: 'Microphone Permission',
                message: 'This app needs access to your microphone for speech recognition',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn(err);
        return false;
    }
}

export default function VoiceScreen() {
    const [results, setResults] = useState('');
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {

        // VoiceToText.getSupportedLanguages().then(console.log)

        // // Set up event listeners
        // const resultsListener = VoiceToText.addEventListener(
        //     VoiceToTextEvents.RESULTS,
        //     (event) => {
        //         setResults(event.value);
        //     }
        // );

        // const startListener = VoiceToText.addEventListener(
        //     VoiceToTextEvents.START,
        //     () => setIsListening(true)
        // );

        // const endListener = VoiceToText.addEventListener(
        //     VoiceToTextEvents.END,
        //     () => setIsListening(false)
        // );

        // // Clean up
        // return () => {
        //     VoiceToText.destroy();
        //     resultsListener.remove();
        //     startListener.remove();
        //     endListener.remove();
        // };
    }, []);


    // const toggleListening = async () => {
    //     try {
    //         if (isListening) {
    //             await VoiceToText.stopListening();
    //         } else {
    //             await VoiceToText.startListening();
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{results || 'Say something...'}</Text>
            <Button
                title={isListening ? 'Stop' : 'Start'}

            />
        </View>
    )
}
