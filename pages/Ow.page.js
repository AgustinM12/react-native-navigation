import { View, FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFetchOw } from '../hooks/useFetchOw';
import { ImagesComponent } from '../components/Images.component';

export function OwScreen({ navigation }) {

    const { data } = useFetchOw()

    /* //* joystick icon */
    /* //* colores: */
    /* 72aee2 */
    /* ef4444 */

    const OwCard = ({ item }) => (
        <Card key={item.key} mode='outlined' style={{ width: 300, backgroundColor: "#72aee2" }}>
            <Card.Title title={`Hero Name: ${item.name}`} subtitle={`Role: ${item.role}`}
                left={() => <ImagesComponent name={item.key} />} titleStyle={{ fontWeight: "bold", }} />

            <Card.Content>
                <Text style={{ fontWeight: 'bold' }}>Picture:</Text>
            </Card.Content>

            <Card.Cover source={{ uri: item.portrait }}
                style={{ height: 256, width: 256, flex: 1, justifyContent: "center", alignSelf: "center", borderWidth: 2, borderColor: "black" }} />

            <Card.Actions>
                <Button labelStyle={{ color: "white", textShadowRadius: 10 }} style={{ backgroundColor: "#ffa200", borderColor: "black", }}>View Info</Button>
            </Card.Actions>

        </Card>
    )

    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 15, paddingBottom: 15, backgroundColor: "#e2ebfb" }}>
            {
                data.length > 0 ?
                    (<FlatList
                        data={data}
                        renderItem={({ item }) => <OwCard item={item} />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                    />) :
                    (<Text>
                        No hay personajes disponibles
                    </Text>)
            }
        </View>
    );
}