
import React from 'react';
import './Loading.scss'; 

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="Halftone" />
      <div className="hero-bg bg1" />
      <div className="hero-bg bg2" />
      <div className="hero-bg bg3" />
      <div className="hero-bg bg4" />
      <div className="hero-bg bg5" />
      <div className="hero-bg bg6" />
      <div className="hero-bg bg7" />
      <div className="diamond-loader">
        <div className="diamond"></div>
        <div className="diamond"></div>
        <div className="diamond"></div>
      </div>

      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;