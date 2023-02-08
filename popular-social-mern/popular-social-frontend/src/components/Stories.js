import React from "react";

import Story from './Story';

import styled from "styled-components";

const Stories = () => {
    return (
        <StoriesWrapper>
            <Story
                image="https://img-aws.ehowcdn.com/600x600p/cdn-write.demandstudios.com/upload/4000/300/80/5/404385.jpg"
                profileSrc="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                title="Alex"
            />

            <Story
                image="https://http2.mlstatic.com/hermosos-cachorros-pomerania-D_NQ_NP_988363-MCO27391305584_052018-F.jpg"
                profileSrc="https://i.pinimg.com/736x/9e/34/b0/9e34b05ecf565acb263217b07fdb4b33.jpg"
                title="Luka"
            />

            <Story
                image="http://1.bp.blogspot.com/-XnulChrGc2E/T_CrLWK4CZI/AAAAAAAACVc/fdVFU9RDO18/s1600/Cachorro_Mega_Wallpapers_HD+(5).jpg"
                profileSrc="https://i.pinimg.com/originals/5b/d5/8d/5bd58d6ccb4fb9e7154a92f52add7aa4.jpg"
                title="Meno"
            />
        </StoriesWrapper>
    )
}

const StoriesWrapper = styled.div `
    display: flex;
`

export default Stories;