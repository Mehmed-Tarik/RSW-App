import './NumberBtn.scss'

const NumberBtn = ({ number, setNumber ,labelText }) => { 

    const handleNumberChange = (action) => {
        setNumber(action);
    };

    return (
        <div className='numBtn-container'>
            <label className="label">{ labelText }</label>
            <div className="numBtn-wrapper">
                <span className="numBtn-minus" onClick={() => handleNumberChange('decrement')}>-</span>
                <span className="numBtn-num">{number}</span>
                <span className="numBtn-plus" onClick={() => handleNumberChange('increment')}>+</span>
            </div>
        </div>
        
    )
}

export default NumberBtn