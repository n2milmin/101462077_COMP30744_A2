import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function About() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>My Awesome App</Text>

            {/* Creator Information */}
            <View style={styles.creatorInfo}>
                <Text style={styles.label}>Creator:</Text>
                <Text style={styles.value}>Nicole Milmine</Text>
            </View>
            <View style={styles.creatorInfo}>
                <Text style={styles.label}>Student ID:</Text>
                <Text style={styles.value}>101462077</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>COMP3074</Text>
                <Text style={styles.description}>Mobile App Development</Text>
                <Text style={styles.description}>Assignment 2</Text>
            </View>

            <View >
                <MaterialIcons 
                    name="grass" // gesture,
                    size={ 150 }
                    color={ colour2 }
                />
            </View>
        </View>
    );
}


const [ colour1, colour2, colour3 ] = [ "#FBF2C0", "#48392A", "#43281C"];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colour1, 
        alignItems: 'center',
        padding: 90,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colour3,
        marginBottom: 30,
    },
    creatorInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colour3,
    },
    value: {
        fontSize: 18,
        marginLeft: 10,
        color: colour3,
    },
    descriptionContainer: {
        marginTop: 50,
        marginLeft: -40,
    },
    description: {
        fontSize: 16,
        color: colour3,
        lineHeight: 22,
    },
});
