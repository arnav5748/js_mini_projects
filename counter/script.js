const inc_btn = document.getElementById("inc_id");
const re_btn = document.getElementById("re_id");
const dec_btn = document.getElementById("dec_id");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning")

let count = 0;

inc_id.onclick = function() {
    count++;
    warning.textContent = "";
    counter.textContent = count;
}

re_id.onclick = function() {
    count = 0;
    counter.textContent = count;
}

dec_id.onclick = function() {
    count--;
    warning.textContent ="";

    if(count<0){
        count = 0;
        warning.textContent = "Counter cannot go below 0!";

        setTimeout(function() {warning.textContent = "";}, 200);
    }

    counter.textContent = count;
}
