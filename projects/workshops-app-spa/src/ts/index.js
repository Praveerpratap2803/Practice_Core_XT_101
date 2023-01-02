
import loginInit from './pages/login'
import homeInit from './pages/home'
import workshopsListInit from './pages/workshops-list'
import addWorkshopInit from './pages/add-workshop'

const routes= {

    '/login.html':{
        template:'login',
        controller:loginInit
    },
    '/index.html':{
        template:'home',
        controller:homeInit
    },
    '/workshops-list.html': {
        template: 'workshops-list',
        controller: workshopsListInit
    },
    '/add-workshop.html': {
        template: 'add-workshop',
        controller: addWorkshopInit
    },
    '*':{
        template: 'page-not-found',
        controller: null
    }
}

const loadPage = (pathname)=>{
    let route;

    if(pathname in routes){
        route=routes[pathname];
    }

    const root = document.getElementById('root')
    const tpl = document.getElementById(route.template).innerHTML;
    root.innerHTML = tpl;

   if( route.controller !== null ) {
        route.controller();
    }
}

loadPage(location.pathname)

const links = document.querySelectorAll('a');

links.forEach(link=>{
    link.addEventListener('click',function(event){
        event.preventDefault();

        const nextPageUrl = link.getAttribute('href');
        history.pushState("","",nextPageUrl);


        loadPage(location.pathname)

    })
})











