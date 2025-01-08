function TaxiQueue() {

// initialising global counters for the taxi and passenger queues
let taxiCounter= 0;
let passengerCounter = 0; 

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

		}
	}

	// taxi joining the queue
	function joinTaxiQueue() {
		// increment taxi counter
		taxiCounter++
	}

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
				//remove one taxi
				taxiCounter--
				// remove 12 people from the queue
				passengerCounter -= 12
			}
		}
	}



	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}

export default TaxiQueue