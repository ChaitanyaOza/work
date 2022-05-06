import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions } from "react-native"

const {height, width} = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={styles.SplashScreen}>
      <View style={styles.Group4104}>
        <Image
          style={styles.Download32}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/rmmgkdoukon-2%3A3?alt=media&token=44d90376-5bb6-45a4-9a8f-21aec1061318",
          }}
        />
        <Text style={styles.Txt1105}>Powered By Grivaa Capital</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SplashScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height / 4,
    paddingBottom: 0,
    paddingLeft: width / 10,
    paddingRight: width / 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: width,
    height: height,
  },
  Group4104: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Download32: {
    width: width / 2,
    height: height / 5,
    alignItems: "center",
    marginBottom: width / 1,
  },
  Txt1105: {
    fontSize: 18,
    //fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    color: "rgba(38,0,146,1)",
  },
})
