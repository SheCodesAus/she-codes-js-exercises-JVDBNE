function showName() {
    let inputField = document.getElementById('name-text')
    console.log("The Input Field is: ", inputField)
    alert("Hello " + inputField.value)



    // console.dir(inputField) lists all the different javascript things you can access - pretty nifty! 

    // if you do this in python it would be 
    // print(dir(object))
}f