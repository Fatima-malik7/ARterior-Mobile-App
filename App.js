import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Startup from './screens/Startup';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
// import ARScreen from './screens/ARscreen';
import ProductDetails from './screens/ProductDetails';
import Products from './screens/Products';
import SofaARView from './screens/SofaARView';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startup" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* <Stack.Screen name="ARScreen" component={ARScreen} /> */}
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="SofaARView" component={SofaARView} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
