const addWorkshopForm = document.querySelector('#add-workshop-form');

function isValid() {
    return true;
}

function showWorkshop( workshop ) {
    const newWorkshopEl = document.getElementById( 'new-workshop' );

    newWorkshopEl.innerHTML = `
        <div>${workshop.name}</div>
        <div>${workshop.description}</div>
        <div>${workshop.startDate}</div>
        <div>${workshop.endDate}</div>
    `;
}

addWorkshopForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameEl = document.getElementById('name');
    const descriptionEl = document.getElementById('description');
    const startDateEl = document.getElementById('startDate');
    const endDateEl = document.getElementById('endDate');

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
            .then(function (workshop ) {
                console.log(workshop);

                showWorkshop( workshop );
            })
            .catch(function (error) {
                alert(error.message);
            });
    }
});
