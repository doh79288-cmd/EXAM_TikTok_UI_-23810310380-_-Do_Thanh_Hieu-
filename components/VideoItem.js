import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VideoItem({ item, onComment }) {
  return (
    <View style={styles.container}>

      <View style={styles.video} />

      <View style={styles.rightMenu}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />

        <TouchableOpacity>
          <Ionicons name="heart" size={30} color="white" />
          <Text style={styles.count}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onComment}>
          <Ionicons name="chatbubble" size={30} color="white" />
          <Text style={styles.count}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="share-social" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomText}>
        <Text style={styles.username}>@{item.user}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  video: { flex: 1, backgroundColor: "#222" },

  rightMenu: {
    position: "absolute",
    right: 10,
    bottom: 120,
    alignItems: "center",
    gap: 15,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  count: {
    color: "white",
    textAlign: "center",
  },

  bottomText: {
    position: "absolute",
    bottom: 40,
    left: 10,
  },

  username: {
    color: "white",
    fontWeight: "bold",
  },

  desc: {
    color: "white",
  },
});