// import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import BrandStatement from "./BrandStatement";
import Jobs from "./Jobs";
import Educations from "./Educations";
import Skills from "./Skills";

function App() {
  return (
    <div className="form">
      <PersonalInfo />
      <BrandStatement />
      <Jobs />
      <Educations />
      <Skills />
    </div>
  );
}

export default App;
