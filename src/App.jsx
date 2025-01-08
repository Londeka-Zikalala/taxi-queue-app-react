import React from 'react'
import PassengerCounter from './PassengerCounts'
import TaxiCounter from './TaxiCounts'

const App = ()=>{
    return(
        <><h1>Taxi Queue App</h1>
        <div className="sections">
            <PassengerCounter />
            <TaxiCounter/>
        </div>
        <h4>Icons used</h4>
		<ul>
			<li>
				<a href="https://www.flaticon.com/free-icons/minivan" title="minivan icons">Minivan icons created by Vitaly Gorbachev - Flaticon</a>
			</li>
			<li>
				<a href="https://www.flaticon.com/free-icons/queue" title="queue icons">Queue icons created by Freepik - Flaticon</a>
			</li>
		</ul>
        </>
    )
}

export default App 