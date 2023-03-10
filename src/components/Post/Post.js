import "./Post.css";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
function Post() {
  return (
    <div className="post-div">
      <div className="post-inner">
        <div className="user-detail">
          <img src="https://lh3.googleusercontent.com/a/AGNmyxbjeCh_gQ7JuJOuonZCboA7Ub6tvQb___Oy2xLfpw=s96-c" alt="" />
          <h3>Shimil</h3>
        </div>
        <div className="post-content">
          <p>Post goes here..</p>
        </div>
        <div className="post-details">
          <div className="user-interaction">
            <i>
              <AiOutlineHeart />
            </i>
            <p className="likes">23</p>
            <i>
              <AiOutlineComment />
            </i>
          </div>
          <div className="date">
            <p>12:23pm</p>
            <p>12 Jan 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;