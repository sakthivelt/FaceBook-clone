import React,{useState,useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import './Feed.css'
import db from './firebase'

function Feed({user}) {
    console.log(user.photoURL);
    const [User,setUser]=useState(user);
    const [posts,setPosts]=useState([]);

    useEffect(() => {
           db.collection('posts').orderBy("timestamp","desc").onSnapshot(snapshot=>{
               setPosts(snapshot.docs.map(doc=>({ id:doc.id, data:doc.data() })))
           })
           
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender User={User}/>   
            {posts.map((post) =>(
                         <Post 
                         key={post.data.id}
                         profilePic={post.data.profilePic} 
                         message={post.data.message}
                         username={post.data.username}
                         timestamp={post.data.timestamp}
                         image={post.data.image}
                         />
             ))}
    
        </div>
    );
}

export default Feed;

// image,username,timestamp,message