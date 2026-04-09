import React, { useState } from "react";
import { FlatList, View, Modal } from "react-native";
import VideoItem from "../components/VideoItem";
import CommentsScreen from "./CommentsScreen";

const data = [
  {
    id: "1",
    user: "following",
    desc: "Following video 🔥",
    likes: "5K",
    comments: "200",
    avatar: "https://i.pravatar.cc/102",
  },
];

export default function FollowingScreen() {
  const [showComments, setShowComments] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        pagingEnabled
        renderItem={({ item }) => (
          <VideoItem item={item} onComment={() => setShowComments(true)} />
        )}
        keyExtractor={(item) => item.id}
      />

      <Modal visible={showComments} animationType="slide">
        <CommentsScreen onClose={() => setShowComments(false)} />
      </Modal>
    </View>
  );
}