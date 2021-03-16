//1
const changeTitle = newTitle =>{
    document.getElementById("titleHeader").innerHTML = newTitle
  }
changeTitle("This title is new")
//2
const addClassToTitle = newClass =>{
    updateTitle = document.getElementsByTagName("header")
    updateTitle[0].classList.add("thisIsHeader")
}
addClassToTitle()
//3
const changePcontent = newCont =>{
    document.querySelectorAll("div p")[0].innerText = newCont;
}
changePcontent("This is new content")
//4
const changeUrls = n =>{
    allLinks = document.getElementsByTagName("a")
    allLinks[0].href=n
}
changeUrls("https://www.google.com")
//5
const addToTheSecond = newStuff =>{
    let newLi = document.createElement("li")
    let texty = document.createTextNode(newStuff)
    newLi.appendChild(texty)
    document.getElementById("secondList").appendChild(newLi)
}
addToTheSecond("Hello this is an addition")
//6
const addParagraph = newstuff =>{
    let newP = document.createElement("p")
    let texti = document.createTextNode(newstuff)
    newP.appendChild(texti)
    document.getElementById("paragraph").appendChild(newP)
}
addParagraph("This is a new paragraph")
//7
const firstUlDisappear = () =>{
    document.getElementById("firstList").classList.add("hidden")
}
firstUlDisappear()
//8
const paintItGreen = () =>{
    let lists = document.getElementsByTagName("ul")
    for (let i = 0; i < lists.length; i++){
    lists[i].classList.add("green")
    }
}
paintItGreen()
//9
const makeItClickable = () =>{
    let header = document.getElementById("colourFlip")
    header.style.color = "#" + Math.floor(Math.random()*5000).toString(16)
}
//10
const changeFooterText = () =>{
    let footNews = document.getElementById("footsie")
footNews.innerText = "Oh look at this wonderful interactive website"
}                                                                  
//11
const inputField = document.getElementById("input-field");
