import Header from './components/Header';
import Main from './components/Main/Main';
import TechStack from './components/Main/TechStack';
import UserCard from './components/Main/UserCard';
import Title from './components/Main/Title';
import Button from './components/Main/Button';
import './App.css';
import Footer from './components/Footer';

function App() {
  const data = {
    tit: {
      welcome: "Welcome to component and props corner",
      title: "React",
      subtitle: "Javascript Library",
    },
    welcome: "Welcome to component and props corner",
    title: "React",
    subtitle: "Javascript Library",
    user: {
      firstname: "John",
      lastname: "Sedrick",
    },
    techskill: ["HTML", "JS", "CSS", "React"],
    date: new Date(),
  };

let greetPeople = () => {
  alert(`Hi`)
};

let showDate = () => {
  alert(`${data.date.getFullYear()} / ${data.date.getMonth() +1 } / ${data.date.getDay() +1}`)
};

  return (
    <div className="App">
      <Header head = {data.tit}/>
      <Main body={data.user} tody={data.date}/>
      <TechStack techno4k={data.techskill}/>
      <UserCard/>
      <Title name={data.user}/>
      <Button text = {`greetPeople`} onClick={greetPeople}/>
      <Button text={`showDate`} onClick={showDate}/>
      <Footer footer = {data.date}/>
    </div>
  );
}

export default App;
