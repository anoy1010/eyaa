import { View } from 'react-native'
import React from 'react'
import HomeStyles from './style'
import ButtonNext from '../../comps/buttonNext';
import Carouselcomponent from './carouselcomponent';


export default function HomeScreen(params) {
  return (
    <View>
      <Carouselcomponent style={HomeStyles.contain}/>
    </View>
  )
}



function Screen1 () {
  return (
    <View style={HomeStyles.contain}>
      <View style={HomeStyles.viewimage}>
        <Image 
          source={require("./../../assets/logo.png")}
          style={HomeStyles.logo}
        />
      </View>
      <View style={HomeStyles.viewImg}> 
      <Image 
          source={require("./../../assets/1navigation.jpg")}
          style={HomeStyles.img}
        />
      </View>
      <View>
        <Text style={HomeStyles.text}>Se deplacer à petit prix</Text>
      </View>
      <View>
        <View>

        </View>
        <ButtonNext/>
      </View>
    </View>
  )
  
}