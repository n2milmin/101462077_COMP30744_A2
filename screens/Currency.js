import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import ModalDropdown from "react-native-modal-dropdown";


export default function Currency() {

    const [ money, setMoney ] = useState('1.00')
    const [ output, setOutput ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ from, setFrom ] = useState('CAD')
    const [ to, setTo ] = useState('')
    const [ toOptions, setToOptions ] = useState([])
    const [ fromOptions, setFromOptions ] = useState([])
    const [ rates, setRates ] = useState([])

    const url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LMNrLUw7xx9DsoykFgw6UgX9hlUxcZLrtpcnRa0L"

    useEffect(() => {
        fetch(url)
                .then((response) => response.json() 
                )
                .then((data) => {
                    const dd = Object.keys(data.data)
                    setToOptions(dd);
                    setFromOptions(dd);
                    setRates(Object.entries(data.data).map(([curr, rate]) => ({ curr, rate })))
                    setMessage("")
                })
                .catch(() => {
                    setMessage(" Error fetching currency data"); 
                });
    }, [])


    const handleExhange = () => {
        if(!money || !from || !to){
            setMessage("You missed something . . .")
            return 
        }
        
        const given = parseFloat(money)
        if(isNaN(given)){
            setMessage("Numbers only, smart guy")
            setMoney('1.00')
            return
        }

        try {
            const fromRate = rates.find(rate => rate.curr == from)
            const toRate = rates.find(rate => rate.curr == to)

            if(!fromRate || !toRate){
                setMessage("Something went wrong")
                given = 0
                return
            }

            const converted = (given / fromRate.rate) * toRate.rate
            setOutput(converted.toFixed(2))
            setMessage("")
        } catch (e) {

            setMessage("Something went wrong. Try again.")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Convert That Money!!!</Text>

            <Text style={styles.output}>
                {message.length > 0 ? message : ( "$"+ output)}
            </Text>
            
            <View style={styles.form}>
                <TextInput 
                    style={styles.moneyInput}
                    value={money}
                    onChangeText={c => setMoney(c)}
                />

                <View style={styles.currContainer}>
                    <View style={styles.currCol}>
                        <Text style={styles.currTitle}>From:</Text>
                        <ModalDropdown
                        style={styles.dropdown}
                        textStyle={styles.dropdownText}
                        options={fromOptions}
                        defaultValue={from}
                        onSelect={(index, value) => setFrom(value)}
                        dropdownStyle={{width: 100}}
                        initialScrollIndex={0}
                        />
                    </View>

                    <MaterialIcons 
                        name="arrow-right" 
                        size={ 40 }
                        color={ colour2 }
                        style={{ marginTop: 64 }}
                    />

                    <View style={styles.currCol}> 
                        <Text style={styles.currTitle}>To:</Text>
                        <ModalDropdown
                            style={styles.dropdown}
                            textStyle={styles.dropdownText}
                            options={toOptions}
                            defaultValue={to || "CHOOSE ME!"}
                            onSelect={(index, value) => setTo(value)}
                            dropdownStyle={{width: 100}}
                        />
                    </View>
                </View>
                
                <TouchableOpacity 
                style={styles.button} 
                onPress={ handleExhange }
                >
                <Text style={styles.buttonText}>Calculate</Text>
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
      justifyContent: 'space-between', 
      alignItems: 'center', 
    },
    title: {
      fontSize: 28,
      marginTop: 90,
      marginBottom: -50,
    },
    output: { 
        fontSize: 20,
        marginBottom: -50,
    },  
    button: {
      backgroundColor: colour3,
      padding: 15,
      borderRadius: 10,
      width: 150,
      alignItems: 'center',
      marginTop: 30,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    form: {
        width: '80%',
        alignItems: "center",
    },
    currContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    currCol: {
        width: '45%',
    },
    currTitle: {
        fontSize: 16,
        marginBottom: 10,
        marginTop: 30,
        textAlign: "center",
        paddingBottom: 4,
    },
    dropdown: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: colour3, 
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        backgroundColor: "white", 
    },
    dropdownText: {
        fontSize: 16, 
        color: colour2, 
        textAlign: 'center', 
        paddingVertical: 5, 
    },    
    moneyInput: {
        fontSize: 16, 
        width: 150,
        borderWidth: 1,
        borderColor: colour2,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: "white", 
        textAlign: 'center',
    },
    message: {
        color: 'red',
        fontSize: 18,
        marginTop: 20,
    },
  });