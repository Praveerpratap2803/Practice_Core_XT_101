const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday' ];

//console.log(days[0]);
const b=days.forEach(
    function(a){
        return a;
        //console.log(a);
    }
)

console.log(b);

const c = days.map(
    function(value){
        return value.length
    }
)
console.log(c);

const d=days.filter(
    function(value){
        
            return /^([s-zS-Z])$/.test(value[0])
        
        
    }
)

console.log(d);


const e = days.filter(
    function(value){
        if(value.length === 6)
        {
            return value;
        }
    }
)
console.log(e);













