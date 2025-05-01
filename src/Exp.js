import { useState } from "react";

function Exp() {


    const education = (
<div class="timeline">
  <div class="event">
    <div class="dot"></div>
    <div class="content">
      <h3 class="title">National University of Singapore (NUS) </h3>
      <p class="year">Aug 2021 - Apr 2025</p>
      <p class="description"> Computer Science (Honours) <br/> NUS Merit Scholarship recipient <br/> GPA:4.52/5.00 </p>
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
    );

    const career = (
<div class="timeline">
<div class="event">
  <div class="dot"></div>
  <div class="content">
    <h3 class="title">DSO National Laboratories</h3>
    <p class="year">2024</p>
    <p class="description">Software Security Engineer Intern</p>
  </div>
</div>
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
    <h3 class="title">Undergraduate Tutor @ National University of Singapore (NUS) </h3>
    <p class="year">2023 - 2025</p>
    <p class="description">
    Discrete Structures (CS1231S) AY2023/2024 Sem 1
    Introduction to Information Security (CS2107) AY2023/2024 Sem 1 to 2, AY2024/2025 Sem 2
    Big Data Systems for Data Science (CS4225) AY2024/2025 Sem 2
    </p>
  </div>
</div>
</div>
  );

  const awards = (
<div class="timeline">

<div class="event">
    <div class="dot"></div>
    <div class="content">
      <h3 class="title">NUS Merit Scholarship</h3>
      <p class="year">2021</p>
      <p class="description">"Highly coveted, NUS Scholarships are awarded to high calibre individuals who demonstrate academic excellence, present excellent co-curricular activities record and exhibit outstanding leadership qualities. NUS Scholars are expected to contribute to the NUS community while in NUS, and develop into dynamic global leaders capable of effecting positive societal change after they graduate." <br/> - NUS website
      </p>
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
  );
    const [activeEdu, setActiveEdu] = useState('expButton');
    const [activeCareer, setActiveCareer] = useState('expButtonActive');
    const [activeAwards, setActiveAwards] = useState('expButton');

    const [current, setCurrent] = useState(career);
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