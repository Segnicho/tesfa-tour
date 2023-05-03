import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer, About, Tour, Blogs, Destination, Offerings, Booking, Reviews, Subscribe } from "../components";

const Home = () => {
  return (
    <BrowserRouter>
      <div id="home" className="px-10 bg-[#FEFCFB]">
        <Navbar />
        <About />
        <Offerings />
        <Destination />
        <Booking />
        <Reviews />
        <Tour />
        <Blogs />
        <Subscribe />
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
