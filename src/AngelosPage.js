import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SignUpForm from './AngelosComponents/SignUpForm';


function AngeloPage() {

    return (
        <React.Fragment>
            <h1>Angelo's Page</h1>
            <SignUpForm />
        </React.Fragment>

    );

}

export default AngeloPage;