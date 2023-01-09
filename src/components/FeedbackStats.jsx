import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  let average = feedback.reduce( (acc,cur) =>{
    return acc + cur.rating
  },0) /feedback.length 
  
  average = average.toFixed(1).replace(/[.,]0$/, '') // with toFixed method we fixed the last decimal of number to just 1. and then replace .0 digit.
  
    return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average)? 0 : average} </h4>
    </div>
  )
}



export default FeedbackStats