import { View, Text, Image, ImageBackground, TextInput, Platform, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import searchStyles from "../style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from '@react-native-community/datetimepicker';
import { PADDING } from "../../outils/const";

const Search = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  const [text, setText] = React.useState("");
  return (
    <View style={searchStyles.Container}>
      <View>
        <Text style={searchStyles.title}>
          Un vaste choix de trajets à petit prix
        </Text>
      </View>
      <View style={searchStyles.inputContainer}>
        <ImageBackground
          source={require("./../../assets/im2.jpg")}
          style={searchStyles.imageBackground}
        ></ImageBackground>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            paddingHorizontal:PADDING.horizontal,
            backgroundColor:'white',
            marginHorizontal:12,
          }}
        >
          <SafeAreaView style={searchStyles.fieldContain}>
            <FontAwesome name="circle-o" color="black" size={18} />
            <TextInput
              style={searchStyles.input}
              placeholder="Départ"
              keyboardType="text"
        placeholderTextColor="black"
            />
          </SafeAreaView>
          <SafeAreaView style={searchStyles.fieldContain}>
        <FontAwesome name="circle-o" color="black" size={18} style={searchStyles.icon} />
        <TextInput
          style={searchStyles.input}
          placeholder="Destination"
          keyboardType="default"
          placeholderTextColor="black"
        />
      </SafeAreaView>
      <SafeAreaView style={searchStyles.fieldContain}>
        <FontAwesome name="calendar" color="black" size={24} style={searchStyles.icon} />
        <TouchableOpacity onPress={showDatepicker} style={searchStyles.dateButton}>
          <Text style={searchStyles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <SafeAreaView style={searchStyles.fieldContain}>
        <MaterialCommunityIcons name="account-group" color="black" size={32} style={searchStyles.icon} />
        <TextInput
          style={searchStyles.input}
          placeholder="Nombre de places"
          keyboardType="numeric"
          placeholderTextColor="black"
        />
      </SafeAreaView>
      <TouchableOpacity style={searchStyles.buttonSearch}>
        <Text style={searchStyles.buttonText}>Rechercher</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;
