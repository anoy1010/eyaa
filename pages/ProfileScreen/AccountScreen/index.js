import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import accountStyles from './styles'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { COLOR } from '../../../outils/const'



const Account = () => {
  return (
    <View style={{ flex:1, justifyContent:'flex-start', alignItems:'center', backgroundColor:'white',}}>
      <View style={accountStyles.Container}>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Mots de passe</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Mode de paiement</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Mon solde</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Mes tajets publiés</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Devenir Chauffeur</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Conditions Générales</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Deconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Account;