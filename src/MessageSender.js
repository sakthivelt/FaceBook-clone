import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import MoodIcon from '@material-ui/icons/Mood';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import db from './firebase';
import firebase from 'firebase';

function MessageSender({User}) {

    const [user,setimage]=useState(User);
    const[input,setInput]=useState('');
    const[ImageUrl,setImageUrl]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:ImageUrl,
        });

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            
            <div className='messegeSender__top'>
                <Avatar src={user.photoURL}/>
                <form>
                <input className="messegeSender__input" placeholder={`what's on your mind ${user.displayName} ?`} 
                    value={input} onChange={(e)=>setInput(e.target.value)}/>
                <input placeholder="image URL (optional)"   value={ImageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
                <button onClick={handleSubmit} type='submit'>submit</button>
                </form>
            </div>

            <div className='messegeSender_bottom'>
                <div className="messegeSender_option">
                <VideocamIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messegeSender_option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                    </div>
                    <div className="messegeSender_option">
                    <MoodIcon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                    </div>
            </div>
        </div>
    );
}

export default MessageSender;