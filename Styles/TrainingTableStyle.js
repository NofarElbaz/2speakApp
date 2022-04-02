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
const window = Dimensions.get("window");

export const TrainingTableStyle = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "flex-start", // ignore this - we'll come back to it
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 8,
      },
      image: {
        width: vw(100) / COLUMNS - SPACING,
        height: screen.width * 0.22,
        marginLeft: MARGIN,
        marginTop: MARGIN,
      },
      imageButton: {
        borderWidth:1.2,
        borderColor:'#8AD2C6',
        alignItems:'center',
        justifyContent:'center',
        width: (window.width - 16)/4,
        height: (window.height)/7,
        backgroundColor:'white',
      },
      ScrollView:{
        backgroundColor: '#CDE8E1'
      }
      
})