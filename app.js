let events = [];
const eventList = document.querySelector('#event-list');

async function fetchEvents(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    events = json.data;
    console.log(events);
    renderEvents();
}

fetchEvents();

function renderEvents(){
    const html = events.map(function(party){
        console.log(party);
    return `
    <div>
        <h2>${party.name},</h2>
        <p>${party.description}</p>
        <h4>Where:</h4>
        <p>${party.location}</p>
        <h4>When:</h4>
        <p>${party.date}</p>
    `
    }).join('');
    eventList.innerHTML = html;
}