import './LizsPage.css';
import './App.css';
import logo from './Liz-logo.png';
import donate from './Liz-Donate.png';

function LizPage() {
  const adoptablePets = [
    {
      name: "Ripley",
      type: "Dog"
    },
    {
      name: "Sol",
      type: "Cat"
    },
    {
      name: "Heinz",
      type: "Cat"
    },
    {
      name: "Tyrone",
      type: "Dog"
    },
    {
      name: "Ford",
      type: "Dog"
    },
    {
      name: "Zamara",
      type: "Dog"
    },
    {
      name: "Darwin",
      type: "Dog"
    }
    
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src= {logo} className="App-logo" alt="logo" width="150" height="150"/>
        <a href="https://www.pawschicago.org/how-to-help/donate"><img src={donate} alt="Donate Now!"></img></a>
        <h2>Services: <a href="https://www.pawschicago.org/our-work/pets-adoption/pets-available">Pet Adoption</a>, <a href="https://www.pawschicago.org/how-to-help/foster">Fostering</a>, <a href="https://www.pawschicago.org/how-to-help/volunteer">Volunteering</a>.</h2>
        <p>
        Meet adoptable pets and complete the application process. Help us find homes for Chicago's homeless pets! 
        </p>
        {adoptablePets.map(pet => (
          <div>
           <h3> {`Name: ${pet.name} Type: ${pet.type}`}</h3>
          </div>
        ))}
        <a
          className="App-link"
          href="https://www.pawschicago.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adopt Me!
        </a>
      </header>
    </div>
  );
}

export default LizPage;