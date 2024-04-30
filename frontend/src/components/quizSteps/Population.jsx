
import { useState } from "react"
import { QuizWrapper } from '../QuizWrapper'
import './Section.scss'

const Population = ({ updateFields, title, quizData }) => {
    return (
        <QuizWrapper title={title}>
            <h1>Population</h1>
        </QuizWrapper>
    )
}

export default Population