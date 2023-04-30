import React, { useState } from 'react'
import axios from 'axios';
// import {TmpFilesystem} from "like-fs";
// import * as os from 'os';
const Video_upload = () => {


  // const fs = new TmpFilesystem({
  //   tmpDirectory: os.tmpdir() + '/'
  // });

  const [pothole, setPothole] = useState({
    camera_no: "",
    area_name: "",
    Latitude:17,
    longitude:18,
  });
  
  
  const handleChange = (e) => {
    e.preventDefault();
    setPothole({ ...pothole, [e.target.name]: e.target.value });
   
  };
  const handleFileChange = (e) => {
    e.preventDefault();
    setPothole({ ...pothole, Video: e.target.files[0] });
  };

 


  
  const onSubmit = async () => {
      console.log(pothole)
      const formData  = new FormData();
      formData.append("area_name", pothole.area_name);
      formData.append("camera_no", pothole.camera_no);
      
      formData.append("video_file",pothole.Video);
      const data = JSON.stringify({
        "type": "Point",
        "coordinates": [
          pothole.Latitude,
          pothole.longitude
      ]
      })
      formData.append("geo_location",data)
      console.log(formData.get("video_file"))
      try {
        const response = await axios({
          method: "POST",
          url: "http://127.0.0.1:8000/api/traffic-pothole-report/",
          data: formData,
          headers: {  'Content-Type': 'multipart/form-data',
                      'Content-Type': 'application/json',
                      'content-type': pothole.Video.type,
                  
        },
        });
        console.log(response)
      } catch(error) {
        console.log(error)
      }
      

    }
  return (
      <>
    <div className="form-content-right">
      <div className="form">
       
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="camera_no"
            placeholder="camera_no"
            value={pothole.Name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">area_name</label>
          <input
            className="form-input"
            type="text"
            name="area_name"
            placeholder="Enter area_name"
            value={pothole.area_name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">longitude</label>
          <input
            className="form-input"
            type="number"
            name="longitude"
            placeholder="Enter Last Job Position"
            value={pothole.longitude}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Latitude</label>
          <input
            className="form-input"
            type="number"
            name="Latitude"
            placeholder="Enter Last Job Position"
            value={pothole.Latitude}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Upload Your video_file</label>
          <input
            className="form-input"
            type="file"
            name="video_file"
            placeholder="video_file"
            value={pothole.video_file}
            onChange={(e) => handleFileChange(e)}
          />
      
        </div>
        <button className="form-input-btn" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
    </>
  )
}

export default Video_upload