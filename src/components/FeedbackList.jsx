import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback}) { // This feedback is our app level state and to reach that we have to write with this way {feedback}. be careful about naming. These have to be same in here and app.js
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }
  
  
    return <div className="feedback-list">
        {feedback.map((item) => ( 
           <FeedbackItem key={item.id} item={item}/> // Key is mandatory. 
        ))}
    </div>
  
}

FeedbackList.propTypes ={
    feedback : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            text : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList