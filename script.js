console.log('Hello world');

const container = document.querySelector('div');
const button = document.querySelector('button');


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



button.addEventListener('click', (event) => {

    console.log(event.type);

    if(event.type === 'click'){

        //document.location.reload();

        let input = prompt('Enter the number of squares to display on the grid');

        console.log(input);

        for(let i = 0; i < input; i++){
    
            grid();
        
        };

    };
});
