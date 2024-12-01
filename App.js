import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import Currency from './screens/Currency';
import About from './screens/About';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#48392A",
            },
            headerTitleStyle: {
              color: "white",
              fontWeight: "bold"
            }
          }}        
        >
        <Stack.Screen 
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "Home",
            headerTitleAlign: 'center',
            headerRight: () => (
              <Icon
                  name="info"
                  size={ 30 }
                  color="white"
                  onPress={ () => navigation.navigate('About')}
                />
            ),
            headerLeft: () => (
              <Icon
                  name="currency-exchange"
                  size={ 30 }
                  color="white"
                  onPress={ () => navigation.navigate('Currency')}
                />
            ),
          })}
        />
        <Stack.Screen 
            name="Currency"
            component={Currency}
            options={({ navigation }) => ({
              title: "Currency Converter",
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="info"
                  size={ 30 }
                  color="white"
                  onPress={ () => navigation.navigate('About')}
                />
              ),
              headerLeft: () => (
                <Icon
                  name="home"
                  size={ 30 }
                  color="white"
                  onPress={ () => navigation.navigate('Home')}
                />
              )
            })}
          />
          <Stack.Screen 
            name="About"
            component={About}
            options={({ navigation }) => ({
              title: "About",
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="currency-exchange"
                  size={ 30 }
                  color="white"
                  onPress={ () => navigation.navigate('Currency')}
                />
              ),
              headerLeft: () => (
                <Icon
                  name="home"
                  size={ 30 }
                  color="white"
                  onPress={ () => navigation.navigate('Home')}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

