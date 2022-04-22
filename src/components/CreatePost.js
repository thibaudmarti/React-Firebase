import React, { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addPost } from "../feature/post.slice";

const CreatePost = ({ uid, displayName, getNewPosts }) => {
  const message = useRef();
  const dispatch = useDispatch();

  const handlePost = async (e) => {
    e.preventDefault();

    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
      date: Date.now(),
    };
    await addDoc(collection(db, "posts"), data)
      .then(() => {
        dispatch(addPost(data));
      })
      .then(() => {
        getNewPosts();
        message.current.value = "";
      });
    // console.log(data);
  };

  return (
    <div className="new-post-modal">
      <form onSubmit={handlePost}>
        <textarea placeholder="Message..." ref={message}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default CreatePost;
