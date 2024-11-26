"use client";
import { Provider } from "react-redux";
import store from "../app/store";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <PostForm />
        <PostList />
      </Provider>
    </div>
  );
}
