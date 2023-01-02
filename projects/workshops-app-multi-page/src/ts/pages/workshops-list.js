import '../check-login.js'
import {
    getWorkshops,
    deleteWorkshop
} from '../services/workshops.js'
import '../nav.js'

(function() {
    let allWorkshops = []; // or null
    
    // let us set up for filtering the workshops when use types in search box
    let searchEl;
    let infoMessage;
    
    function showLoadingMessage() {
        infoMessage.textContent = 'Loading workshops...Please wait...';
        infoMessage.classList.remove('hide');
    }

    // pass on workshops to show, and this function will show it on the page
    function showWorkshops(workshops) {
        const workshopsList = document.querySelector('.workshops-list');

        let workshopsListStr = '';

        workshops.forEach(function (workshop) {
            // console.log( workshop.name, workshop.category, workshop.location.city );

            // workshopsListStr = workshopsListStr + `
            workshopsListStr += `
                <div class="workshop p-3" data-workshopid="${workshop.id}">
                    <img src="${workshop.imageUrl}" alt="${workshop.name}" class="img-fluid" />
                    <h2 class="workshop-title">
                        ${workshop.name}
                    </h2>
                    <div class="workshop-duration">
                        ${workshop.startDate} - ${workshop.endDate}
                    </div>
                    <div class="workshop-time">
                        ${workshop.time}
                    </div>
                    <button class="btn-delete">Delete workshop</button>
                </div>
            `;
        });

        workshopsList.innerHTML = workshopsListStr;

        addWorkshopCardListeners(); // we should set up listeners only now (since workshops get added not on page load but after a delay)
    }

    function addWorkshopCardListeners() {
        const buttons = document.querySelectorAll( '.btn-delete' );

        console.log( buttons );

        buttons.forEach(
            function( button ) {
                button.addEventListener( 'click', function() {
                    const workshop = button.closest( '.workshop' );
                    const workshopId = workshop.getAttribute( 'data-workshopid' );
                    console.log( workshopId );

                    deleteWorkshop( workshopId )
                        .then(
                            function( response ) {
                                workshop.remove();
                            }
                        )
                        .catch(
                            function( error ) {
                                alert( error.message );
                            }
                        )
                });
            }
        )
    };

    function fetchWorkshops() {
        // returns a "Promise object"
        // 2 methods of promise object - then / catch
        // the promise will reject if...
        // The network is down
        // The server is down
        getWorkshops()
            .then(function (workshops) {
                allWorkshops = workshops;
                return workshops;
                // showWorkshops( workshops );
            })
            .then(showWorkshops)
            .catch(function (error) {
                const errorMessage = document.querySelector('.message-error');
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('hide');
            })
            .finally(function () {
                infoMessage.textContent = '';
                infoMessage.classList.add('hide');
            });
    }

    function addEventListeners() {
        searchEl.addEventListener('input', function (event) {
            const search = searchEl.value;

            // let us find the list of workshops that have the search key in their name
            const matchedWorkshops = allWorkshops.filter(function (workshop) {
                // return true if the workshop's name has the search string in it
                return workshop.name.toLowerCase().includes(search.toLowerCase());
            });

            showWorkshops(matchedWorkshops);
        });
    }

    window.addEventListener( 'load', function() {
        // let us set up for filtering the workshops when use types in search box
        searchEl = document.querySelector('#search-workshops');
        infoMessage = document.querySelector('.message-info');

        showLoadingMessage();
        fetchWorkshops();
        addEventListeners();
    });
})();