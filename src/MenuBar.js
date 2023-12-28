import { useState } from "react";
import Projects from "./Projects";

function MenuBar() {
    const [shouldShow, setShouldShow] = useState(false);
    const [skillsEffect, setSkillsEffect] = useState("barHeaders");
    const [projEffect, setProjEffect] = useState("barHeaders");
    const [expEffect, setExpEffect] = useState("barHeaders");

    const f = () => console.log(window.scrollY);
    window.addEventListener("scroll", f);
    
    const SKILLS_START = 990;
    const PROJ_START = 2416;
    const EXP_START = 3078;

    const passedMain  = () => {
      if (window.scrollY >= 769) {
        setShouldShow (true);
      } else {
        setShouldShow(false);
      }
    };
    const passedSkills = () => {
      if (window.scrollY >= SKILLS_START && window.scrollY < PROJ_START) {
        setSkillsEffect ("barHeadersSelected");
      } else {
        setSkillsEffect("barHeaders");
      }    
    }

    const passedProj = () => {
      if (window.scrollY >= PROJ_START && window.scrollY < EXP_START) {
        setProjEffect ("barHeadersSelected");
      } else {
        setProjEffect("barHeaders");
      }    
    }

    const passedExp = () => {
      if (window.scrollY >= EXP_START ) {
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