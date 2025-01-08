import React from "react";
import TaxiQueue from "../taxi-queue";
import { useEffect, useState } from "react";


const TaxiCounter = ()=>{
    const [taxiCount, setTaxiCount] = useState(0)
    const [taxiDepartCount, setTaxiDepartCount] = useState(taxiCount)
    const [taxiFunction , setTaxiFunction] = useState(null)



    useEffect(()=>{
            // creating an instance of the TaxiQueue function 
    const taxiQueue = TaxiQueue()
        // get the queue length from local storage
        const storedTaxiCount = Number(localStorage.getItem('taxiQueueLength')) || 0;
        const storedTaxiDepartCount = Number(localStorage.getItem('taxiDepartCount')) || 0;

        //  
        //set the taxi count using the value from local storage 
        setTaxiCount(storedTaxiCount)
        setTaxiDepartCount(storedTaxiDepartCount)
       
        // load the instance on page reloadd
        setTaxiFunction(taxiQueue)
    }, [])

    // handling the join queue button
   const handleJoinTaxiQueue= ()=>{
        if(taxiFunction){

            // add taxi when clicking the join bytton
           taxiFunction.joinTaxiQueue()

           //update counter 
           const updatedTaxiCount = taxiFunction.taxiQueueLength()

           setTaxiDepartCount(updatedTaxiCount)

        //    set to local storage

        localStorage.setItem('taxiQueueLength', updatedTaxiCount)
        }
    }

    const handleTaxiLeaveQueue = ()=>{
        if(taxiFunction){

            // remove a taxi when clicking the leave button 
            taxiFunction.taxiDepart()
            // update the counter 
            const updatedTaxiCounter = taxiFunction.taxiQueueLength();
            setTaxiDepartCount(updatedTaxiCounter)

            // set to local storage
            localStorage.setItem('taxiDepartCount', updatedTaxiCounter)
        }
        console.log('button clicked')
    }

    return(
        <>
        <div className="section" >
			<h2>Taxis</h2>
			<img src="minivan.png" alt="" width="100"></img>
			<img src="minivan.png" alt="" width="100"></img>
			<img src="minivan.png" alt="" width="100"></img>
			<span className="taxi_queue_count count" >{taxiCount}</span>
			<button className="join_taxi_queue" onClick={handleJoinTaxiQueue}>Join queue</button>
		</div>
	
		<div className="section" >
			<h2>Taxi departing</h2>
			<img src="arrow.png" alt="" width="100"></img>
			<img src="arrow.png" alt="" width="100"></img>
			<img src="arrow.png" alt="" width="100"></img>
			<img src="minivan.png" alt="" width="100"></img>
			<span className="taxi_queue_count count" >{taxiDepartCount}</span>
			<button className="depart" onClick={handleTaxiLeaveQueue}>Depart</button>
		</div>

        </>
    )

}

export default TaxiCounter