import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import IncomeDetails from '../components/IncomeDetails';

const IncomeDetailsScreen = ({navigation}) => {
  
  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
                
                <View style={styles.parent}>
                <TouchableOpacity title ={"Income Details"} 
               style={styles.parentLeftbutton}             >
             <Text style={styles.buttonText}>Salaried</Text>
             <Text style={styles.buttonText}>(regular monthly income)</Text>

           </TouchableOpacity>  
           <TouchableOpacity title ={"Income Details"} 
               style={styles.parentRightbutton}              >
             <Text style={styles.buttonText}>Business</Text>
             <Text style={styles.buttonText}>(runs own business)</Text>

           </TouchableOpacity>  
           </View>
           <IncomeDetails></IncomeDetails>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Income Details Screen</Text>
   
      </View>
    );
};

export default IncomeDetailsScreen;

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  parent: {
     
    
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 13,
    justifyContent: 'space-around'
  },
  parentLeftbutton: {
    marginRight: 20, 
    marginLeft: 15, 

    width:200,
    backgroundColor:'#1c313a',

      paddingVertical: 13
  },

  parentRightbutton: {
    marginLeft: 20, 
    marginRight: 30 , 

    width:200,
    backgroundColor:'#1c313a',

      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});