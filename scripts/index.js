let main = true;
let main_2 = document.getElementsByClassName("toma-12");

main_2.addEventListener("click", e => {
    if (main) {
        main_2.style.color = "#00ff00";
        main = true;
    } else {
        main_2.style.color = "#ff0000";
        main = false;
    }
})