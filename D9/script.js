const bingoBoard = document.getElementById("bingoBoard")
const createBoard = ()=>{
    for(let i=0; i<76; i++) {
        const cell = document.createElement("div")
        cell.classList.add('cell')
        cell.innerText = i+ 1
        bingoBoard.appendChild(cell)
    }   
}
const checklist = []
button.onclick = ()=>{
    const button = document.getElementById("button")
    let randomNum = Math.floor(Math.random() * 76) + 1
    if (checklist.indexOf(randomNum) < 0 ){
        checklist.push(randomNum)
        button.innerHTML = `Calling number ${randomNum}!`
        bingoBoard.children[randomNum-1].classList.add("highlight")
    }
}

window.onload= ()=>{
    createBoard()
}