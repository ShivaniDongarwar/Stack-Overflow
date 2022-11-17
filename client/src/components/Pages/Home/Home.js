import React from "react";
import '../../../App.css'
import RightSideBar from "../../RightSideBar/RightSideBar";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import HomeSideBar from "../../HomeSideBar/HomeSideBar";
function Home() {
  return (
    <div className='home-container-1' style={{minHeight:'100vh'}}>
    <LeftSideBar />
    <div className='home-container-2'>
        <HomeSideBar />
        <RightSideBar />
    </div>
</div>
  );
}

export default Home;
