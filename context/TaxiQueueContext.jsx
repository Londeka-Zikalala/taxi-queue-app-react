import React, { createContext, useState, useEffect, useContext } from "react";
import TaxiQueue from "../taxi-queue";


const TaxiQueueContext = createContext();


export const TaxiQueueProvider = ({ children }) => {
  const [passengerCount, setPassengerCount] = useState(0);
  const [taxiCount, setTaxiCount] = useState(0);
  const [taxiLeaveCount, setTaxiLeaveCount] = useState(0);
  const [taxiFunction, setTaxiFunction] = useState(null);

  useEffect(() => {
    // instantiating the TaxiQueue function 
    const taxiQueue = TaxiQueue();

    // Getting stored values from localStorage 
    const storedTaxiCount = Number(localStorage.getItem("taxiQueueLength")) || 0;
    const storedTaxiLeaveCount = Number(localStorage.getItem("taxisDeparted")) || 0;
    const storedPassengerCount = Number(localStorage.getItem("passengerQueueLength")) || 0;

    // Setting initial state 
    setTaxiCount(storedTaxiCount);
    setPassengerCount(storedPassengerCount);
    setTaxiLeaveCount(storedTaxiLeaveCount)
    setTaxiFunction(taxiQueue);
    //  setting the queuelengths
    taxiQueue.setPassengerQueueLength(storedPassengerCount);
    taxiQueue.setTaxiQueueLength(storedTaxiCount)
    taxiQueue.setTaxiDepartedLength(storedTaxiLeaveCount)
  }, []);


  // Providing the state and state-updating functions 
  return (
    <TaxiQueueContext.Provider
      value={{
        passengerCount,
        setPassengerCount,
        taxiCount,
        setTaxiCount,
        taxiLeaveCount,
        setTaxiLeaveCount,
        taxiFunction,
      }}
    >
      {children}
    </TaxiQueueContext.Provider>
  );
};

// custom hook to use the TaxiQueueContext 
export const useTaxiQueue = () => {
  return useContext(TaxiQueueContext);
};
