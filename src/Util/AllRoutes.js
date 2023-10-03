import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "../Pages/Nav/Nav";
import Home from "../Pages/Home/Home";

function AllRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AllRoutes;
