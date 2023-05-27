import { useState } from "react";

function Exp() {


    const education = (
        <>
<div class="timeline">
  <div class="event">
    <div class="dot"></div>
    <div class="content">
      <h3 class="title">National University of Singapore (NUS) </h3>
      <p class="year">Aug 2021 - Apr 2025</p>
      <p class="description"> Computer Science (Honours) <br/> NUS Merit Scholarship recipient </p>
    </div>
  </div>
  <div class="event">
    <div class="dot"></div>
    <div class="content">
      <h3 class="title">National Junior College</h3>
      <p class="year">2017 - 2018</p>
      <p class="description">GCE A Levels Straight As <br/>(90/90 rank points) <br/> H2 Physics, Mathematics, Economics, Chemistry <br/> H1 General Paper, Project Work</p>
    </div>
  </div>
  <div class="event">
    <div class="dot"></div>
    <div class="content">
      <h3 class="title">Nan Hua High School</h3>
      <p class="year">2013 - 2016</p>
      <p class="description">GCE O Levels <br/> Net L1R5 = 3, 7A1s</p>
    </div>
  </div>
</div>

</>
    );

    const career = (
      <>
<div class="timeline">
<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">Land Transport Authority</h3>
    <p class="year">2023</p>
    <p class="description">Software Engineer Intern</p>
  </div>
</div>
<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">Indigo</h3>
    <p class="description">Tutor for Mathematics and Science</p>
  </div>
</div>
<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">Enterprise Singapore</h3>
    <p class="description">Advise  business operators during Phase 2 and 3 heightened alert period</p>
  </div>
</div>
</div>

</>
  );

  const awards = (
    <>
<div class="timeline">

<div class="event">
    <div class="dot"></div>
    <div class="content">
      <h3 class="title">NUS Merit Scholarship</h3>
      <p class="year">2021</p>
    </div>
  </div>

<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">Edusave Merit Bursary</h3>
    <p class="year">2017 <br/> NJC</p>
    <p class="description">"Students who are within the top 25% of their school’s level and course in terms of academic performance, have demonstrated good conduct" <br/> - MOE website
</p>
  </div>
</div>

<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">MOE Scholarship Award</h3>
    <p class="year">2014, 2015, 2016 <br/> Nan Hua High School</p>
    <p class="description">"Students who are within the top 10% of their school’s level and course in terms of academic performance, and have demonstrated good conduct." <br/> - MOE website
</p>
  </div>
</div>

<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">2nd prize, Fun Bin Design Challenge</h3>
    <p class="year">2015<br/> Art and Design Club, Nan Hua High School</p>
  </div>
</div>

<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">3rd runner-up, Nanyang Poly Astronomy Competition</h3>
    <p class="year">2015<br/>Nan Hua High School</p>
  </div>
</div>

</div>

</>
  );
    const [activeEdu, setActiveEdu] = useState('expButtonActive');
    const [activeCareer, setActiveCareer] = useState('expButton');
    const [activeAwards, setActiveAwards] = useState('expButton');

    const [current, setCurrent] = useState(education);
    const goEdu = () => {
      setCurrent(education);
      setActiveEdu('expButtonActive');
      setActiveCareer('expButton');
      setActiveAwards('expButton');
    }
    const goCareer = () => {
      setCurrent(career);
      setActiveEdu('expButton');
      setActiveCareer('expButtonActive');
      setActiveAwards('expButton');
    }

    const goAwards = () => {
      setCurrent(awards);
      setActiveEdu('expButton');
      setActiveCareer('expButton');
      setActiveAwards('expButtonActive');
    }
    return <>
    <h1 className = "TopicFont" id = "exp"> Experience </h1>

    <div className="expButtonsContainer">
      <button className={activeEdu} onClick={goEdu}>Education 📚</button>
      <button className={activeCareer} onClick={goCareer}>Career 💼</button>
      <button className={activeAwards} onClick={goAwards}>Awards 🏆</button>


    </div>
    {current}
    </>
}

export default Exp;