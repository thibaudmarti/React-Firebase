import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../utils/firebase.config";

const CommentPost = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="comment-container">
      <h5 className="comment-title">Commentaire</h5>
      {/* MAP */}
      {user ? (
        <form>
          <textarea placeholder="Envoyer un com"></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      ) : (
        <p>Vous devez être connecté pour poster un com</p>
      )}
    </div>
  );
};

export default CommentPost;
