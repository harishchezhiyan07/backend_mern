import { Routes, Route } from "react-router-dom";
import AllSports from "./component/allsports";
import Mens from "./component/mens";
import Kids from "./component/Kids";
import Women from "./component/Women";
import Navbar from "./Navbar";

const AppRoute = () => {
  return (
    <>
  

      <Routes>
        <Route path="/" element={<Mens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/women" element={<Women />} />
        <Route path="/allsports" element={<AllSports />} />
      </Routes>
    </>
  );
};

export default AppRoute;