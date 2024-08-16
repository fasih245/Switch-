// let num = 10;

// switch (num) {
//     case 10:
//         console.log('Working');
//         break;
//     case 5:
//     console.log('Not Working')
//         break;

//     default:
//         console.log('nothing is working')
//         break;
// }


// let l = 20;
// console.log(l);
//  l = 30;
//  console.log(l)


//  const c = 50;
//  console.log(c);
//  c = 90; 
//  console.log(c);

let timer = document.querySelector('#timer');
let counterS=56;
let counterM=59;
let counterH=0;
var time;
if(counterS===0){
    counterS=0;
}
function startTimer(){

    time=setInterval(function()  {
        if(counterS===60)
        {counterS=0; counterM+=1;}
        if(counterM===60)
            {counterM=0; counterH+=1;}
        else
        { counterS += 1;}
        console.log(counterS);
        timer.innerHTML= `${counterH}h: ${counterM}m: ${counterS} s`
            
    },1000);
}

    
function stopTimer(){
    clearInterval(time);
}

function resetTime(){
    counterS=0
    counterM=0
    counterH=0
    timer.innerHTML= `${counterH}:${counterM}:${counterS} s`
}