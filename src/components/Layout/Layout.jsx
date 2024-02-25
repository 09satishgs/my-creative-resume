import React from "react";
import "./Layout.scss";
import { motion } from "framer-motion";
import Header from "./Header/Header";
import Body from "./Body/Body";
const Layout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="layout_main-container">
        <Header />
        <motion.div style={{ height: 200, backgroundColor: "red" }}>
          <Body />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Layout;
