import { useEffect, useState } from 'react'

// components
import NumberBtn from './NumberBtn'

// style
import './Calculate.scss'

const Calculate = ({ city }) => { 

    const [people, setPeople] = useState(1);
    const [days, setDays] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');

    const handleNumberChange = (setter, action) => {
        console.log("tu sam");
        setter(prevValue => {
            if (action === 'increment') {
                return prevValue + 1;
            } else if (action === 'decrement' && prevValue > 1) {
                return prevValue - 1;
            }
            return prevValue;
        });
    };

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };


    useEffect(()=> {
        console.log(city);
        console.log(people);
        console.log(days);
    },[people, days])

    return (
        <div className="calculate-container">
            <NumberBtn number={people} setNumber={(action) => handleNumberChange(setPeople, action)} labelText='Number of people: ' />
            <NumberBtn number={days} setNumber={(action) => handleNumberChange(setDays, action)} labelText='How many days:' />
            <div className="select-container">
                <label htmlFor="select-option">Choose an option:</label>
                <select id="select-option" value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
            </div>
        </div>
    )
}

export default Calculate