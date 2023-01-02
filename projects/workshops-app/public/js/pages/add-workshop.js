(function() {
    let addWorkshopForm;
    
    function isValid() {
        return true;
    }

    function addEventListeners() {
        addWorkshopForm.addEventListener( 'submit', function( event ) {
            event.preventDefault();
            
            const nameEl = document.getElementById( 'name' );
            const descriptionEl = document.getElementById( 'description' );
            const startDateEl = document.getElementById( 'startDate' );
            const endDateEl = document.getElementById( 'endDate' );
        
            const data = {
                name: nameEl.value.trim(),
                description: descriptionEl.value.trim(),
                startDate: startDateEl.value.trim(), // "yyyy-mm-dd"
                endDate: endDateEl.value.trim()
            };
        
            if( isValid() ) {
                addWorkshop( data )
                    .then(
                        function( workshop ) {
                            console.log( workshop );
                            window.location.href = './workshops-list.html';
                        }
                    )
                    .catch(
                        function( error ) {
                            alert( error.message );
                        }
                    )
        
            }
        })
    }

    window.addEventListener( 'load', function() {
        addWorkshopForm = document.querySelector( '#add-workshop-form' );

        addEventListeners();
    });
})();