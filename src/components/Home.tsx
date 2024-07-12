import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Home = (props: any) => {
  // console.log("Home is",props)
  return (
    <View style={{flex:1}}>
      <Text
        style={{
          position: "absolute",
          right: 20,
          zIndex: 1,
          backgroundColor: "red",
          color: "#fff",
          padding: 4,
          borderRadius: 15,
          width: 30,
          height: 30,
          textAlign: "center",
          fontWeight:"bold",
        }}
      >
        {props.cartData.length}
      </Text>
      <Image
        style={{ height: 60, width: 60, marginLeft: "85%" }}
        source={require("../../assets/istockphoto-1206806317-1024x1024.jpg")}
      />
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
          margin: 5,
          flexDirection: "row",
        }}
      >
        <Image
          style={{ height: 150, width: 150 }}
          source={require("../../assets/iphone11-review.webp")}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "blue",
                margin: 10,
              }}
            >
              Iphone 11
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Price: 32000
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <TouchableOpacity
              style={{ backgroundColor: "blue", padding: 5, borderRadius: 5 }}
              onPress={() =>
                props.addToCartHandler()
              }
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                padding: 5,
                borderRadius: 5,
                marginTop: 5,
              }}
              onPress={() => props.removeToCartHandler()}
            >
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}>
                Remove to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
