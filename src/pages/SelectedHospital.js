import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  Button,
  TouchableOpacity
} from 'react-native';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import {dummyData2} from './DummyData'
import Carousel from '../components/Carousel';
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

export default class Hospital extends Component {
 
	


 
	render() {
		return(
      <ScrollView>
			<View style={styles.container}>
			<Carousel data = {dummyData2}></Carousel>

<View style={{marginLeft:20,marginTop:20}}>
				<View style={{flexDirection:"row"}}>

          <Text style={styles.text}> Diabetes Care</Text>
         

          

        </View>
        
        <Text style={styles.text}> Dr. Bhagvi Saglani</Text>
<Text style={styles.text2} >Diabetes Center</Text>

        </View>
        <View style={styles.categoryContainer}>

          <TouchableOpacity style={styles.button} ><Text style={styles.buttonText}>Book Now</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text  style={styles.buttonText}>Call Me Back</Text></TouchableOpacity>


        </View>
        <View style={styles.horizontal}></View>
        <View style={{marginLeft:20,marginTop:10}}>

        <Text style={{color:"#138808",fontSize:15,fontWeight:"bold"}}> Approximate Cost Rs 25000/- </Text>
        <Text style={{color:"#F67018",fontSize:15,fontWeight:"bold"}}>Open 9am-11pm</Text>
        <Text style={{color:"#138808",fontSize:15,fontWeight:"bold"}}>Distance : 11km</Text>

        </View>
        <View style={styles.horizontal}></View>

        <View style={{marginLeft:20,marginTop:10}}>

<Text style={{color:"#2F2F2A",fontSize:14,fontWeight:"bold"}}> Address: Bangalore India</Text>
<Text style={{color:"#2F2F2A",fontSize:15,fontWeight:"bold",marginTop:5}}>Phone: 9109101000</Text>

</View>
<View style={styles.horizontal}></View>

<View style={{marginLeft:20,marginTop:10,flexDirection:"row"}}>

<Text style={{color:"#2F2F2A",fontSize:18,fontWeight:"bold",marginRight:100}}> Review Summary</Text>
<TouchableOpacity style={styles.reviewbtn}><Text  style={styles.reviewtxt}>Write a review</Text></TouchableOpacity>

</View>


			</View>	
      </ScrollView>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#fff',
    flex: 1,
    
  },
  horizontal:{
    margin:5,
    borderColor:"#CDCDCD",
    borderStyle:"solid",
    opacity:1,
    borderBottomWidth:2
  },
  reviewbtn:{
   borderColor:"#F67018",
   borderRadius:14,
   borderStyle:"solid",
   borderWidth:5,
   width:107,
    height:30,

  },
  reviewtxt:{
    fontSize:12,
    width:78,
    height:16,
    margin:1,
    fontWeight:'bold',
    color:"#F67018",
    alignSelf:"center",
    opacity:1
  },
  categoryContainer: {
    flexDirection: 'row',
    width: "100%",
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  text:{
    textDecorationColor:"#2F2F2A",
    fontFamily: 'sans-serif',
    fontSize: 28,
    opacity:1,
    fontWeight: "bold",
  },
  text2:{
    textDecorationColor:"#8D8989",
    fontFamily: 'sans-serif',
    fontSize: 12,
    opacity:1,
  },
  button: {
    width:137,
    height:37,
    backgroundColor:'#F67018',
     borderRadius: 19,
    opacity:1,
     margin:30,
     
  },
  buttonText: {
    fontSize:16,
    width:78,
    height:21,
    margin:5,
    fontWeight:'bold',
    color:'#fff',
    alignSelf:"center",
    opacity:1
  }

});


const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

