
import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions,TouchableOpacity, Linking } from "react-native";
import { Image } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const companies = [
  //{"name":"ESB Networks Ltd","img":"https://i.imgur.com/nuM1x4J.png"},
  {"name":"Pinergy","img":"https://i.imgur.com/1FBdxNA.png",link:"https://pinergy.ie/home-electricity/pay-as-you-go/"},
  {"name":"Prepay Power","img":"https://i.imgur.com/56vBIit.png",link:"https://www.prepaypower.ie/why-switch/switch-now"},
  {"name":"Electric Ireland","img":"https://i.imgur.com/8PYOiHc.png",link:"https://www.electricireland.ie/switch/new-customer/price-plans?priceType=E"},
 // {"name":"EirGrid","img":"https://i.imgur.com/TgQwEYt.png"},
 // {"name":"EcoPowe Supply","img":"https://i.imgur.com/TgQwEYt.png"},
 // {"name":"Flow ais","img":"https://i.imgur.com/TgQwEYt.png"},
 // {"name":"Glow Power","img":"https://i.imgur.com/TgQwEYt.png"},
  //{"name":"Viridian Energy Ltd","img":"https://i.imgur.com/TgQwEYt.png"},
  {"name":"Airtricity","img":"https://i.imgur.com/6JaKy6R.png",link:"https://www.sseairtricity.com/ie/home/products/switch-to-sse-airtricity/?jump=true&filter=eleconly"},
  {"name":"Energia","img":"https://i.imgur.com/PnJRUWH.png",link:"https://www.energia.ie/plans-and-switching-info/electricity"},
 // {"name":"Huntstown Power Station","img":"https://i.imgur.com/TgQwEYt.png"},
  {"name":"Bord Gais Energy Supply","img":"https://i.imgur.com/oGLpSVY.png",link:"https://www.bordgaisenergy.ie/news/how-to-switch"}];
  // {"name":"Water Power","img":"https://i.imgur.com/TgQwEYt.png"}];
//const companies = ["ESB Networks Ltd", "Pinergy", "Prepay Power", "Electric Ireland", "EirGrid", "EcoPowe Supply","Flow gas","Glow Power","Viridian Energy Ltd","Airtricity","Energia","Huntstown Power Station","Bord Gais Energy Supply","Water Power"];
const cheapItem = [
  //{name:"Water Power",img:"https://i.imgur.com/FXKhZ8g.png"},
  //{name: "ESB Networks Ltd",img:"https://i.imgur.com/8PYOiHc.png"},
  {name:"Pinergy",img:"https://i.imgur.com/1FBdxNA.png",link:"https://pinergy.ie/home-electricity/pay-as-you-go/"},
  {name: "Prepay Power", img:"https://i.imgur.com/56vBIit.png",link:"https://www.prepaypower.ie/why-switch/switch-now"},
  {name: "Electric Ireland",img:"https://i.imgur.com/8PYOiHc.png",link:"https://www.electricireland.ie/switch/new-customer/price-plans?priceType=E"},
 // {name:"EirGrid",img: "https://i.imgur.com/TgQwEYt.png"},
//  {name:"EcoPowe Supply",img:"https://i.imgur.com/TgQwEYt.png"},
  //{name: "Bord Gais",img:"https://i.imgur.com/TgQwEYt.png"},
  //{name:"Glow Power",img:"https://i.imgur.com/TgQwEYt.png"},
  //{name: "Viridian Energy Ltd",img:"https://i.imgur.com/TgQwEYt.png"},
  {name:"Airtricity",img:"https://i.imgur.com/6JaKy6R.png",link:"https://www.sseairtricity.com/ie/home/products/switch-to-sse-airtricity/?jump=true&filter=eleconly"},
  {name:"Energia",img:"https://i.imgur.com/PnJRUWH.png",link:"https://www.energia.ie/plans-and-switching-info/electricity"},
 // {name: "Huntstown Power Station",img:"https://i.imgur.com/TgQwEYt.png"},
  {name:"Bord Gais Energy Supply",img:"https://i.imgur.com/oGLpSVY.png",link:"https://www.bordgaisenergy.ie/news/how-to-switch"}];

