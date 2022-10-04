/* Function for enableing seat selecting button, 
if the seat input number is greater than zero.*/

function tickets(){  
    let number = document.getElementById("num").value;  
    if (number>=1){
        document.getElementById("select").disabled = false; 
        document.getElementById("select").style.color = 'white';
        document.getElementById("select").style.backgroundColor = 'tomato';                   
    }
    else {
        document.getElementById("select").disabled = true;
        document.getElementById("select").style.backgroundColor = 'grey'; 
               
    }
}

//Function to enable seat selection.
var seat_book;
var val = [];
function SelectSeats(){  
    let x = document.getElementById("seattype").value;
    let y = document.getElementById("num").value;

    //taking user input as Execuitve or Premium and enables to select.
    if(x=='Executive'){
    seat_book  = document.querySelectorAll(".eseats");
    for (var i=0 ; i<seat_book.length ; i++){
        seat_book[i].disabled = false;        
    }  
    for (var i=0 ; i<y ; i++){         
        seat_book[i].checked = true;     
        val.push(seat_book[i].value);  
    } 
    }

    else{
        seat_book  = document.querySelectorAll(".pseats");
        for (let i=0 ; i<seat_book.length ; i++){
        seat_book[i].disabled = false;
    }
    for (var i=0 ; i<y ; i++){         
        seat_book[i].checked = true;     
        val.push(seat_book[i].value);  
    }

}
}


//function to display type and number of seat selected.
function book(){
    document.getElementById("type").innerHTML = document.getElementById("seattype").value;
    document.getElementById("number").innerHTML = document.getElementById("num").value; 
    document.getElementById('snum').innerHTML = val;  
}


//Fucntion is used to return home screen.
function checkout(){
    window.history.go(-1);    
}