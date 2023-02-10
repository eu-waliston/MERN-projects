import React from 'react'

import Stories from './Stories';
import Messenger from './Messenger'
import Post from './Post';

import styled from 'styled-components';

const Feed = () => {
    return (
        <FeedWrapper>
            <Stories />
            < Messenger />
            <Post
                profilePic="https://pngimg.com/uploads/anime_girl/anime_girl_PNG96.png"
                timestamp="1609512232424"
                imgName="https://s2.best-wallpaper.net/wallpaper/3840x2160/1901/Anime-girl-rose-thorns_3840x2160.jpg"
                username="Rose Thorns"
                message="I'm in love with this pic 🔥"
            />

            <Post
                profilePic="https://pngimg.com/uploads/anime_girl/anime_girl_PNG75.png"
                timestamp="1509512232424"
                imgName="https://www.yummytabs.com/assets/anime/backgrounds/default.jpg"
                username="Yumy Tabs"
                message="I'm so excited with this season 😍😍😍"
            />
        </FeedWrapper>
    )
}

const FeedWrapper = styled.div`
    flex:1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Feed;