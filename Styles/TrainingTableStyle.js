import { StyleSheet ,Dimensions } from "react-native"

function vw(percentageWidth) {
    return Dimensions.get('window').width * (percentageWidth / 100);
  }
  
  function vh(percentageHeight) {
    return Dimensions.get('window').height * (percentageHeight / 100);
  }

const COLUMNS = 5;
const MARGIN = vw(1);
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;
const screen = Dimensions.get("screen");


export const TrainingTableStyle = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "flex-start", // ignore this - we'll come back to it
        flexDirection: "row",
        flexWrap: 'wrap',
        height: "100%",
        //justifyContent: "space-between",
        padding: 10,
        //margin: 10,
        //alignSelf: 'flex-start'
        
      },
      square: {
        //backgroundColor: "#7cb48f",
        //borderColor: "#fff",
        //borderWidth: 1,
        marginLeft: MARGIN,
        marginTop: MARGIN,
        //width: vw(100) / COLUMNS - SPACING ,
        width:"100%",
        height: "100%",
        //margin: 1,
      },
      image: {
        width: vw(100) / COLUMNS - SPACING,
        //height:vh(100) / COLUMNS - SPACING,
        height: screen.width * 0.22,
        //alignSelf: "center", 
        //alignItems: "center",
        //borderWidth: 1,
        marginLeft: MARGIN,
        marginTop: MARGIN,
      },
      nameText: {
        fontWeight: "bold",
        color: "#20232a",
      },
      followText: {
        fontWeight: "bold",
        color: "#0095f6",
      
      },
      row: {
        flexDirection: "row",
        alignSelf: 'flex-start', 
        
      },
      text: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        //alignSelf: 'flex-start', 
    
      },
      imageButton: {
        borderWidth:1,
        borderColor:'black',
        //borderColor:'#addfd5', 
        alignItems:'center',
        justifyContent:'center',
        width:'25%',
        //height:100, //לשנות בהתאם לכמות התאים בטבלה
        height: screen.width * 0.25,
        backgroundColor:'#fff',
      },
      
})