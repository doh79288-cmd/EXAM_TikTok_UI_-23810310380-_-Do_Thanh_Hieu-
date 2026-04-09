import React, { useState } from "react";
import { FlatList, View, Modal } from "react-native";
import VideoItem from "../components/VideoItem";
import CommentsScreen from "./CommentsScreen";

const data = [
  {
    id: "1",
    user: "hieu",
    desc: "Video chill 😎",
    likes: "10K",
    comments: "500",
    avatar: "https://i.pravatar.cc/100",
  },
  {
    id: "2",
    user: "tiktok",
    desc: "Hello world",
    likes: "20K",
    comments: "1K",
    avatar: "https://i.pravatar.cc/101",
  },
];

export default function ForYouScreen() {
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