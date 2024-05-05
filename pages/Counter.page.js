import { Button, View, Text } from 'react-native';
import { useState } from 'react';

export function CounterScreen({ navigation }) {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {counter}
            </Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Button onPress={handleIncrement} title="Increment" />
            <Button onPress={handleDecrement} title="Decrement" />
            <Button onPress={handleReset} title="Reset" />


        </View>
    );
}