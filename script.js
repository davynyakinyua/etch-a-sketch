console.log('Hello world');


//create two variables button and container and refer them to html
const container = document.querySelector('div');
const button = document.querySelector('button');


let sqrNum = 28;

//create a function square that creates squares on the html dom
function grid(numChosen){
    
    let num = numChosen * numChosen;
    
    for(let i = 1; i <= num; i++){
        const div = document.createElement('div');
        div.classList.toggle('square');
        container.appendChild(div);

        function hover(){
        div.classList.toggle('hover');

        };

        div.addEventListener('mouseover', hover); 
    };

};


function reload(){

    document.location.reload();
    
};

function choice(){
    sqrNum = prompt('Enter a number between 10 and 28');

    console.log(sqrNum);
    if(sqrNum < 10 || sqrNum > 28){
        grid(28);
        alert('please enter a number between 10 and 28');
    } else if(sqrNum > 9 && sqrNum < 29){
        grid(sqrNum);
    } else{
        grid(28);
        alert('Error! Please enter a number between 10 and 28');
    }

    
}


button.addEventListener('click', reload);
addEventListener('DOMContentLoaded', choice);

//grid(sqrNum);