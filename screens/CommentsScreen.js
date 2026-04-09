import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CommentsScreen({ onClose }) {
  const [text, setText] = useState("");

  const comments = [
    { id: "1", user: "user1", content: "Hay quá 🔥" },
    { id: "2", user: "user2", content: "Nice video 😍" },
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Comments</Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.user}>{item.user}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.inputBox}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Add a comment..."
          style={styles.input}
        />
        <TouchableOpacity>
          <Ionicons name="send" size={24} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  title: { fontSize: 18, fontWeight: "bold" },

  comment: { padding: 10 },

  user: { fontWeight: "bold" },

  inputBox: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
  },

  input: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});