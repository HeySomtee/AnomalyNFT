const open = document.getElementById("snow_btn");
const close_btn = document.getElementById("close");
const win = document.getElementById("pop-up");
//
const about_ID = document.getElementById("about");
const about_area = document.getElementById("about-area");
const container = document.getElementById("collector");
//
const team_ID = document.getElementById("team");
const team_area = document.getElementById("team-area");
//
const sneak_ID =  document.getElementById("sneakP");
const sneak_area = document.getElementById("sneakP-area")

open.addEventListener("click", openUp);
function openUp(params) {
    // alert("hello world")
    win.style.display = "block"

}

close_btn.addEventListener("click", closeUp);
function closeUp(params) {
    win.style.display = "none";
}

about_ID.addEventListener("click", aboutFill);
function aboutFill(params) {
    container.innerHTML = about_area.innerHTML;
    container.style.display = "grid";
}

team_ID.addEventListener("click", teamFill);
function teamFill(params) {
    container.innerHTML = team_area.innerHTML;
    container.style.display = "grid";

    // container.style.backgroundImage = "https://pbs.twimg.com/media/FkkJkSBXwAA1yFk?format=jpg&name=medium"
    
}

sneak_ID.addEventListener("click", sneakFill);
function sneakFill(params) {
    container.innerHTML = sneak_area.innerHTML;
    container.style.display = "grid";

}