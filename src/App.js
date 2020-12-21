import styled from "styled-components";
import bgHeader from "./images/bg-header-desktop.svg";
import GlobalStyle from "./globalStyles";
import JobCard from "./components/JobCard";

const GreenBar = styled.div`
  background-image: url(${bgHeader});
  background-color: hsl(180, 29%, 50%);
  height: 120px;
  width: 100%;
`;

const JobList = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 60px;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GreenBar />
      <JobList>
        <JobCard />
      </JobList>
    </div>
  );
}

export default App;
