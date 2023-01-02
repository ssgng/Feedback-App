import PropTypes from 'prop-types'


function FeedbackStats({feedback}) {
  let average = feedback.reduce( (arr,cur) =>{
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

FeedbackStats.propTypes = {
    feedback : PropTypes.array.isRequired,
}

export default FeedbackStats