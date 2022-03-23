
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { styles } from './styles'
import Card from '../../components/card/index'
import Header from '../../components/header/index'
import useOrientation from '../../hooks/use-orentation'

const GameScreen = ({ userOptions, onGameOver }) => {
    const orientation = useOrientation()
    const generateRandomBetween = useCallback((min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        }
        else return rndNum;
    }, [currentHigh, currentLow, currentGuess, userOptions])

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if(currentGuess === userOptions) onGameOver(rounds)
    }, [currentGuess, userOptions, onGameOver])

    const handlerNextGuess = (direction) => {
        if(
            (direction === 'lower' && currentGuess < userOptions) ||
            (direction === 'greater' && currentGuess > userOptions)
        ) {
            Alert.alert('La opción es ', 'incorrecta', [{text: 'Volver'}, {text: 'Cancelar'}])
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(current => current +1)
    }

    return (
        <View style={styles.container}>
            <Header title='Juego Iniciado' />
            <Card style={orientation?.isPortrait ? styles.cardContainer : styles.cardContainerLandscape}>
                <Text style={styles.cardTitle}>El oponente piensa en</Text>
                <Text style={styles.confirmedText}>{currentGuess}</Text>
                <View style={styles.buttonsContainer}>
                    <Button title='Menor' onPress={() => handlerNextGuess('lower')} color='#8bb8e8'/>
                    <Button title='Mayor' onPress={() => handlerNextGuess('greater')} color='#8bb8e8'/>
                </View>            
            </Card>
        </View>
    )
} 

export default GameScreen;