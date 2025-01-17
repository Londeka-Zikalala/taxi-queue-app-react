import {React, useState} from "react";
import { useTaxiQueue } from "../context/TaxiQueueContext";


const TaxiCounter = () => {
    const {
        taxiCount,
        passengerCount,
        setPassengerCount,
        setTaxiCount,
        taxiLeaveCount,
        setTaxiLeaveCount,
        taxiFunction,

    } = useTaxiQueue();

    //   error messages 
    const [err, setTaxiError] = useState("");

    // handling the join queue button
    const handleJoinTaxiQueue = () => {
        if (taxiFunction) {

            // add taxi when clicking the join bytton
            taxiFunction.joinTaxiQueue()

            //update counter 
            const taxiQueueLe = taxiFunction.taxiQueueLength()
            setTaxiCount(taxiQueueLe)
            localStorage.setItem('taxiQueueLength', taxiQueueLe.toString())
            // clear errors
        }
    }

    const handleTaxiLeaveQueue = () => {
        if (taxiFunction) {

            const errMessage = taxiFunction.taxiDepart()
            if (errMessage) {
                setTaxiError(errMessage);
                setTimeout(() => {
                    setTaxiError("");
                }, 2000);
            } else {
                taxiFunction.taxiDepart()
                const taxiQueueL = taxiFunction.taxiQueueLength()
                const taxisDep = taxiFunction.taxisDeparted()
                const passengerQueueL = taxiFunction.queueLength()

              setTaxiCount(taxiQueueL);
              setTaxiLeaveCount(taxisDep);
             setPassengerCount(passengerQueueL);

                // update the counters 
                localStorage.setItem("taxiQueueLength",taxiQueueL.toString())
                localStorage.setItem("taxisDeparted",taxisDep.toString());
                localStorage.setItem("passengerQueueLength", passengerQueueL.toString());
            }
        }
    }

    return (
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
                <span className="taxi_queue_count count" >{taxiLeaveCount}</span><h4> taxis have departed</h4>
                <button className="depart" onClick={handleTaxiLeaveQueue}>Depart</button>
                {err && <h3 className="error-message">{err}</h3>}
            </div>
            
        </>
    )

}

export default TaxiCounter