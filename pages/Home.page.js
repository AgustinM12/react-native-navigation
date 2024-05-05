import { View, ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../context/context';

export function HomeScreen({ navigation }) {

    const { list } = useContext(AppContext)

    const LeftContent = props => <MaterialCommunityIcons name="gamepad-square-outline" size={24} color="black" />

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                {
                    list.length > 0 ?
                        list.map((item, key) => (
                            <Card key={key} style={{ paddingBottom: 10 }}>
                                <Card.Title title={item} left={LeftContent} />
                                <Card.Content>
                                    <Text variant="titleLarge">Portrait</Text>
                                </Card.Content>
                                <Card.Cover source={{ uri: `https://ui-avatars.com/api/?name=${item}&background=random` }} />
                                <Card.Actions>
                                    <Button>Cancel</Button>
                                    <Button>Ok</Button>
                                </Card.Actions>
                            </Card>
                        )
                        ) : (
                            <Text>
                                La lista esta vacia
                            </Text>
                        )
                }

                <Button
                    style={{ backgroundColor: "purple" }}
                    labelStyle={{ color: "#ffffff" }}
                    onPress={() => navigation.navigate('Add')}
                >
                    Go to add
                </Button>
                <Button
                    style={{ backgroundColor: "purple" }}
                    labelStyle={{ color: "#ffffff" }}
                    onPress={() => navigation.navigate('Counter')}
                >
                    Go to Counter
                </Button>
            </View>
        </ScrollView>
    );
}