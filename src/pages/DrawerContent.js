import * as React from 'react';
import {g_name,g_email} from  '../components/Form';
import { View, StyleSheet } from 'react-native';
  import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";

export function DrawerContent(props) {
    const paperTheme = useTheme();
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{g_name?g_name:'name'}</Title>
                                <Caption style={styles.caption}>{g_email?g_email:'name@email.com'}</Caption>
                            </View>
                        </View>

                      
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                name="ios-home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                name="ios-person" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        />
                              <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                md="md-log-in"
                                name="ios-log-in" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Login/Signup"
                            onPress={() => {props.navigation.navigate('Login/Signup')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                name="ios-pricetag" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Rewards"
                            onPress={() => {props.navigation.navigate('Login/Signup')}}
                        />

<DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                md="md-card"
                                name="ios-card" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="My EMI Health Cards"
                            onPress={() => {props.navigation.navigate('Login/Signup')}}
                        />

<DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                md="md-calendar"
                                name="ios-calendar" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="My Appointments"
                            onPress={() => {props.navigation.navigate('Login/Signup')}}
                        />
                     
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                name="ios-information-circle" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About us"
                            onPress={() => {props.navigation.navigate('AboutusScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons
                                name="ios-help-circle" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Help & Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Ionicons 
                        name="ios-log-out" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
        
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });