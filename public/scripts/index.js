const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const closing = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () =>{
    modal.classList.remove("hide")
})

closing.addEventListener("click", () => {
    modal.classList.add("hide")
})