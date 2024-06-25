const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

function animat(){
    countLabel.classList.add("animation")

    setTimeout(function(){
        countLabel.classList.remove("animation")
    }, 200);
}

increaseBtn.onclick = function() { 
    count++;
    countLabel.textContent = count;

    animat()
 }

 decreaseBtn.onclick = function() { 
    count--;
    countLabel.textContent = count;

    animat()
 }

 resetBtn.onclick = function() { 
    count = 0;
    countLabel.textContent = count;

    animat()
 }