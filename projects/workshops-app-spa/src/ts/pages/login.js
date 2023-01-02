import {login} from '../services/auth'

const init = function() {
    let loginForm;

    function addEventListeners() {
        loginForm.addEventListener( 'submit', function( event ) {
            event.preventDefault();

            // please do validations
            // ...

            // extract the email and password and form a credentials object
            const credentials = {
                email: document.getElementById( 'email' ).value.trim(),
                password: document.getElementById( 'password' ).value.trim(),
            };

            // if everything is valid
            login( credentials )
                .then(
                    function( loginResponse ) {
                        console.log( loginResponse );
                        window.location.href = './workshops-list.html';
                    }
                )
                .catch(
                    function( error ) {
                        alert( error.message );
                    }
                );
        });
    }

    window.addEventListener( 'load', function() {
        loginForm = document.getElementById( 'login-form' );
        
        addEventListeners();
    });
}

export default init;
