import React from 'react';
import { StyleSheet, Text, ScrollView, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

/*
Main Screen is the page where user can view the scheduled reminders listed from soonest to latest
Displays the
*/

class MainScreen extends React.Component {
    render(){
        return (
            <SafeAreaView>
                <Image source={require("../graphics/apothicon.png")} style={styles.logo} />
                <Text>Hello World</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
        height: 100,
    }
})

export default MainScreen