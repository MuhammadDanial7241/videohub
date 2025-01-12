import React, { useState } from "react";
import { PlusCircle } from "lucide-react"; // Importing the upload icon from lucide-react
import { Upload } from "lucide-react";
const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("video/")) {
        setVideoFile(URL.createObjectURL(file)); // Set video URL
      } else {
        alert("Please select a valid video file");
      }
    }
  };

  // Function to trigger hidden file input when the icon is clicked
  const triggerFileInput = () => {
    document.getElementById("videoInput").click();
  };

  return (
    <div>
      
      
      {/* Hidden file input */}
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        style={{ display: "none" }}
        id="videoInput"
      />

      {/* Lucide Icon to trigger file upload */}
      <div onClick={triggerFileInput} style={{ cursor: "pointer", fontSize: "48px", color: "#007BFF" }}>
        {/* <PlusCircle size={48} color="#007BFF" /> */}
        <Upload size={48} color="#007BFF" />
      </div>

      {/* Display video preview if video file is selected */}
      {videoFile && (
        <div>
          <h3>Video Preview:</h3>
          <video width="400" controls>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
