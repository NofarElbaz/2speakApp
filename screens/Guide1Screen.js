import React from "react";
import { StyleSheet, View, Text, TouchableOpacity , ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {HeadLine} from "../components/HeadLine";

export const Guide1Screen = (props) => {
  return (
    <ScrollView>
    <View style={styles.container}>
        <HeadLine/>
        <Text style={styles.text1}>
          אפליקציה זו פותחה  {"\n"}במטרה לאפשר לכם לנהל שיחה בצורה
          טבעית{"\n"} על ידי הקול שלכם{"\n"}אז איך זה עובד? {"\n"} אתם
          מקליטים משפט{"\n"}והמשפט מתורגם לכתב{"\n"}{"\n"}שימו לב{"\n"}לפני שתוכלו
          להקליט משפט אותו תרצו לתרגם {"\n"}עליכם להקליט ב&quot;לוח
          אימון&quot; את כל המילים המרכיבות את המשפט{"\n"}נשמע מסובך? לא לדאוג
          {"\n"}הכנו לכם מדריך קצר שמתאר את שלבי השימוש {"\n"}צעד אחר צעד{"\n"}
          {"\n"}
          {"\n"}כדי להמשיך למדריך , לחצו על החץ הצהוב
        </Text>
        <View style={styles.iconStack}>
          <MaterialIcons name="navigate-next" size={20} color="black" ></MaterialIcons>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Guide2")}
            style={styles.button}
          ></TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text1: {
    fontFamily: "yeuda-bold",
    color: "#010101",
    textAlign: "center",
    fontSize: 5,
    lineHeight: 25 , //space between lines
    marginTop : '15%',
    marginLeft : '0%'
  },
  iconStack:{
    left: '44%',
  },
  button: {
    width: 40,
    height: 44,
    position: "absolute",
  },
});