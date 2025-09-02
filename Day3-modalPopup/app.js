var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal__header i')
var iconClose = document.querySelector('.modal__footer button')

console.log({ btnOpen, modal, btnClose, iconClose })

function toggleModal(e) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function (e) {

    if (e.target == e.currentTarget) {
        toggleModal()
    }
})
iconClose.addEventListener('click', toggleModal)