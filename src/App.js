import "./App.css";
// import React, { useState, useEffect } from "react";
import React from "react";
import video from "./videos/UnderwaterPhotoMusic_062314189.mp4";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("http://orangevalleycaa.org/api/videos").then(
  //       (response) => response.json()
  //     );
  //     setData(result);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header>
        <h1> Art Videos</h1>
      </header>
      <div>
        <video controls height={200} src={video}></video>
      </div>
      {/* {data.map((video) => {
        return (
          <div key={video.id}>
            <h2>{video.name}</h2>
            <video controls height={200} src={video.video_url}></video>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
