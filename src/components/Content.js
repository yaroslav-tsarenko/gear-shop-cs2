import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="sign-in-container">
        <div className="sign-in">
          <div className="form-fields">
            <div className="form-title">
              <h1 className="sign-in1">Sign in</h1>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="input-fields">
              <TextField
                className="input-label"
                placeholder="Username"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img
                      width="16px"
                      height="16px"
                      src="/input-containers.svg"
                    />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#181818",
                    paddingRight: "11px",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.8)",
                  },
                }}
              />
              <TextField
                className="input-label1"
                placeholder="Password"
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
                    backgroundColor: "#181818",
                    paddingRight: "15px",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.8)",
                  },
                }}
              />
              <Button
                className="button4"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#5a5a5a",
                  borderRadius: "4px",
                  "&:hover": { background: "#5a5a5a" },
                }}
              >
                Sign In
              </Button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="social-buttons">
              <img
                className="social-icons"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-icons1"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-icons2"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-shape-icon"
        loading="lazy"
        alt=""
        src="/rectangle-49@2x.png"
      />
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
