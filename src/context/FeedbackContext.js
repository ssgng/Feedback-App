import {createContext, useState} from 'react'
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback]= useState([
        {
        id: 1,
        text: 'this item is from context',
        rating:10,
        }
       
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })
    
    // Add feedback

    const addFeedback = (newFeedback) => {
        newFeedback.id= uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //Delete feedback

    const deleteFeedback= (id) => {
        if(window.confirm('Are you sure ? ')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    //update feedback item

    const updateFeedback = (id,updItem) => {
        setFeedback(feedback.map ((item) => (item.id===id ? {
            ...item ,...updItem } :item))
        )
    }

    // set item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value ={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext