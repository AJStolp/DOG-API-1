'use strict';

function getDogImage(){
    const userInput = $( "#userNum" ).val();
    const options = {method: 'GET'};
    fetch
    (`https://dog.ceo/api/breeds/image/random/${userInput}`, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert ('Something Happened behind the scenes, sorry ;(. Please Try Again!'))
}

function preventDefault() {
    $('form').submit(e =>{
        e.preventDefault();
        getDogImage();
    })
}

preventDefault();