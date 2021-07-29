const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');


        // copy selected seats into arr
        //map througth array
        //return a new array indexs

       
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//movie select
movieSelect.addEventListener('click', e =>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')) 
    {
        e.target.classList.toggle('selected');

        updateSelectedCount();
        
    }
    
});