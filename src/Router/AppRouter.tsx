
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Layout/Home';
import Project from '../Layout/Project';
import PageLaout from '../Layout/PageLaout';
import AboutMe from '../Components/AboutMe';
import TechStack from '../Components/TechStack';
import Contact from '../Components/Contact';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLaout />} > 
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter