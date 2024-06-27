import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
