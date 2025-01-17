import {React, useState} from "react";
import { useTaxiQueue } from "../context/TaxiQueueContext";

const PassengerCounter = () => {
    const {
        passengerCount,
        setPassengerCount,
        taxiFunction,
    } = useTaxiQueue();

    //   error messages 
    const [error, setError] = useState("");

    // handling the join queue button
    const handleJoinQueue = () => {
        if (taxiFunction) {

            // add passenger when clicking the join bytton
            taxiFunction.joinQueue()

            //update counter 
            const increacedQueueLength = taxiFunction.queueLength()
            setPassengerCount(increacedQueueLength)
            localStorage.setItem('passengerQueueLength', increacedQueueLength.toString())
            
        }
    }

    const handleLeaveQueue = () => {
        if (taxiFunction) {
            const errorMsg = taxiFunction.leaveQueue();
            if (errorMsg) {
                setError(errorMsg);
                setTimeout(() => {
                    setError("");
                }, 2000);
            }
            else {
                // update the counter 
                const updatedQueueLength = taxiFunction.queueLength()
                setPassengerCount(updatedQueueLength)
                localStorage.setItem('passengerQueueLength', updatedQueueLength.toString())
            }
        }
    }
    return (
        <>
        
            <div className="section" >
            {error && <h3 className="error-message">{error}</h3>}
                <h2>Passengers</h2>
                <img src="queue.png" alt="" width="100"></img>
                <img src="queue.png" alt="" width="100"></img>
                <img src="queue.png" alt="" width="100"></img>
                <span className="passenger_queue_count count">{passengerCount}</span>
                <button className="join_queue" onClick={handleJoinQueue}>Join</button>
                <button className="leave_queue" onClick={handleLeaveQueue}>Leave</button>

            </div>
            
        </>
    )

}

export default PassengerCounter