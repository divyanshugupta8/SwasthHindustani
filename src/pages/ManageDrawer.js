import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './MainScreen';


import {DrawerContent} from './DrawerContent';
import AboutusScreen from './AboutusScreen';
import SupportScreen from './SupportScreen';
import ProfileScreen from './ProfileScreen';
import Login from '../pages/Login';


const Drawer = createDrawerNavigator();


const App = ({navigation}) => {
  return (
    
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="AboutusScreen" component={AboutusScreen} />
          <Drawer.Screen name="Login/Signup" component={Login} />
          <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
          


      </Drawer.Navigator>
      
    </NavigationContainer>
    
  );
}
export default App;
