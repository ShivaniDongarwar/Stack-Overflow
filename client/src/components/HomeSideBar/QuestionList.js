import React from 'react'
import Questions from './Questions'

function QuestionList({questionsList}) {

  return (
   <>
    {
      questionsList.map((que)=>(
        <Questions que={que} key={que._id} />
      ))
    }
   </>
  )
}

export default QuestionList