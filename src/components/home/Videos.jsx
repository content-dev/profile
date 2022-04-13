import React from 'react';
import VideoCard from "./VideoCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Video = ({videos}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white" id="videos">
                    <h2 className="display-4 mb-5 text-center">
                        {videos.heading}
                    </h2>
                    <Row>
                        {
                            videos.data.map(data => {
                                return <VideoCard key={data.video} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Video;