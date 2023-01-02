/* Step 1: On load, form a string with current date ("yyyy-mm-dd") */
/* Step 2: On load, Make call to calendar API with this date as query string parameter (?date=yyyy-mm-dd) */
/* Step 3: Set up event handler so that whenever date changes, we fetch the meetings for the selected date */
(function() {
    let dateEl;

    function fetchAndShowCalendar( formattedDate ) {
        fetchCalendar( formattedDate )
            .then(function( response ) {
                console.log( response );
            })
            .catch(function( error ) {
                console.log( error.message );
            })
    }

    function addEventListeners() {
        dateEl.addEventListener( 'input', function() {
            const formattedDate = dateEl.value;
            console.log( formattedDate );

            fetchAndShowCalendar( formattedDate );
        });
    }

    window.addEventListener( 'load', function() {
        dateEl = document.querySelector( '#selectedDate' )

        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
        
        fetchAndShowCalendar( formattedDate );

        addEventListeners();
    });
})();