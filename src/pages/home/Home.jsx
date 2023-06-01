import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


const Home = () => {
    return ( 
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="mainContainer">
                    <Feed />
                    <Rightbar />
                </div>
            </div>
        </div>
     );
}
 
export default Home;