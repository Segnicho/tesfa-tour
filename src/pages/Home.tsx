import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, About, Tour, Blogs, Destination } from "../components";

const Home = () => {
  return (
    <BrowserRouter>
      <div id="home" className="px-10">
        <Navbar />
        <About />
        <Destination />
        <Tour />
        <Blogs />
        <Footer />
      </div>
    </BrowserRouter>
  );
  {
    /* <Routes>
      <Navbar />
      <Route path="/about" element = {<About/>}/>
      <Route path="/destination" element = {<Destination/>}/>
      <Route path="/tour" element = {<Tour/>}/>
      <Route path="/blogs" element = {<Blogs />}/>
      <Footer />
    </Routes> */
  }
};

export default Home;
