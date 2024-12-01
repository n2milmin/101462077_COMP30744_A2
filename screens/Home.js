import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>
            <Text style={styles.h2}>Real time rates!</Text>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Currency')}
                >
                    <Text style={styles.buttonText}>Exhange Now!</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('About')}
                >
                <Text style={styles.buttonText}>About us</Text>
                </TouchableOpacity>
            </View>

            <View >
                <MaterialIcons 
                    name="grass" // gesture,
                    size={ 150 }
                    color={ colour2 }
                />
            </View>
        </View>
    )
}

const [ colour1, colour2, colour3 ] = [ "#FBF2C0", "#48392A", "#43281C"];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colour1,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    title: {
      fontSize: 24,
    },
    h2: {
        fontSize: 20,
        fontStyle: "italic",
        marginBottom: 40,
    },
    buttonContainer: {
      flexDirection: 'col',  
      justifyContent: 'center',  
      gap: 20, 
      marginBottom: 50
    },
    button: {
      backgroundColor: colour3,
      padding: 15,
      borderRadius: 10,
      width: 150,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });