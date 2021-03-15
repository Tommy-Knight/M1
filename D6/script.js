function changeBodyBg(colour){
    document.body.style.background = colour;
}
changeBodyBg("Azure")

function changeH1(newH1){
    document.getElementById("title").innerHTML = newH1
}
changeH1("Tommy's Tuck Time!")

function fixFoot(newFoot){
    document.getElementById("toes").innerHTML = newFoot
}
fixFoot("Thanks for shopping at Tommy's Tuck. <br> Unfortunately we don't have an address available yet.<br> Also the submit button is broken so don't bother using it.")

function addClass(){
    let jazzyLinks = document.querySelectorAll(".amazonLink")
    jazzyLinks.forEach(link => link.classList.add("cool"))
}
addClass()

function invisibility(){
    let toggler = document.querySelectorAll(".photo")
    toggler.forEach(pic => pic.classList.toggle("hide"))
}