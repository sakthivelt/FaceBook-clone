import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story profileSrc={'https://rb.gy/0c1vct'} image="https://rb.gy/lftocn" title={'Sakthivel'}/>
            <Story profileSrc={'https://rb.gy/w3chgd'} image="https://rb.gy/odzr0f" title={'Vishnu'}/>
             <Story profileSrc={'https://rb.gy/y8ayu4'} image="https://rb.gy/kzo6jz" title={'Aravind'}/>
            <Story profileSrc={'https://rb.gy/qmvziv'} image="https://rb.gy/sdnvfp" title={'Manoj'}/>
        </div>
    );
}

export default StoryReel;
