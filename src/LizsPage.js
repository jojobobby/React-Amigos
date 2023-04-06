
import './App.css';


function LizPage() {
  const adoptablePets = ["Ripley", "Sol", "Omar", "Heinz", "Tyrone", "Ford", "Zamara", "Darwin"];
  return (
    <div className="App">
      <header className="App-header">
        <img src= 'https://picsum.photos/id/237/200' className="App-logo" alt="logo" />
        <p>
        Meet adoptable pets and complete the application process. Help us find homes for Chicago's homeless pets! 
        Services: Pet Adoption, Fostering, Volunteering.
        </p>
        {adoptablePets.map(pet => (
           <h1> {pet} </h1>
        ))}
        <a
          className="App-link"
          href="https://www.pawschicago.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apdopt Me!
        </a>
      </header>
    </div>
  );
}

export default LizPage;