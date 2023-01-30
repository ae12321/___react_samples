import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';

import './Home.css';

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      const customized = data.docs.map((doc) => {
        // console.log(doc.id, ' => ', doc.data().author); // {username:string, id:string}
        // console.log(doc.id, ' => ', doc.data()); //
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      // console.log(customized);
      setPostList(customized);
    };
    getPosts();
  }, []);

  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    // navigate('/');
    window.location.href = '/';
  };

  return (
    <div className="home_container">
      {postList.map((post, index) => {
        return (
          <div key={index} className="home_contents">
            <div className="home_header">
              <h1>{post.title}</h1>
            </div>

            <div className="home_post">{post.postText}</div>
            <div className="home_parts">
              <h4>{post.author.username}</h4>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
