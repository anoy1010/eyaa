import { StyleSheet } from "react-native";
import { PADDING, COLOR } from "../../outils/const";


const ConnexionStyles = StyleSheet.create ({
    contain: {
        height: "100%",
        display: "",
        justifyContent: "space-between",
        alignItems: "center",
        
        paddingVertical: PADDING.vertical,
        backgroundColor:"white"
      },
      viewimage: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: 32,
      },
      viewImg: {
        width: 200,
        height: 250,
        borderRadius:30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // Pour iOS
        shadowColor: '#000',
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 20,
        // Pour Android
        elevation: 20,
      },
      logo: {
        width: 100,
        height: 100,
      },
      img: {
        width: 200,
        height: 250,
        borderRadius: 30,
        shadowColor: "#babecc",
        shadowOpacity: 8,
        elevation: 20,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      text: {
        textAlign:'center',
        paddingVertical:PADDING.vertical,
        fontFamily: "Poppins_600SemiBold",
        fontSize: 32,
      },
      button: { 
        alignItems:"center",
        justifyContent:'center',
        borderRadius:100,
        backgroundColor: COLOR.orangeColor,
      },
     
})

export default ConnexionStyles;