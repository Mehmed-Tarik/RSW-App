import { useState, useEffect } from "react"

// components
import LandingPage from '../components/LandingPage'
import QuizResult from "../components/quizResult/QuizResult"
    // quiz Steps
    import OptionSection from '../components/quizSteps/OptionSection'
    import Season from '../components/quizSteps/Season'
    import Population from '../components/quizSteps/Population'

// hooks
import { useQuizContext } from "../hooks/useQuizContext"
import { useMultistepForm } from "../hooks/useMultistepForm"

// style
import './Quiz.scss'

// assets
import {season, journeyGoals, cityStuff, company, activities} from '../assets/quizOptions'


const Quiz = () => {

    const [startQuiz, setStartQuiz] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [progress, setProgress] = useState(0)
    const {quizData, dispatch } = useQuizContext()
    const [picked, setPicked] = useState([]); // for options - (array)

        // for options, FOR MULTIPLE CHICES
        function updateOptions(updatedOption) {
            dispatch({ type: 'UPDATE_OPTIONS', updatedOption });
        }
          
        // FOR SINGLE OPTION
        function updateFields(fields) {
            const { fieldName, value } = fields;
            dispatch({ type: 'UPDATE_FIELD', field: fieldName, value });
        }
      
        const resetQuizData = () => {
            dispatch({ type: 'RESET_QUIZ_DATA' }); // Reset quizData
            setPicked([]); // Reset the picked options
        };

        const togglePicked = (item) => {
            setPicked((prevPicked) => {
                if (prevPicked.includes(item)) {
                    return prevPicked.filter((prevItem) => prevItem !== item);
                } else {
                    return [...prevPicked, item];
                }
            });
      
            //updateOptions(picked)
        };

        const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo } =
    useMultistepForm([
        <Season sOption={season} quizData={quizData} updateFields={updateFields} title='which season would you prefer?' />,
        <OptionSection sOption={journeyGoals} options={quizData?.options} 
                picked={picked} togglePicked={togglePicked} title='What do you hope to achieve during your journey?'/>,
        <OptionSection sOption={cityStuff} options={quizData?.options} 
                picked={picked} togglePicked={togglePicked} title='My ideal city would have:'/>,
        <OptionSection sOption={company} options={quizData?.options} 
                picked={picked} togglePicked={togglePicked} title='You are traveling:'/>,
        <Population updateFields={updateFields} quizData={quizData} title='Size of a city:' />,
        <OptionSection sOption={activities} options={quizData?.options} 
                picked={picked} togglePicked={togglePicked} title='What activities do you find the most enjoyable ?'/>
    ]);

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next();
        setTimeout(() => {
          console.log('Updated quizData:', quizData);
          setShowResult(true)
        }, 100); 
      }

      useEffect(() => {
        setProgress(((currentStepIndex + 1) / steps.length) * 100);
        //window.scrollTo(0, 0);
      }, [currentStepIndex, steps.length]);

      useEffect(() => {
        updateOptions(picked)
      }, [picked])

      return(
        <div className="quiz-container">
            { !startQuiz && ( 
                <>
                <LandingPage />
                <button className="startBtn quiz-button" onClick={() => setStartQuiz(true)}>START QUIZ</button>
                </>
            )}
            { startQuiz && !showResult && (
            <form onSubmit={onSubmit}>
              <div className="progressBar">
                  <div style={{ width: `${progress}%`, background: "var(--primary)", height: "4px" }}></div>
              </div>
            {/* Current Step */}
            <>
            {step} 
            </>
        
            <div className="step-buttons"
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              {!isFirstStep && (
                <button type="button" className="btn quiz-button" onClick={back}>
                  Back
                </button>
              )}
              <button className="quiz-button" type="submit">{isLastStep ? "Finish" : "Next"}</button>
            </div>
          </form>

            )}
            { showResult && (
                <div>
                    <QuizResult quizData={quizData} />
                    <button className="quiz-button" style={{marginTop: '20px',marginBottom: '20px'}} onClick={() => { setShowResult(false); goTo(0); resetQuizData(); }} >Take a Quiz again</button>
                </div>
            )}
        </div>
    )
}

export default Quiz