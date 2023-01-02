let units=150;
let total_cost=0;
while(units>0)
{
    if(units<50){
        total_cost=units*20
        break;
    }
    if(units<100 && units>=50){
        units=units-50;
        total_cost=units*25+50*20
        break;
    }
    if(units<200 && units>=100){
        units=units-100
        total_cost=units*30+50*20+50*25
        break;
    }
    if(units>=200 ){
        units=units-200
        total_cost=units*35+50*30+50*20+50*25
        break;
    }
    
}
console.log(total_cost);











