console.log('Hello world');


const container = document.querySelector('div');


let input = prompt('Enter the number of squares to display on the grid');

console.log(input);

function grid(){

    const square = document.createElement('div');
    square.classList.toggle('sqr');
    container.appendChild(square);

    square.addEventListener('mouseover', (event) => {
        console.log(event.type);

        if(event.type === 'mouseover'){
            square.classList.toggle('toggle');
        }
    });

};

for(let i = 0; i < input; i++){
    grid();
};


