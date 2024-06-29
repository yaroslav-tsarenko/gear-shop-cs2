import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="sign-in-wrapper">
        <div className="sign-in2">
          <div className="sign-up-form">
            <h1 className="sign-up">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="form-fields1">
            <div className="name-fields">
              <TextField
                className="name-inputs"
                placeholder="Your Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#242424",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.8)",
                  },
                }}
              />
              <TextField
                className="contact-fields"
                placeholder="Email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#242424",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.8)",
                  },
                }}
              />
            </div>
            <div className="name-fields1">
              <TextField
                className="name-fields-child"
                placeholder="Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#242424",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.8)",
                  },
                }}
              />
              <div className="country-parent">
                <div className="country">Country</div>
                <img
                  className="contact-inputs-icon"
                  alt=""
                  src="/contact-inputs.svg"
                />
              </div>
            </div>
            <div className="name-fields2">
              <TextField
                className="name-fields-item"
                placeholder="Username"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="16px" height="16px" src="/frame-153-1.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#242424",
                    paddingRight: "11px",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.8)",
                  },
                }}
              />
              <div className="password-parent">
                <div className="password">Password</div>
                <img className="frame-item" alt="" src="/frame-153-2.svg" />
              </div>
            </div>
            <Button
              className="button7"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#5a5a5a",
                borderRadius: "4px",
                "&:hover": { background: "#5a5a5a" },
                height: 54,
              }}
            >
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-buttons1">
            <img
              className="social-icons3"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-icons4"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-icons5"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="background-shape-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
