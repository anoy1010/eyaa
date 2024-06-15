import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ConnexionStyles from './style'

const Connexion = () => {
  return (
    <View style={ConnexionStyles.contain}>
      <View style={ConnexionStyles.viewimage}>
        <Image
          source={require("./../../assets/logo.png")}
          style={ConnexionStyles.logo}
        />
      </View>
      <View style={ConnexionStyles.viewImg}> 
      <Image 
          source={require("./../../assets/1navigation.jpg")}
          style={ConnexionStyles.img}
        />
      </View>
      <View>
        <Text style={ConnexionStyles.text}>Un vaste choix de trajet à petit prix</Text>
      </View>
      <View>
        <View style={ConnexionStyles.butto}>
          <TouchableOpacity>
            <Text>Insccription</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Connexion