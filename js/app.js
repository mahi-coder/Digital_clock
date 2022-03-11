function clr() {
    // document.getElementById("edu").value = ""
    button.display.value = ""
}
function myfunction() {
    var test = document.getElementById("display").value;

    // console.log(test);
    // var total1 = 56 + 35 + 41 + 70 + 35 + 45
    // var total = 450 ;
    // var sub = 6; 

    // update.innerHTML = test;
    // button.display.value = eval(total1 / sub)
    button.display.value = eval(test)
}


function some() {
    // console.log("hi")
    button.display.value += eval(button.display.value)

}

// var test = document.getElementById("text").value;

var data = document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        // console.log(e.target.value);
        var out = event.target.value;
        console.log(out)
        // var test
        // test += out;
        // button.display.innerHTML += out;
        button.display.value += out;
    })
})