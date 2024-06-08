import {StyleSheet} from 'react-native'
import { COLOR, PADDING, TEXT_SIZE } from '../outils/const';


const searchStyles = StyleSheet.create({
    Container: {
        flex:1,
        alignItems:'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:'white',    
    },
    title: {
        paddingVertical:32,
        fontFamily: 'Poppins_600SemiBold',
        fontSize:TEXT_SIZE.title,
        textAlign:'center',
        

    },
    dateButton: {
        flex: 1,
        justifyContent: 'center',

      },
      dateText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: 'black',
      },
    ContainImage:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image: {
        resizeMode: 'cover', // Assurez-vous que l'image couvre toute la vue
      },
      fieldContain: {
        width:'100%',
        display:'flex',
        flexDirection:'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 20,
        columnGap:8,
        
      },
    input:{
        flex: 1,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginLeft: 10,
        color: 'black',
        

    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'flex-start',
        width:'100%',
        bottom:80,
      },
      imageBackground: {
        width: '100%',
        height: 300, // Vous pouvez ajuster cette valeur selon vos besoins
        bottom:32,
        position:'fixed'
      },
      buttonSearch: {
        width:'100%',
        padding:10,
        backgroundColor:COLOR.orangeColor,
        borderRadius:30,
        marginVertical:8,
        padding:10,

      },
      buttonText: {
        textAlign:'center',
        fontFamily: 'Poppins_700Bold',
        color:'white',
      }
});




export default searchStyles;