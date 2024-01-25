import React from "react";
import "./Layout.scss";
import Menu from "../../common/Icons/svg/Menu";
const Layout = () => {
  const [sidenavCollapsed, setSidenavCollapsed] = React.useState(true);
  return (
    <div className="parent-container body">
      <div className="layout-box">
        <div
          className={"side-nav" + (sidenavCollapsed ? " collapse" : " expand")}
        >
          <div className="side-nav_container"></div>
        </div>
        <div className="main-container">
          <div className="header-space">
            <div className="header-box">
              <div
                className="menu-state"
                onClick={() => {
                  setSidenavCollapsed((val) => {
                    return !val;
                  });
                }}
              >
                <Menu />
              </div>
            </div>
          </div>
          <div className="router-space"></div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
