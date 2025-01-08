import React, { use } from "react";
import TaxiQueue from "../taxi-queue";
import { useEffect, useState } from "react";


const PassengerCounter = ()=>{
    const [passengerCount, setPassengerCount] = useState(0)
    const [taxiFunction , setTaxiFunction] = useState(null)



    useEffect(()=>{
            // creating an instance of the TaxiQueue function 
    const taxiQueue = TaxiQueue()
        // get the queue length from local storage
        const storedCount = Number(localStorage.getItem('queueLength')) || 0;

        //  
        //set the passenger count using the value from local storage 
        setPassengerCount(storedCount)
       
        // load the instance on page reloadd
        setTaxiFunction(taxiQueue)

    }, [])

    // handling the join queue button
   const handleJoinQueue= ()=>{
        if(taxiFunction){

            // add passenger when clicking the join bytton
           taxiFunction.joinQueue()

           //update counter 
           const updatedCount = taxiFunction.queueLength()

           setPassengerCount(updatedCount)

        //    set to local storage

        localStorage.setItem('queueLength', updatedCount)
        }
    }

    const handleLeaveQueue = ()=>{
        if(taxiFunction){

            // remove a passenger when clicking the leave button 
            taxiFunction.leaveQueue()
            // update the counter 
            const updatedCounter = taxiFunction.queueLength();
            setPassengerCount(updatedCounter)

            // set to local storage
            localStorage.setItem('queueLength', updatedCounter)
        }
    }

    return(
        <>
        <div className="section" >
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