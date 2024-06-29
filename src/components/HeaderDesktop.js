import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./HeaderDesktop.css";

const HeaderDesktop = ({ className = "" }) => {
  return (
    <section className={`header-desktop ${className}`}>
      <header className="ticker">
        <div className="get-100-off-container">
          <span>{`Get $100 off on purchases over $30. `}</span>
          <span className="add-voucher">Add Voucher</span>
        </div>
      </header>
      <div className="header">
        <div className="overlayblur">
          <div className="link">
            <img
              className="cs2gearshop-transparent-1-icon"
              loading="lazy"
              alt=""
              src="/cs2gearshop-transparent-1@2x.png"
            />
          </div>
          <div className="container">
            <div className="link1">
              <div className="store">Store</div>
            </div>
            <div className="link2">
              <div className="sell">Sell</div>
            </div>
            <div className="link3">
              <div className="giveaway">Giveaway</div>
            </div>
          </div>
          <div className="container1">
            <div className="button">
              <div className="container2">
                <div className="container3">
                  <img className="icon" loading="lazy" alt="" src="/icon.svg" />
                </div>
              </div>
            </div>
            <div className="button-menu">
              <input className="container4" type="checkbox" />
            </div>
            <div className="container5">
              <div className="container6">
                <div className="container7">
                  <img
                    className="ussvg-icon"
                    loading="lazy"
                    alt=""
                    src="/ussvg.svg"
                  />
                </div>
                <div className="container8">
                  <div className="container9">
                    <img
                      className="icon1"
                      loading="lazy"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
              <FormControl
                className="container10"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "57.7px",
                  height: "40px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#9a9a9a",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "Sofia Sans",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "8px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="12.3px"
                      height="14px"
                      src="/icon-3.svg"
                      style={{ marginRight: "-7.283063041541027e-13px" }}
                    />
                  )}
                >
                  <MenuItem>USD</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="container11">
              <div className="button1">
                <div className="container12">
                  <div className="margin">
                    <div className="container13">
                      <div className="symbol"></div>
                    </div>
                  </div>
                  <b className="log-in-with">Log in with steam</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeaderDesktop.propTypes = {
  className: PropTypes.string,
};

export default HeaderDesktop;
