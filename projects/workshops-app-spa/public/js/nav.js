const menuToggler = document.querySelector( '.menu-toggler' );
const leftNav = document.querySelector( '.left-nav' );
const logoutBtn = document.querySelector( '#btn-logout' )

menuToggler.addEventListener( 'click', function() {
    leftNav.classList.toggle( 'd-sm-none' );
});

logoutBtn.addEventListener( 'click', function() {
    logout();

    window.location = './login.html';
});