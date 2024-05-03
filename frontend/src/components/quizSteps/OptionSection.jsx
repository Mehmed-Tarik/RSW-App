import { useState, useEffect } from "react"
import { QuizWrapper } from '../QuizWrapper'
import './Section.scss'

const OptionSection = ({ togglePicked, picked, sOption, title }) => {

    return (
        <QuizWrapper title={title}>
            
            <div>
                <p className="multipleSelect">( Multiple selections possible )</p>
                { sOption.map(sl => (
                    <div className={`option-container ${picked.includes(sl) ? 'selected' : ''}`}
                    key={sl} 
                    onClick={() => togglePicked(sl)}
                    >
                        <div>
                        <span>{sl}</span>
                        <i className="material-icons">{picked.includes(sl) ? 'check_box' : 'check_box_outline_blank'}</i>
                        </div>
                    </div>
                    
                ))}
            </div>
        </QuizWrapper>
    )
}

export default OptionSection