const WIDTH = Dimensions.get('window').width;


const Deals = ({ navigation, route }) =>{
  
  if(route.params.q1 == "green"){
    if(route.params.q2 == "prepay"){
      return (
        <View style={styles.container}>
            <FlatList 
             
                data={companies}
                keyExtractor={(item) =>item.name}
                renderItem={({ item }) => {if((item.name === "Pinergy" || item.name === "Prepay Power") && item.name !==route.params.q3){
                  return(
                  <View style={styles.item}>
                    <Text style={styles.title}>{item.name}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                        <Image  style={styles.logo} source={{uri:item.img}}></Image>
                    </TouchableOpacity>
                    
                  </View>
                  )
                }
                }
              }
            />
                    
            {/* <Text> {route.params.q1}</Text>
            <Text> {route.params.q2}</Text>
            <Text> {route.params.q3}</Text> */}
        </View>
    
        
    )
    }else{
      return  (
        <View style={styles.container}>
            <FlatList 
             
                data={companies}
                keyExtractor={(item) =>item.name}
                renderItem={({ item }) => {if(item.name !== "Pinergy" && item.name !== "Prepay Power" && item.name !==route.params.q3){
                  return(
                  <View style={styles.item}>
                   <Text style={styles.title}>{item.name}</Text>
                   <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                        <Image  style={styles.logo} source={{uri:item.img}}></Image>
                    </TouchableOpacity>
                  </View>
                  )
                }
                }
              }
            />
                    
            {/* <Text> {route.params.q1}</Text>
            <Text> {route.params.q2}</Text>
            <Text> {route.params.q3}</Text> */}
        </View>
    
        
    )
    }
   
  }else if (route.params.q1 == "cheap"){
     if(route.params.q2 == "prepay"){
      
    return  (
    <View style={styles.container}>
          <FlatList 
           
              data={cheapItem}
              keyExtractor={(item) =>item.name}
                renderItem={({ item }) => {if((item.name === "Pinergy" || item.name === "Prepay Power") && item.name !==route.params.q3){
                return(
                <View style={styles.item}>
                 <Text style={styles.title}>{item.name}</Text>
                 <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                        <Image  style={styles.logo} source={{uri:item.img}}></Image>
                  </TouchableOpacity>
                </View>
                )
              }
              }
            }
          />
                  
          {/* <Text> {route.params.q1}</Text>
          <Text> {route.params.q2}</Text>
          <Text> {route.params.q3}</Text> */}
      </View>
    )
  }else{
    return  (
      <View style={styles.container}>
          <FlatList 
           
              data={cheapItem}
              keyExtractor={(item) =>item.name}
              renderItem={({ item }) => {if(item.name !== "Pinergy" && item.name !== "Prepay Power" && item.name !==route.params.q3){
                return(
                <View style={styles.item}>
                 <Text style={styles.title}>{item.name}</Text>
                 <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                    <Image  style={styles.logo} source={{uri:item.img}}></Image>
                  </TouchableOpacity>
                </View>
                )
              }
              }
            }
          />
                  
          {/* <Text> {route.params.q1}</Text>
          <Text> {route.params.q2}</Text>
          <Text> {route.params.q3}</Text> */}
      </View>
  
      
  )
  }
  
}
}


export default Deals;

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        marginTop: 8,
        backgroundColor: "#f2f1f2"
        
    },
    row:{
        justifyContent:'space-evenly',
        alignItems:"center",
 
        flexDirection: "row",
        flexWrap: "wrap",
        padding:10,
    },
    rowItem:{
        width:'33%',
        height:'25%',
        padding:3,
        backgroundColor:'blue',
        fontSize:10,
        color:'white'
    },
    itemsStyles:{
        alignItems:'center',
        justifyContent:'center',
        height:100,
        margin:2,
        height: WIDTH /  2,
        backgroundColor: '#fff',
    },
    item: {
    backgroundColor: '#e71e70',
    marginTop: 0.05* windowHeight,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    color:"#f2f1f2"
  },
  logo:{
    width:"100%",
    height:210,
    alignSelf:'flex-end',
  }
});