import { useEffect, useState } from 'react'

// components
import NumberBtn from './NumberBtn'

// style
import './Calculate.scss'

const Calculate = ({ city }) => { 

    const [people, setPeople] = useState(1);
    const [days, setDays] = useState(1);
    const [selectedOption, setSelectedOption] = useState('hotel');
    const [cost, setCost] = useState(0)

    const handleNumberChange = (setter, action) => {
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

    const calculateCost = () => {
        if(selectedOption === 'hotel') {
            setCost((people*(city.avgHotel + city.avgFood + city.avgMuseum))*days)
        } else {
            setCost((people*(city.avgHostel + city.avgFood + city.avgMuseum))*days)
        }
    }

    return (
        <div className="calculate-container">
            <NumberBtn number={people} setNumber={(action) => handleNumberChange(setPeople, action)} labelText='Number of people: ' />
            <NumberBtn number={days} setNumber={(action) => handleNumberChange(setDays, action)} labelText='How many days:' />
            <div className="select-container">
                <label className='select-label' htmlFor="select-option">Accommodations:</label>
                <select id="select-option" value={selectedOption} onChange={handleSelectChange}>
                    <option value="hotel">Hotel</option>
                    <option value="hostel">Hostel</option>
                </select>
            </div>
            <button className='result-buttons' onClick={calculateCost}>Calculate</button>
            <p className='resultNumber'>{cost} &euro;</p>
        </div>
    )
}

export default Calculate