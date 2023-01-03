import { useState } from "react"
import Header from "./components/Header" 
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"


function App (){
    
    const [feedback,setFeedback] = useState(FeedbackData) // state imizi FeedbackDatadan yolladiks
    
    const deleteFeedback= (id) => {
        if(window.confirm('Are you sure ? ')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }
    
    return (


        <> 
            <Header />
            <div className='container'>
                <FeedbackForm/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                handleDelete={deleteFeedback}/> {/* useState blogunda adini feedback verdik ve burda erismek icin FeedbacListten bunu alabilmeliyiz. Bu yuzden buraya feedback={feedback} bunu yazdik.*/}
            </div>
        </>
       
    )
}

export default App