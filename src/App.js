import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Alert from "./components/modals/Alert";

import { useSelector } from "react-redux";

function App() {
  const alert = useSelector((state) => state.alert);
  useEffect(() => {
    document.body.style.backgroundColor = "#1868db";
    document.title = `Home - Tasks`;
  }, []);
  return (
    <>
      <Navbar />
      {alert.visible && <Alert />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
