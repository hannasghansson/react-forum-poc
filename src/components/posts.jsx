import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Posts = () => {
    const [ posts, setPosts ] = useState([])

    const getPosts = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setPosts(response.data);
    };
  
  useEffect( () => { getPosts() }, [posts]);

  return(

    
    <div className="postsContainer">
      <div className="postsHeader"> 
        <h2> Klicka på ett inlägg för att komma vidare till kommentarer och vem som har skrivit</h2>
        <hr></hr>
      </div>
     
      <div className= "postsList">
        <ol>
        {posts.map((post,i) => (
            <li  key={i}> 
            <Link style={{textDecoration: "none", color: 'black'}} to={`/post/${post.id}`} state={post} key={i} >Title: {post.title}</Link><br/> 
            </li>
            ))}
        </ol>
      </div>
      
    </div>

  );
}

export default Posts;

/*import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Posts = () => {
    const [ posts, setPosts ] = useState([])

    const getPosts = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setPosts(response.data);
    };
  
  useEffect( () => { getPosts() }, [posts]);

  return(
    <div className="postContainer">
        <ol>
        {posts.map((post,i) => (
            <li key={i}> 
            <Link to={`/post/${post.id}`} key={i} >Title: {post.title}</Link>
            body: {post.body} <br/> 
            id: {post.id} <br/>
            </li>
            ))}
        </ol>
    </div>

  );
}

export default Posts;*/