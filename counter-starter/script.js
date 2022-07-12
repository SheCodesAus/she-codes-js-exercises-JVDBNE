// console.log("yes we are working!")

function add(NumberToAdd) {

//get DOM element
    let counter = document.getElementById('number')

//add 1 to the current value
    let newValue = parseInt(counter.innerHTML) + NumberToAdd

// reassign the value to the DOM element.
    counter.innerHTML = newValue

// test to see if that shit is working! 
    console.log("huzzah!", newValue)
}

// research more re: Args

//-----------------------------------------------------

function minus(NumberToSubtract) {

    //get DOM element
        let counter = document.getElementById('number')
    
    //add 1 to the current value
        let newValue = parseInt(counter.innerHTML) - NumberToSubtract
    
    // reassign the value to the DOM element.
        counter.innerHTML = newValue
    
    // test to see if that shit is working! 
        console.log("hell Yes!", newValue)
    }

    //--------------------------------------------------

    
function multiply(NumberToMultiply) {

    //get DOM element
        let counter = document.getElementById('number')
    
    //add 1 to the current value
        let newValue = parseInt(counter.innerHTML) * NumberToMultiply
    
    // reassign the value to the DOM element.
        counter.innerHTML = newValue
    
    // test to see if that shit is working! 
        console.log("Nailed It!", newValue)
    }

    //---------------------------------------------------

    
function divide(NumberToDivide) {

    //get DOM element
        let counter = document.getElementById('number')
    
    //add 1 to the current value
        let newValue = parseInt(counter.innerHTML) / NumberToDivide
    
    // reassign the value to the DOM element.
        counter.innerHTML = newValue
    
    // test to see if that shit is working! 
        console.log("Please Work!", newValue)
    }