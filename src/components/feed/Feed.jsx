import React from "react";
import "./feed.scss";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instgram.png";
import Linkedin from "../../assets/linkedin.png";
import Twitch from "../../assets/twitch.png";
import Google from "../../assets/google.png";
import Youtube from "../../assets/youtube.png";

const Feed = () => {
  return (
    <div className="feed">
      <div className="heading">
        <p>Jobs Related to your skills</p>
        <span>300+</span>
      </div>
      <p>We have sorted the jobs related to the skills you have.</p>

      <div className="jobsContainer">
        <div className="job">
          <div className="jobInfo">
            <img
              src={Twitch}
              alt=""
              className="image"
            />
            <div className="jobTitle">
              <span>Twitch | Today</span>
              <p>Junior UI Designer</p>
              <span>Lahore, Pakistan</span>
            </div>
            <BookmarksOutlinedIcon className="icon" />
          </div>
          <div className="jobSkills">
            <p>Junior</p>
            <p>Full time</p>
            <p>On site</p>
          </div>
          <div className="jobDesc">
            Twitch is an American video sharing company that focuses on video
            game streaming. Including broadcasts of esports competitors...
          </div>
        </div>
        <div className="job">
          <div className="jobInfo">
            <img
              src={Google}
              alt=""
              className="image"
            />
            <div className="jobTitle">
              <span>Google | Today</span>
              <p>UI/UX Designer</p>
              <span>Lahore, Pakistan</span>
            </div>
            <BookmarksOutlinedIcon className="icon" />
          </div>
          <div className="jobSkills">
            <p>Junior</p>
            <p>Full time</p>
            <p>On site</p>
          </div>
          <div className="jobDesc">
            Google is an American online search company that focuses on content
            search on internet. Including all the data...
          </div>
        </div>
        <div className="job">
          <div className="jobInfo">
            <img
              src={Facebook}
              alt=""
              className="image"
            />
            <div className="jobTitle">
              <span>Facebook | Today</span>
              <p>Junior UI Designer</p>
              <span>Islamabad, Pakistan</span>
            </div>
            <BookmarksOutlinedIcon className="icon" />
          </div>
          <div className="jobSkills">
            <p>Junior</p>
            <p>Full time</p>
            <p>On site</p>
            <p>Trainee</p>
          </div>
          <div className="jobDesc">
            Facebook is an American photos/videos sharing company that focuses
            on entertainment as well as business. Including top brands all of...
          </div>
        </div>
        <div className="job">
          <div className="jobInfo">
            <img
              src={Instagram}
              alt=""
              className="image"
            />
            <div className="jobTitle">
              <span>Instagram | Today</span>
              <p>Java Developer</p>
              <span>Lahore, Pakistan</span>
            </div>
            <BookmarksOutlinedIcon className="icon" />
          </div>
          <div className="jobSkills">
            <p>Junior</p>
            <p>Full time</p>
            <p>On site</p>
          </div>
          <div className="jobDesc">
            Instagram is an American social media company that focuses on
            entertaining its users. Including promotion of business...
          </div>
        </div>
        <div className="job">
          <div className="jobInfo">
            <img
              src={Linkedin}
              alt=""
              className="image"
            />
            <div className="jobTitle">
              <span>Linkedin | Today</span>
              <p>React Developer</p>
              <span>Lahore, Pakistan</span>
            </div>
            <BookmarksOutlinedIcon className="icon" />
          </div>
          <div className="jobSkills">
            <p>Junior</p>
            <p>Full time</p>
            <p>On site</p>
          </div>
          <div className="jobDesc">
            Linkedin is an American company that focuses on connecting people
            together. Including business as well as jobs...
          </div>
        </div>
        <div className="job">
          <div className="jobInfo">
            <img
              src={Youtube}
              alt=""
              className="image"
            />
            <div className="jobTitle">
              <span>Youtube | Today</span>
              <p>MERN Developer</p>
              <span>Lahore, Pakistan</span>
            </div>
            <BookmarksOutlinedIcon className="icon" />
          </div>
          <div className="jobSkills">
            <p>Junior</p>
            <p>Full time</p>
            <p>On site</p>
            <p>Trainee</p>
          </div>
          <div className="jobDesc">
            Youtube is an American video sharing company that focuses on vide
            game streaming. Including broadcasts of esports competitors...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
