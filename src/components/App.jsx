import PersonalInfo from "./PersonalInfo";
import BrandStatement from "./BrandStatement";
import Jobs from "./Jobs";
import Educations from "./Educations";
import Skills from "./Skills";

function App() {
  return (
    <div>
      <div className="form">
        <PersonalInfo />
        <BrandStatement />
        <Jobs />
        <Educations />
        <Skills />
      </div>
      <div className="footer">
        Created by <a href="https://github.com/naouuud">Nour Aoude</a>.
      </div>
    </div>
  );
}

export default App;
