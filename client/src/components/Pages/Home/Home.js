import React from "react";
import '../../../App.css'
import RightSideBar from "../../RightSideBar/RightSideBar";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import HomeSideBar from "../../HomeSideBar/HomeSideBar";
function Home() {
  return (
    <div className="home-container-1">
      <RightSideBar />
      <div className="home-container-2">
        <HomeSideBar />
        <LeftSideBar />
      </div>
    </div>
  );
}

export default Home;