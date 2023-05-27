import { useState } from "react";

function MenuBar() {
    const [shouldShow, setShouldShow] = useState(false);
    const [skillsEffect, setSkillsEffect] = useState("barHeaders");
    const [projEffect, setProjEffect] = useState("barHeaders");
    const [expEffect, setExpEffect] = useState("barHeaders");

    const f = () => console.log(window.scrollY);
    window.addEventListener("scroll", f);
    
    const passedMain  = () => {
      if (window.scrollY >= 769) {
        setShouldShow (true);
      } else {
        setShouldShow(false);
      }
    };
    const passedSkills = () => {
      if (window.scrollY >= 990 && window.scrollY < 2500) {
        setSkillsEffect ("barHeadersSelected");
      } else {
        setSkillsEffect("barHeaders");
      }    
    }

    const passedProj = () => {
      if (window.scrollY >= 2500 && window.scrollY < 3100) {
        setProjEffect ("barHeadersSelected");
      } else {
        setProjEffect("barHeaders");
      }    
    }

    const passedExp = () => {
      if (window.scrollY >= 3100 ) {
        setExpEffect ("barHeadersSelected");
      } else {
        setExpEffect("barHeaders");
      }    
    }

    window.addEventListener('scroll', passedMain);
    window.addEventListener('scroll', passedSkills);
    window.addEventListener('scroll', passedProj);
    window.addEventListener('scroll', passedExp);

    return (shouldShow?<header className="MenuBar">
          <nav>
          <a className = {skillsEffect} href="#skills"> <p> Skills </p> </a>
          <a className = {projEffect} href="#projects"> <p> Projects </p> </a>
          <a className = {expEffect} href="#exp"><p>Experience </p></a>
          </nav>
          </header>:null);
}

export default MenuBar;