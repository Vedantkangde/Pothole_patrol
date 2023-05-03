import React from "react";
import MainPage from "./Pages/MainPage";


function Home() {
  return (
    <>
      <MainPage
        mediumText="Be Safe while travelling"
        bigText="Pothole Patrol"
        para="Pothole detection is important to decrease accidents across the world.Our project enables users to click and report sites with potholes to the government, it also has a ML model which can classify roads."
        btn="Upload video"
      />
    </>
  );
}

export default Home;
