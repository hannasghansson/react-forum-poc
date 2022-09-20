
import { useState, useEffect } from 'react';
import {  Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
 

const PostsID = () => {
    const location = useLocation();
    const {id} = useParams();
    const [ comments, setComments ] = useState([])
    const [ post, setPost ] = useState([])
  
    const getComments = async () => {
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        setComments(commentsResponse.data);
    };

    const getPost = async () => {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(postResponse.data);
    }

   useEffect( () => { getComments();
    if (!location.state){
        getPost()
        console.log("gettingData");
    }

}, []); 

    return (


    <div className="postIDContainer">
        <div className='btn'>
        <Link style={{textDecoration: "none"}} to="/"><button> Back</button> </Link>
        </div>

        <div className="postHeader">
            <h2>Posts</h2>
                <p className="postText">
                    <span className='title'>{location.state? location.state.title:post.title }</span> <br />
                    {location.state? location.state.body:post.body } 
                </p>
        </div>

        <div className="commentContainer">
            <ol className="commentList">
                {comments.map((comment,i) => (
                <li key={i}>
                   <span> Namn:</span> {comment?.name}  <br/>

                   <span> Kommentar:</span> {comment?.body}<br/> <br/>
                   
                   <span> Email:</span> {comment?.email} <br/>
                   <span> ID:</span> {comment?.id}
            
                </li>
                ))}
            </ol>
        </div>
        
    </div>
    )

}
export default PostsID;

/*  */

/*FUNGER EJ
import { useState, useEffect } from 'react';
import axios from 'axios';

const postID = () => {
    const [ user, setUser ] = useState([])


    const getPostID = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?userId=${user}`);
        setUser(response.data);
    };

    useEffect( () => { getPostID() }, [user]);

    return (


    <div className="postIDContainer">

        <ul>
        {user.map((user,i) => (
            <li key={i}>
                Body: {user?.body} <br/>
                Email: {user?.email} <br/>
                Email: {user?.name}
            </li>

            ))}
        </ul>
    </div>
    )

}
export default postID;
*/


/*FUNGERAR 
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostsID = () => {
    const [ user, setUser ] = useState([])


    const getPostsID = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?userId=${user}`);
        setUser(response.data);
    };

    useEffect( () => { getPostsID() }, [user]);

    return (


    <div className="postIDContainer">

        <ul>
        {user.map((user,i) => (
            <li key={i}>
                Kommentar: {user?.body} <br/>
                Namn: {user?.name}<br/>
                Email: {user?.email} 
            </li>

            ))}
        </ul>
    </div>
    )

}
export default PostsID;
*/

/* FUNGER INTE 
import { useState, useEffect } from 'react';
import axios from 'axios';

const postID = () => {
    const [ user, setUser ] = useState([])


    const getPostID = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?userId=${user}`);
        setUser(response.data);
    };

    useEffect( () => { getPostID() }, [user]);

    return (


    <div className="postIDContainer">

        <ul>
        {user.map((user,i) => (
            <li key={i}>
                Body: {user?.body} <br/>
                Email: {user?.email} <br/>
                Email: {user?.name}
            </li>

            ))}
        </ul>
    </div>
    )

}
export default postID;
*/