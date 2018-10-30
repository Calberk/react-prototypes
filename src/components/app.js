import React from 'react';
import Table from './table';

export default () => {
    return (<div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
    )
}

const students = [
    {
        name: "Bruce",
        course: "Running in the Night",
        grade: 99.4
    },
    {
        name: "Kal-el",
        course: "Nice alien",
        grade: 94.6
    },
    {
        name: "Cyborg",
        course: "Computer Science",
        grade: 99.9
    }
];


