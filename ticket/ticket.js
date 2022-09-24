/* Function for enableing seat selecting button, 
if the seat input number is greater than zero.*/
function tickets(){
    var x = document.getElementById("num").value;
    if (x<1){
        document.getElementById("select").disabled = true;
        document.getElementById("select").style.backgroundColor = 'grey';        
        return
           
    }
    else {
        document.getElementById("select").disabled = false; 
        document.getElementById("select").style.color = 'white';
        document.getElementById("select").style.backgroundColor = 'tomato'; 
        return       
    }
}

//Function to enable seat selection.
var seat_book;
function SelectSeats(){  
    var x = document.getElementById("seattype").value;
    var y = document.getElementById("num").value;

    //taking user input as Execuitve or Premium and enables to select.
    if(x=='Executive'){
    seat_book  = document.querySelectorAll(".eseats");
    for (var i=0 ; i<seat_book.length ; i++){
        seat_book[i].disabled = false;        
    }  
    for (var i=0 ; i<y ; i++){         
        seat_book[i].checked = true;       
    } 
    }

    else{
        seat_book  = document.querySelectorAll(".pseats");
        for (let i=0 ; i<seat_book.length ; i++){
        seat_book[i].disabled = false;
    }
    for (var i=0 ; i<y ; i++){         
        seat_book[i].checked = true;       
    }

}
}


//function to display type and number of seat selected.
function book(){
    document.getElementById("type").innerHTML = document.getElementById("seattype").value;
    document.getElementById("number").innerHTML = document.getElementById("num").value;
   
}


//Fucntion is used to return home screen.
function checkout(){
    window.history.go(-1);    
}