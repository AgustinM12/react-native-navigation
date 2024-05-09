import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { CounterScreen } from './pages/Counter.page';
import { HomeScreen } from './pages/Home.page';
import { AddScreen } from './pages/AddChara.page';
import { OwScreen } from './pages/Ow.page';
import { AppProvider } from './context/context';

const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Overwatch 2 Wiki'>
          <Drawer.Screen name="Overwatch 2 Wiki" component={OwScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Counter" component={CounterScreen} />
          <Drawer.Screen name="Add" component={AddScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}