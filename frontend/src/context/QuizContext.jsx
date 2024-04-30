import { createContext, useReducer } from "react";

export const QuizContext = createContext()

export const quizReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_FIELD':
            return { ...state, quizData: { ...state.quizData, [action.field]: action.value } };
        case 'UPDATE_OPTIONS':
            return { ...state, quizData: { ...state.quizData, options: action.updatedOption } };
        case 'RESET_QUIZ_DATA':
            return { ...state, quizData: QUIZ_DATA };

        default:
            return state;
    }
}

const QUIZ_DATA = {
    season: '',
    populationMin: 0,
    populationMax: 3645000,
    options: []
}

export const QuizContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(quizReducer, { quizData: QUIZ_DATA })

    return (
        <QuizContext.Provider value={{...state, dispatch}}> 
            { children }
        </QuizContext.Provider>
    )

}