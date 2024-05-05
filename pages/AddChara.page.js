import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { useContext, useState } from 'react';
import { AppContext } from '../context/context';
import { FontAwesome } from '@expo/vector-icons';

export function AddScreen({ navigation }) {

    const { handleList } = useContext(AppContext)

    const [inputValue, setInputValue] = useState('');

    const handleAddToList = () => {
        handleList(inputValue);
        setInputValue('');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button style={{ backgroundColor: "purple", alignItems: "center", justifyContent: "around" }} labelStyle={{ color: "#ffffff" }}
                onPress={handleAddToList}
            >
                Agregar a la lista

                <FontAwesome5 name="plus-square" size={15} color="white" />
            </Button>

            <TextInput placeholder='Ingrese a quien quiere agregar a la lista  ' style={{ padding: 10 }} value={inputValue} onChangeText={setInputValue} />

            <Button style={{ backgroundColor: "purple", alignItems: "center", justifyContent: "around" }} labelStyle={{ color: "#ffffff" }}
                onPress={() => navigation.navigate('Home')}
            >
                Volver a Home

                <FontAwesome name="home" size={24} color="white" />
            </Button>

        </View>
    );
}
