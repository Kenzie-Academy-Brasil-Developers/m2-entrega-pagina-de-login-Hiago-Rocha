const btnModal = document.getElementById("btnEsqueci")
btnModal.addEventListener("click" , (event) => {
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
})
const btnFechaModal = document.querySelector(".modal-close")
btnFechaModal.addEventListener("click" , (event) => {
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
})