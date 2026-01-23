import { useState, useEffect } from "react";
import Modal from "./Modal";

const Ratting = ({
    feedbackMessages = ['Hate it', 'Dislike it', 'Meh', 'Like it', 'Love it']
}) => {
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating > 0){
            setSubmitted(true);
        }
    }

    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    }




    
    return(
        <div className="rating-wrapper">
        <div className="rating-container">
            <h2>Rate your experience</h2>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((stars) => (
                    <span
                    key={stars}
                    onMouseEnter={() => setHover(stars)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(stars)}
                    className={`star ${stars <= (hover || rating) ? 'active' : ''}`}>
                        {'\u2605'}
                    </span>
                ))}
            </div>
            
            {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
            <button className="submit-btn" disabled={rating === 0} onClick={() => handleSubmit()}>Submit</button>
            <Modal isOpen={submitted} closed={closeModal} rating={rating}/>

        </div>   
        </div>
    )
}

export default Ratting;