import "./Counselor.css";
import { HiMail, HiPhone } from "react-icons/hi";

function Counselor() {
  return (
      <div className="counselor-card">
        <div className="name">
          <img
            src="https://lh3.googleusercontent.com/a/AGNmyxbjeCh_gQ7JuJOuonZCboA7Ub6tvQb___Oy2xLfpw=s96-c"
            alt=""
          />
          <h3>John Doe</h3>
        </div>
        <div className="age">
          <p>22 years, Male</p>
        </div>
        <div className="contact-box">
          <div className="counselor-post">
            <p>Therapist, Kochi</p>
          </div>
          <div className="contact">
            <div>
              <HiMail />
            </div>
            <div>
              <HiPhone />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Counselor;