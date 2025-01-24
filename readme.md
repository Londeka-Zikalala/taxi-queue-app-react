# Taxi Queue App
A web widget designed to help local taxi associations manage queues at their taxi ranks. This app allows rank managers to keep track of:
<span style="float: left">
	<img src="queue.png" alt="" width="100" style="display:inline-block" >
	<img src="queue.png" alt="" width="100" style="display:inline-block" >
	<img src="queue.png" alt="" width="100" style="display:inline-block" >
	<img src="minivan.png" alt="" width="100" style="display:inline-block">
	<img src="arrow.png" alt="" width="100" style="display:inline-block">
	<img src="minivan.png" alt="" width="100" style="display:inline-block">
</span>

* People in the queue: Adding or removing people as they join or leave.
* Taxis in the queue: Tracking taxis joining and leaving the queue, ensuring proper management of passenger capacity.
* Taxis leaving the queue:
	- remove 1 from the taxi queue
	- remove 12 people from the people queue
* A taxi can only leave if there are enough people (12 people) in the queue to fill the taxi.

## Features

* #### Queue Management:
	* Increment/decrement the number of people and taxis in the queue.
	* Ensure taxis can only leave if there are enough people (12 or more) to fill the taxi.
	*Automatically adjust the people queue when a taxi leaves.
* #### Persistent State:
	* Data is stored in localStorage, ensuring the queue state persists after refreshing the page. 

## Technologies

* #### Frontend: Built using [Vite](https://vite.dev/guide/) and React.
* #### State Management: React hooks for managing application state.
* #### LocalStorage: For persistent data storage.
* #### Testing: BDD Unit tests using Mocha with chai: 

## Setup and Installation
To run this app locally, follow these steps:

1. Clone the repository:
   
```bash
git clone https://github.com/Londeka-Zikalala/taxi-queue-app-react.git
cd taxi-queue-app-react
```
3. Install dependencies:
   
`npm install`

4. Start the development server:

`npm run dev` 

5. Open your browser and navigate to the provided local development URL.

6. See tests : `______/test/index.html`

### How to Use

1. Queue Management:

Use the buttons to add or remove people and taxis from the respective queues.
Taxis can only leave the queue if there are at least 12 people.

2. Data Persistence:

The app automatically saves the queue state to localStorage. Refresh the page, and the data will remain intact.
Once your widget is done store all the queue counters in localStorage be sure that the data is shown correctly after a refresh.

## Project Structure
```markdown
src/
├── components/
│   ├── PeopleQueue.js
│   ├── TaxiQueue.js
│   └── QueueControls.js
├── utils/
│   ├── localStorage.js
│   └── taxiQueueFactory.js
├── App.js
├── index.js
├── styles/
│   └── main.css
tests/
├── taxiQueue.test.js
├── localStorage.test.js
public/
├── index.html
```

## Deployment 

1. Build the production versionb

   `npm run build`
   
3. Deploy using your preferred hosting service


## Acknowlegdment 

This project was forked from :[Code X Academy Taxi Queue App](https://github.com/codex-academy/taxi-queue-app/)


