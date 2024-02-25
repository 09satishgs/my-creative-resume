import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ height: 0, overflow: "hidden" }}
      animate={{ height: 48 }}
      transition={{ duration: 1 }}
    >
      <div className="header_main-container">
        <Grid container spacing={0}>
          <Grid item lg>
            <div className="main-content">
              <div
                onClick={() => {
                  navigate("/homepage");
                }}
              >
                home
              </div>
              <div
                onClick={() => {
                  navigate("/my-task-list");
                }}
              >
                tasks
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
};
export default Header;
