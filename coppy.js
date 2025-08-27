// copy element 
function copyNumber(id){
    navigator.clipboard.writeText(id);
}


// add the copy button
function add(){
    const copy = parseInt(document.getElementById('copy-btn').innerText)
    const addTheElement = copy + 1;
    document.getElementById('copy-btn').innerText = addTheElement
}


// copy btn click
// btn 1
document.getElementById('copy-btn-1-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-1').innerText
    copyNumber(text)
    add()
})


// btn 2
document.getElementById('copy-btn-2-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-1').innerText
    copyNumber(text)
    add()
})

// btn 3
document.getElementById('copy-btn-3-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-1').innerText
    copyNumber(text)
    add()
})

// btn 4
document.getElementById('copy-btn-4-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-4').innerText
    copyNumber(text)
    add()
})

//btn 5
document.getElementById('copy-btn-5-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-5').innerText
    copyNumber(text)
    add()
})

// btn 6
document.getElementById('copy-btn-6-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-6').innerText
    copyNumber(text)
    add()
})

// btn 7
document.getElementById('copy-btn-7-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-7').innerText
    copyNumber(text)
    add()
})

// btn 8
document.getElementById('copy-btn-8-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-8').innerText
    copyNumber(text)
    add()
})

// btn 9 
document.getElementById('copy-btn-9-click').addEventListener('click', function(){
    const text = document.getElementById('copy-btn-9').innerText
    copyNumber(text)
    add()
})