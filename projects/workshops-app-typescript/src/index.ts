import IWorkshop from "./Workshop";
import { sum } from './utils';

console.log( sum( 12, 13 ) );

const addWorkshopForm : HTMLFormElement = document.querySelector('#add-workshop-form') as HTMLFormElement; // "as" HTMLFormElement is needed to convince TS that this will select a valid HTML element on the page

function isValid() {
    return true;
}

function showWorkshop( workshop : IWorkshop ) {
    const newWorkshopEl = document.getElementById( 'new-workshop' ) as HTMLDivElement;

    newWorkshopEl.innerHTML = `
        <div>${workshop.name}</div>
        <div>${workshop.description}</div>
        <div>${workshop.startDate}</div>
        <div>${workshop.endDate}</div>
    `;
}

addWorkshopForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameEl = document.getElementById('name') as HTMLInputElement;
    const descriptionEl = document.getElementById('description') as HTMLTextAreaElement;
    const startDateEl = document.getElementById('startDate') as HTMLInputElement;
    const endDateEl = document.getElementById('endDate') as HTMLInputElement;

    const data = {
        name: nameEl.value.trim(),
        description: descriptionEl.value.trim(),
        startDate: startDateEl.value.trim(), // "yyyy-mm-dd"
        endDate: endDateEl.value.trim(),
    };

    // converts a JS object/array into a JSON-formatted string
    const body = JSON.stringify(data);
    console.log(body);

    if (isValid()) {
        // we will submit the data through Ajax
        fetch(`https://workshops-server.herokuapp.com/workshops`, {
            method: 'POST', // better to use ALL CAPS for the method
            body: body,
            headers: {
                // Authorization: "sdkbkjwbejwbveiwbviwb"
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (workshop : IWorkshop ) {
                console.log(workshop);

                showWorkshop( workshop );
            })
            .catch(function (error) {
                alert(error.message);
            });
    }
});
