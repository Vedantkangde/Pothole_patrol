import React, { useState } from "react";
import axios from "axios";

function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [camera_no, setCamera_no] = useState("");
  const [area_name, setArea_name] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleVideoUpload = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleCameraChange = (event) => {
    setCamera_no(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea_name(event.target.value);
  };

  const handlelatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handlelongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (videoFile) {

    const data = JSON.stringify({
            "type": "Point",
            "coordinates": [
              latitude,
              longitude
          ]
          })
      const formData = new FormData();
      formData.append("video_file", videoFile);
      formData.append("camera_no", camera_no);
      formData.append("area_name", area_name);
      formData.append("geo_location", data);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/traffic-pothole-report/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setUploadStatus(response.data.message);
      } catch (error) {
        console.error(error);
        setUploadStatus("An error occurred while uploading the video");
      }
    } else {
      setUploadStatus("Please select a video file to upload");
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <div>
          <label htmlFor="camera_no">Camera No:</label>
          <input type="text" id="camera_no" value={camera_no} onChange={handleCameraChange} />
        </div>
        <div>
          <label htmlFor="area_name">Area Name:</label>
          <input type="text" id="area_name" value={area_name} onChange={handleAreaChange} />
        </div>
        <div>
          <label htmlFor="latitude">Latitude</label>
          <input type="number" id="latitude" value={latitude} onChange={handlelatitudeChange} />
        </div>
        <div>
          <label htmlFor="Longitude">Longitude</label>
          <input type="number" id="Longitude" value={longitude} onChange={handlelongitudeChange} />
        </div>
        <div>
          <label htmlFor="videoFile">Video file:</label>
          <input type="file" id="videoFile" accept="video/*" onChange={handleVideoUpload} />
        </div>
        
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default VideoUpload;