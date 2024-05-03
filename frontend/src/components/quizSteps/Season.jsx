import { QuizWrapper } from '../QuizWrapper'
import './Section.scss'

const Season = ({ sOption, updateFields, title, quizData }) => {

    const handleSelection = (value) => {
        updateFields({ fieldName: 'season', value: value });
    };

    return (
        <QuizWrapper title={title}>
            <div>
                {sOption.map((s, index) => (
                    <div 
                        className={`option-container ${quizData.season === s ? 'selected' : ''}`}
                        key={index}
                        onClick={() => handleSelection(s)}
                    >
                        <div>
                            <span>{s}</span>
                            <i className="material-icons">
                                {quizData.season === s ? 'check_box' : 'check_box_outline_blank'}
                            </i>
                        </div>
                    </div>
                ))}
            </div>
        </QuizWrapper>
    )
}

export default Season