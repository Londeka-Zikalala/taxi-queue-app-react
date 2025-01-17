function TaxiQueue() {

// initialising global counters for the taxi and passenger queues
let taxiCounter= 0;
let passengerCounter = 0; 
let departedCounter = 0

// passenger joins queue
	function joinQueue() {
		// increment the passenger counter when a passenger joins
		passengerCounter++
	}
// passenger leaves queue
	function leaveQueue() {
		// passenger counter must be 0 or more, not a negative number
		if(passengerCounter > 0){
			passengerCounter--

		}else{
			return "There are no passengers in the queue."
		}
	}

	// taxi joining the queue
	function joinTaxiQueue() {
		// increment taxi counter
		taxiCounter++;
		
	};

	// get the number of passengers
	function queueLength() {
		// return the passenger counter
		return passengerCounter
	}

	// get the taxi counter 
	function taxiQueueLength() {
		// return the taxi counter
		return taxiCounter
	}



	// taxi leaves the queue
	function taxiDepart(){
		// the counter must always be 0 or more
		if(taxiCounter > 0){

			//  a taxi can leave only when there are 12 or more passengers in the queue
			if(passengerCounter >= 12){
				//subract one taxi
				taxiCounter--
					// remove 12 people from the queue
					passengerCounter -= 12
				// add 1 to departedCounter 
				departedCounter ++
			
			}else{
				return "There must be atleast 12 passengers in the queue."
			}
		} else{
			return "There are no taxis in the queue."
		}
	}

	function taxisDeparted(){
		return departedCounter
	};



    // Setter function for passenger queue length
    function setPassengerQueueLength(newLength) {
        if (newLength >= 0) {
            passengerCounter = newLength;
        } else {
            throw new Error("Passenger queue length must be a non-negative number.");
        }
    }

    // Setter function for taxi queue length
    function setTaxiQueueLength(newLength) {
        if (newLength >= 0) {
            taxiCounter = newLength;
        } else {
            throw new Error("Taxi queue length must be a non-negative number.");
        }
    }

	function setTaxiDepartedLength(newLength){
		if (newLength >= 0) {
            departedCounter = newLength;
        } else {
            throw new Error("Taxi queue length must be a non-negative number.");
        }
	}
	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
		taxisDeparted,
		setPassengerQueueLength,
		setTaxiQueueLength, 
		setTaxiDepartedLength
	}
}

export default TaxiQueue