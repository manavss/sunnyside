import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import GridPage from "./components/GridPage";
import { useState } from "react";
import TestimonialsPage from "./components/TestimonialsPage";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full">
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <MainPage showMenu={showMenu} />
      <GridPage />
      <TestimonialsPage />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
