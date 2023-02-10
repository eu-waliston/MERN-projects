import React from 'react'

import Stories from './Stories';
import Messenger from './Messenger'
import Post from './Post';

import axios from 'axios';

import styled from 'styled-components';

const Feed = () => {
    const [postData, setPostData] = React.useState([])
    const syncFeed = () => {
        axios.get('http://localhost:9000/posts')
            .then(res => {
                console.log(res.data);
                setPostData(res.data)
            })
    }

    React.useEffect(() => {
        syncFeed()
    }, [])



    return (
        <FeedWrapper>
            <Stories />
            < Messenger />
            {
                postData.map(entry => (
                    <Post 
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
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