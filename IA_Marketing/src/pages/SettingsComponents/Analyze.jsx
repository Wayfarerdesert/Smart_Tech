import React, { useState } from 'react';
import gsap from 'gsap';

const Analyze = () => {
  const BTN_COLOR = "#ffffff";
  const BTN_BACKGROUND_COLOR = "#F7A400";
  const BTN_WIDTH = 225;
  const BTN_HEIGHT = 80;
  const BTN_BORDER_RADIUS = "0.75em";
  const BTN_SIZE = 180;
  const ANIMATION_TIME = 0.5; // tiempo
  const UPLOADING_BACKGROUND_COLOR = "#d3d3d3";
  const UPLOADING_WIDTH = 320;
  const UPLOADING_HEIGHT = 30;
  const DEFAULT_CONTAINER_BACKGROUND_COLOR = "#ffffff";
  const DEFAULT_BTN_UPLOAD_BACKGROUND_COLOR = "#F7A400";
  const COMPLETE_CONTAINER_BACKGROUND_COLOR = "#ffffff";
  const COMPLETE_BTN_UPLOAD_BACKGROUND_COLOR = "#0fe600";
  const COMPLETE_SIZE = 180;
  const CHECK_WIDTH = "100%";
  const CHECK_HEIGHT = "100%";
  const PROGRESS_TIME = 5; // tiempo

  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);

    // Your original script code goes here...
  };

  return (
    <div id="container">
      <button
        className={`btn-upload ${uploading ? "btn-upload-uploading" : ""}`}
        id="btn_upload"
        onClick={handleUpload}
      >
        <span>ANALIZAR</span>
        <div className="progress"></div>
        <div className="check">
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default Analyze;
