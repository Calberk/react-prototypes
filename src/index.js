import React from 'react';
import ReactDOM from 'react-dom';

const mainUser = {
    name : " Welcome Edmundo",
    luckyNumber: `Your lucky number is: ${luckyNumber()}`
}

ReactDOM.render(
    greeting(mainUser),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random()*1000) +1;
}

function greeting(user){
    return <div className = "container">
        <h1>{user.name}</h1>
        <h2>{user.luckyNumber}</h2>
        </div>
}


