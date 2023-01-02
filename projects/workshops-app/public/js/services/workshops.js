const getWorkshops = function() {
    return fetch(
        // `http://localhost:3000/workshops?_page=1`, // only workshops on page 1 (first 10 workshops)
        `http://localhost:3000/workshops?`, // all workshops
        {
            headers: {
                // in meetings app no Bearer string is required as a prefix to the header
                'Authorization': `Bearer ${getToken()}`
            }
        }
    )
            .then(function (response) {
                if (!response.ok) {
                    // for 404 kind of errors, we should check and explcitly throw an error
                    throw new Error(response.statusText);
                }

                return response.json();
            });
};

const addWorkshop = function( workshop ) {
    // converts a JS object/array into a JSON-formatted string
    const workshopStr = JSON.stringify( workshop );
    console.log( workshopStr );

    return fetch(
        `http://localhost:3000/workshops`,
        {
            method: 'POST', // better to use ALL CAPS for the method
            body: workshopStr,
            headers: {
                // Authorization: "sdkbkjwbejwbveiwbviwb"
                "Content-Type": "application/json",
                'Authorization': `Bearer ${getToken()}`
            }
        }
    )
        .then(
            function( response ) {
                if (!response.ok) {
                    // for 404 kind of errors, we should check and explcitly throw an error
                    throw new Error(response.statusText);
                }

                return response.json();
            }
        )
};

const deleteWorkshop = ( workshopId ) => {
    return fetch( `http://localhost:3000/workshops/${workshopId}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        } )
            .then(
                function( response ) {
                    if( !response.ok ) {
                        throw new Error( response.statusText );
                    }

                    // The response is empty (status code 204). So we do not call response.json() and instead pass on a hard-coded string to indicate success
                    return 'Success';
                }
            )
};