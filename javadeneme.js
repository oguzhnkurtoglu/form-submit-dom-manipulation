let formDom = document.querySelector("#userForm")
formDom.addEventListener("submit", preventDef)


function preventDef(event) {
    event.preventDefault()
    let inputDom = document.querySelector("#inputText")
    const INPUT = inputDom.value
    let scoreDom = document.querySelector("#scoreText")
    const SCORE = inputDom.value
    addItem(INPUT, SCORE)
}

const addItem = (userName, score) => {
    let ulDom = document.querySelector(".list-group")
    console.log(ulDom)
    let liDom = document.createElement("li")
    liDom.classList = "list-group-item", "d-flex", "justify-content-between", "align-items-center"
    liDom.innerHTML = `${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>  `
    ulDom.append(liDom)

    formDom.reset()
}

