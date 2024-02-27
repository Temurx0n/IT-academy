const bodyEl = document.querySelector('#body')
const conEl = document.querySelector('.container')
document.getElementById("toggle").addEventListener("change", function () {
    
    
    
    if (this.checked) {
        bodyEl.style.background = 'black';
        conEl.style.color = 'white';
        console.log("Toggle is checked");
    } else {
        bodyEl.style.background = 'white';
        conEl.style.color = 'black';
        console.log("Toggle is not checked");
    }
});
