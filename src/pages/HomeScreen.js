import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,TouchableOpacity,Image, ImageBackground} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {dummyData} from './DummyData'
import Carousel from '../components/Carousel';
import {TextInput,ScrollView} from 'react-native-gesture-handler';
import CreditCardDisplay from 'react-native-credit-card-display';
import {Actions} from 'react-native-router-flux';

const HomeScreen = ({navigation}) => {
  
  const { colors } = useTheme();

  const theme = useTheme();
  const BookAppointment=() =>{
    Actions.BookAppointment()//signup button function for navigating to signup page
  }
    return (
      <ScrollView 
      vertical
      showsVerticalScrollIndicator={true}
      style={{height:400}}
  >
      <View style={styles.container}>

          <View style={{backgroundColor:"#F67018"}}>
        <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={BookAppointment}
          >
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-calendar" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Book an Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: ' Order Medicines'})
          }>
          <View style={styles.categoryIcon}>
          <Ionicons name="ios-medkit" size={35} color="#000" />

          </View>
          <Text style={styles.categoryBtnTxt}>Order Medicines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: ' Order Medicines'})
          }>
          <View style={styles.categoryIcon}>
          <Ionicons name="ios-videocam" size={35} color="#000" />

          </View>
          <Text style={styles.categoryBtnTxt}>Virtual Consultation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: ' Order Medicines'})
          }>
          <View style={styles.categoryIcon}>
          <Ionicons name="ios-flask" size={35} color="#000" />

          </View>
          <Text style={styles.categoryBtnTxt}>Book Blood Test</Text>
        </TouchableOpacity>
    
       
      </View>
 
      </View>
      <Carousel data = {dummyData}></Carousel>
     

      <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#000"
                        }}>Government Schemes</Text>
                       

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15,
                            borderColor:"#F67018",
                            borderStyle:"solid",
                            borderWidth:2,
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                 color:"#F67018"
                            }}>View All</Text>
                        </View>
                   </View>
               </View>


               <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#fff",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#000"
                            }}>The Rashtriya Kishor Swasthya Karyakram</Text>
                           
                        </View>
                        <TouchableOpacity style={styles.button}  ><Text style={styles.buttonText}>Apply Now</Text></TouchableOpacity>

                       
                       
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#fff",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#000"
                            }}>The Rashtriya  Swasthya Bima Yojana</Text>
                           
                        </View>
                        <TouchableOpacity style={styles.button}  ><Text style={styles.buttonText}>Apply Now</Text></TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#fff",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#000"
                            }}>The Rashtriya  Swasthya Bima Yojana</Text>
                           
                        </View>
                        <TouchableOpacity style={styles.button}  ><Text style={styles.buttonText}>Apply Now</Text></TouchableOpacity>

                    </TouchableOpacity>


                </ScrollView>

<View style={{
                           
                            alignSelf :'center'
                        }}>
                            <CreditCardDisplay
    number={4242424242424242}
    cvc={123}
    expiration="04/21"
    name="Divyanshu Gupta"
    since="2017"
  />
                        </View>
                
                <View style={{
                  paddingTop:5,
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#000"
                        }}>Hospital Packages</Text>
                       

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15,
                            borderColor:"#F67018",
                            borderStyle:"solid",
                            borderWidth:2,
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#F67018"
                            }}>View All</Text>
                        </View>
                   </View>
               </View>

                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#fff",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#000"
                            }}>Max HealthCare Hospital</Text>
                          
                        </View>
                        <Text style={{
                                alignSelf :'center',
                                fontSize: 15,
                                color:"#000"
                            }}>Kurla West,Mumbai</Text>

                        <Text style={{
                                alignSelf :'center',
                                fontWeight:"bold",
                                fontSize: 15,
                                color:"#138808"
                            }}>Distance: 2 km</Text>

                      <Text style={{
                                alignSelf :'center',
                                fontWeight:"bold",
                                fontSize: 15,
                                color:"#F67018",
                                paddingTop:35,
                                paddingHorizontal:10,
                            }}>EMI starting at Rs 1000.</Text>
                            
                            <TouchableOpacity style={styles.button}  ><Text style={styles.buttonText}>View All</Text></TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#fff",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#000"
                            }}>Max HealthCare Hospital</Text>
                          
                        </View>
                        <Text style={{
                                alignSelf :'center',
                                fontSize: 15,
                                color:"#000"
                            }}>Kurla West,Mumbai</Text>

                        <Text style={{
                                alignSelf :'center',
                                fontWeight:"bold",
                                fontSize: 15,
                                color:"#138808"
                            }}>Distance: 2 km</Text>

                      <Text style={{
                                alignSelf :'center',
                                fontWeight:"bold",
                                fontSize: 15,
                                color:"#F67018",
                                paddingTop:35,
                                paddingHorizontal:10,
                            }}>EMI starting at Rs 1000.</Text>
                            
                            <TouchableOpacity style={styles.button}  ><Text style={styles.buttonText}>View All</Text></TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#fff",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#000"
                            }}>Max HealthCare Hospital</Text>
                          
                        </View>
                        <Text style={{
                                alignSelf :'center',
                                fontSize: 15,
                                color:"#000"
                            }}>Kurla West,Mumbai</Text>

                        <Text style={{
                                alignSelf :'center',
                                fontWeight:"bold",
                                fontSize: 15,
                                color:"#138808"
                            }}>Distance: 2 km</Text>

                      <Text style={{
                                alignSelf :'center',
                                fontWeight:"bold",
                                fontSize: 15,
                                color:"#F67018",
                                paddingTop:35,
                                paddingHorizontal:10,
                            }}>EMI starting at Rs 1000.</Text>
                            
                            <TouchableOpacity style={styles.button}  ><Text style={styles.buttonText}>View All</Text></TouchableOpacity>

                    </TouchableOpacity>
                </ScrollView>
      <Button
        title="Go to details screen"
        color= '#000000'
        onPress={() => navigation.navigate("Notifications")}
      />

      </View>
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  

  wrapper: {},

  button: {
    width:137,
    height:37,
    backgroundColor:'#F67018',
     borderRadius: 19,
    opacity:1,
    margin: 5
     
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
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    color: '#fff',
  },
});