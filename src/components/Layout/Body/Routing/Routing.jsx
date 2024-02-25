import { Routes, Route } from "react-router-dom";
import HomePage from "../../../Pages/HomePage/HomePage";
import Tasks from "../../../Pages/Tasks/Tasks";
import { AnimatePresence, motion } from "framer-motion";
const Routing = () => {
  const ROUTES_LIST = [
    {
      path: "/",
      caseSensitive: false,
      key: "homepage-default",
      element: <HomePage />,
    },
    {
      path: "/homepage",
      caseSensitive: false,
      key: "homepage",
      element: <HomePage />,
    },
    {
      path: "/my-task-list",
      caseSensitive: false,
      key: "tasks-page",
      element: <Tasks />,
    },
  ];

  return (
    <Routes>
      {ROUTES_LIST.map(({ key, caseSensitive, element, path }) => {
        return (
          <Route
            caseSensitive={caseSensitive}
            path={path}
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  key={key}
                  animate={{ x: 0, scaleX: 1, opacity: 1, z: 1 }}
                  initial={{ opacity: 0, x: -1, z: 0, scaleX: 0 }}
                  transition={{ bounce: 0.5, duration: 1 }}
                  exit={{ opacity: 0, x: 1, z: 0, scaleX: 0 }}
                >
                  {element}
                </motion.div>
              </AnimatePresence>
            }
          />
        );
      })}
    </Routes>
  );
};
export default Routing;
