import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native';

const Info = () => {

    const goToLinkedin = () => {
        Linking.openURL('https://www.linkedin.com/in/desire-boutchoue-541035153/').catch(err => console.error('An error occurred', err));
    }

    const goToWebsite = () => {
        Linking.openURL('http://www.angeboutchoue.com/').catch(err => console.error('An error occurred', err));
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop: 20, margin: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('../../assets/images/desire.jpg')} />
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Desire Boutchoue</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <TouchableOpacity onPress={goToLinkedin}>
                            <Image style={{ width: 30, height: 30, borderRadius: 50 }} source={require('../../assets/images/linkedin.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goToWebsite} style={{ marginLeft: 10 }}>
                            <Image style={{ width: 30, height: 30, borderRadius: 50 }} source={require('../../assets/images/website.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 40 }}>
                    <Text>This project is about Revpanda Task. Its about Create a simple React Native app with at least two screens.
                        Design and implement a clean and intuitive user interface without specific mockups.
                        Use basic styling to enhance the visual appeal of the app.
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    )
};

export default Info;
