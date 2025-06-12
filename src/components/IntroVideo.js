import React, { useState, useEffect } from 'react';
import '../styles/IntroVideo.css';
import ironThrone from '../assets/iron-throne.jpg';

const IntroVideo = ({ onSkip }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoEnded(true);
    }, 15000); // Assume video is 15 seconds long
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
      {!videoEnded ? (
        <>
          <video
            autoPlay
            muted
            onEnded={() => setVideoEnded(true)}
            className="intro-video"
          >
            <source src="/intro-video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={onSkip}
            className="btn btn-dark skip-button position-absolute top-0 end-0 m-3 text-gold"
            aria-label="Skip intro video"
          >
            Skip Intro
          </button>
        </>
      ) : (
        <div className="final-frame">
          <img
            src={ironThrone}
            alt="Iron Throne"
            className="final-frame-img"
          />
          <button
            onClick={onSkip}
            className="btn btn-dark continue-button position-absolute bottom-0 start-50 translate-middle-x mb-5 text-gold"
          >
            Enter the Realm
          </button>
        </div>
      )}
    </div>
  );
};

export default IntroVideo;