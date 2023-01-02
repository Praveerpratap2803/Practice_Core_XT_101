function fetchCalendar( formattedDate ) {
    return fetch( `https://mymeetingsapp.herokuapp.com/api/calendar?date=${formattedDate}`, {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InB1cmFuaWtAc2FwaWVudC5jb20iLCJ1c2VySWQiOiI2MmYwY2E5MmFkNzE1MDAwMTVjOGJlMmYiLCJpYXQiOjE2NjAzMDIwNjMsImV4cCI6MTY2MDM4ODQ2M30.WFcCcGje1XFQqsHT67KLgzFeIbwNgSW_tRIv2CzYN0k'
        }
    } )
        .then(function( response ) {
            return response;
        })
};