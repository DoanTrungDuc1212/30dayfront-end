var btnSearch = document.querySelector('.search-box__btn')


btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open') /*tạo thêm 1 class cho element cha*/
    this.previousElementSibling.focus() /*Tự động nhảy con trỏ chuột vào ô text*/
})