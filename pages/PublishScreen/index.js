import { View, Text, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import publishStyles from "./style";
import { COLOR, PADDING } from "../../outils/const";
const Publish = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "",
        alignItems: "flex-start",
        backgroundColor: "white",
        paddingTop:100,
      }}
    >
      <View style={publishStyles.container}>
        <Text style={publishStyles.titre}>D'où partez-vous ?</Text>
        <View style={publishStyles.inputContainer}>
          <AntDesign name='search1' size={18} color={COLOR.grayColor}/>
          <TextInput
            placeholder="Saisissez l'adresse précise"
            keyboardType="text"
            placeholderTextColor={COLOR.grayColor}
            style={publishStyles.input}
          />
        </View>
      </View>
      <View style={publishStyles.container}>
        <Text style={publishStyles.titre}>Où souhaitez-vous
        récupérer vos passagers ?</Text>
        <View style={publishStyles.inputContainer}>
          <AntDesign name='search1' size={18} color={COLOR.grayColor}/>
          <TextInput
            placeholder="Saisissez l'adresse précise"
            keyboardType="text"
            placeholderTextColor={COLOR.grayColor}
            style={publishStyles.input}
          />
        </View>
      </View>
      <View style={publishStyles.container}>
        <Text style={publishStyles.titre}>Où souhaitez-vous
        déposer vos passagers ?</Text>
        <View style={publishStyles.inputContainer}>
          <AntDesign name='search1' size={18} color={COLOR.grayColor}/>
          <TextInput
            placeholder="Saisissez l'adresse précise"
            keyboardType="text"
            placeholderTextColor={COLOR.grayColor}
            style={publishStyles.input}
          />
        </View>
      </View>
      <View style={publishStyles.container}>
        <Text style={publishStyles.titre}>Type de bagage pris en charge</Text>
        <View style={publishStyles.inputContainer}>
          <AntDesign name='search1' size={18} color={COLOR.grayColor}/>
          <TextInput
            placeholder="Saisissez l'adresse précise"
            keyboardType="text"
            placeholderTextColor={COLOR.grayColor}
            style={publishStyles.input}
          />
        </View>
      </View>
    </View>
  );
};

export default Publish;
