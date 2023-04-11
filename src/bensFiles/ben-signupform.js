import './ben-SUF.css';

function SignUpForm() {
    return (
        <div className="form-container">
            <h2>Sign Up Here</h2>
            <div className="ben-input-container">
                <input type="text" className="ben-input-items" placeholder="First Name"></input>
                <input type="text" className="ben-input-items" placeholder="Last Name"></input>
                <input type="text" className="ben-input-items" placeholder="Email"></input>
                <input type="text" className="ben-input-items" placeholder="Username"></input>
                <input type="password" className="ben-input-items" placeholder="Password" required></input>
                <input type="password" className="ben-input-items" placeholder="Confirm Password" required></input>
            </div>
            <button className="ben-button">Submit Here!</button>
        </div>
    );
}

export default SignUpForm;