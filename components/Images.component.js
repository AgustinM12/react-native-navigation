import { useContext } from 'react';
import { Image, View } from 'react-native';
import { AppContext } from '../context/context';

export const ImagesComponent = ({ name }) => {
    const { roleList } = useContext(AppContext);

    return (
        <View style={{
            width: 35, // Adjust width and height for border size
            height: 35,
            borderRadius: 50,
            borderColor: "white",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image
                source={roleList.tank.includes(name) ? require('../assets/Tank.png') :
                    roleList.dps.includes(name) ? require('../assets/Dps.png') :
                        roleList.supp.includes(name) ? require('../assets/Supp.png') : null}
                style={{ width: 24, height: 24 }}
            />
        </View>

    );
};



