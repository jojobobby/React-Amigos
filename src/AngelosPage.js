import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SignUpForm from './AngelosComponents/SignUpForm';


function AngeloPage() {
    return (
        <div>
            <h1>Angelo's Page</h1>
            <SignUpForm />
        </div>
    );

}

export default AngeloPage;