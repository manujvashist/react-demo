import React, { useState } from 'react';
import ExpInputs from './expInputs';


const Form = () => {

    const blankExp = { company: '', role: '', startDate: '', endDate: '' };
    const [expState, setExpState] = useState([
        { ...blankExp },
    ]);

    const addExp = () => {
        setExpState([...expState, { ...blankExp }]);
    };

    const handleExpChange = (e) => {
        const updatedExps = [...expState];
        updatedExps[e.target.dataset.idx][e.target.className] = e.target.value;
        setExpState(updatedExps);
    };
    
    const removeExpFromList = (e) => {
        let newExps = [...expState];
        newExps.splice(e.target.dataset.idx,1);
        setExpState(newExps)
    }
    
    return (
        <form action="http://www.demo-form.com" method="GET">
            <h3> Work Experience </h3>
            {
                expState.map((val, idx) => (
                    <ExpInputs
                        key={`exp-${idx}`}
                        idx={idx}
                        expState={expState}
                        handleExpChange={handleExpChange}
                        removeExpFromList={removeExpFromList}
                    />
                ))
            }
            <input
                type="button"
                value="Add New Exp"
                onClick={addExp}
            />
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default Form;