import React, {useState, useEffect} from 'react'
import { AiFillAliwangwang } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import styled from "styled-components";

export default function Landing() {
  const [currentLink, setCurrentLink] = useState(1);
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])
 
  return (
    <Section>
      <Router>
        <div className="navbar">
          <div className="logo">
            <AiFillAliwangwang />
          </div>
          {(toggleMenu || screenWidth > 500) && (
          <nav className="nav">
            <Link
              className={currentLink === 1 ? "active" : "link"}
              onClick={() => setCurrentLink(1)}
              to="/"
            >
              Home
            </Link>
            <Link
              className={currentLink === 2 ? "active" : "link"}
              onClick={() => setCurrentLink(2)}
              to="/about"
            >
              About
            </Link>
            <Link
              className={currentLink === 3 ? "active" : "link"}
              onClick={() => setCurrentLink(3)}
              to="profile"
            >
              Profile
            </Link>
            <Link
              className={currentLink === 4 ? "active" : "link"}
              onClick={() => setCurrentLink(4)}
              to="contact"
            >
              Contact
            </Link>
          </nav>
          )}
          <button className="sign__up">Sign Up</button>

          <button className="hamburger" onClick={toggleNav}> <GiHamburgerMenu/> </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Section>
  );
}

const Section = styled.section`
  .navbar {
    color: white;
    display: flex;
    margin: 3rem;
    .logo {
      font-size: 3rem;
      margin-top: 0.3rem;
    }
    .nav {
      display: flex;
      text-decoration: none;
      margin: 0.9rem 2rem;
      letter-spacing: 0.2rem;
    }

    .sign__up {
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      min-width: 140px;
      height: 50px;
      color: White;
      border-radius: 4rem;
      background-color: rgb(230, 124, 124);
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(0, 140, 255);
      }
    }
  }
  .active {
  color: red;
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 4rem;
  border-bottom: 1px solid white;
}



.link {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 4rem;

  &:hover{
    color: rgb(255, 100, 100);
  }
}

  .hamburger{
    font-size: 3rem;
    position:fixed;
    right:50px;
    z-index:999;
    border:none;
    background:none;
    color:White;
    display:none;
  }
}


@media (max-width: 500px) {
   
  .hamburger{
    display:block;
  }
  .sign__up{
    position:fixed;
    right:120px;

  }

  .nav{
    display:flex;
    flex-direction: column;
    text-align: center;
    margin-top:12rem;
    background-color: #212121;
    color:black;
    position:fixed;
    top:-17px;
    left:-34px;
    width:768px;
    height:100%;
    z-index:1;
    .active {
      display:flex;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 5rem;
  align-items: center;
  border:none;
}



.link {
  display:flex;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 5rem;
  align-items: center;
  

}
  }

`;
