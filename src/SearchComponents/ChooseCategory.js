import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {TextInput,ScrollView} from 'react-native-gesture-handler';

import themes from '../config/themes';
const w = Dimensions.get('screen').width;

const ChooseCategory = ({onPress}) => {
  
  return(
  <View style={styles.container}>
  <View style={{
    flexDirection:"row",
    paddingHorizontal:20,
    paddingTop:15,
    width:"100%",
    alignItems:"center"
}}>
    <View style={{width:"50%"}}>
         <Text style={{
             fontWeight:"bold",
             fontSize:20,
             color:"#2F2F2A"
         }}>Choose Category</Text>
        

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
            
             elevation:2,
             backgroundColor:"#fff",
             marginLeft:20,
             marginTop:20,
             borderRadius:15,
             marginBottom:10,
             width:135,
             height:177,
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
                 fontSize: 15,
                 color:"#2F2F2A"
             }}>Basic Health Checkup</Text>
            
         </View>
        
         
        
     </TouchableOpacity>

     <TouchableOpacity 
         onPress={()=>navigation.navigate("Detail")}
         style={{
            width:135,
            height:177,
             elevation:2,
             backgroundColor:"#fff",
             marginLeft:20,
             marginTop:20,
             borderRadius:15,
             marginBottom:10,
             
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
                 fontSize: 15,
                 color:"#2F2F2A"
             }}>Family Health Checkup Package</Text>
            
         </View>
        
     </TouchableOpacity>

     <TouchableOpacity 
         onPress={()=>navigation.navigate("Detail")}
         style={{
             
             elevation:2,
             backgroundColor:"#fff",
             marginLeft:20,
             marginTop:20,
             borderRadius:15,
             marginBottom:10,
             width:135,
             height:177,
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
                 fontSize: 15,
                 color:"#2F2F2A"
             }}>Children Health Checkup Package</Text>
            
         </View>
         
     </TouchableOpacity>


 </ScrollView>
 </View>
  );
};

export default ChooseCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  

  wrapper: {},

});
