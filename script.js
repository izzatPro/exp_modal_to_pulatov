window.addEventListener('load',function(){
    var showModal = document.querySelector('.show-modal');
    var overlay = document.querySelector('.overlay');
    var modal = document.querySelector('.modal');
    var closeModal = document.querySelector('.close');
    showModal.addEventListener('click',function(){
        overlay.style.display = 'block';
        modal.classList.add('show');
    })
    closeModal.addEventListener('click',function(){
        overlay.style.display = 'none';
        modal.classList.remove('show');
    })
    overlay.addEventListener('click',function(){
        overlay.style.display = 'none';
        modal.classList.remove('show');
    })
})