import React from 'react';
import Skeleton from "react-loading-skeleton";

import { 
    Col,
    Card
 } from "react-bootstrap";
const VideoCard = ({data}) => {
    const {
        name,
        task,
        description,
        videoImg,
        videoUrl,
        year,
      } = data;    
      return (
        <Col md={4}>
          <Card border="success" className="card shadow-lg p-1 mb-5 bg-white rounded" >
          <Card.Header style={headerStyle}>{name}</Card.Header>  
            <Card.Body>
                <Card.Img src={videoImg} />           
              <Card.Text style={descStyle}> {(!description)?"":description || <Skeleton/>} </Card.Text>                           
              {videoUrl ? <CardButtons video_url={videoUrl} /> : <Skeleton count={2} />}                       
            </Card.Body>
          
            <Card.Footer style={footerStyle} className="text-muted">
                {year}
                <span style={{ marginLeft: '2rem' }}> {task} </span>                 
            </Card.Footer>
          </Card>
        </Col>
      );
}

const CardButtons = ({ video_url }) => {
    return (
      <>
        <a href={video_url} target=" _blank" className="btn btn-outline-secondary">
          <i className="fab fa-google-play" /> Play Video
        </a>
      </>
    );
  };

  const descStyle = {
    color: 'gray',
    fontSize: 13,
    paddingTop: '10px',
  };

  const footerStyle = {
    padding: '0.3rem 1.25rem',
    color: 'gray',
    fontSize: 11,

  };

  const headerStyle = {
    padding: '0.4rem 1.25rem',
    color: 'black',
    style: 'bold',
    fontSize: 15,
  };

export default VideoCard;