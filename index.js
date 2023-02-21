document.querySelectorAll('.accordion').forEach(element => {
    element.addEventListener('click', function(e){
        element.classList.toggle('active')
        element.nextElementSibling.classList.toggle('show')

    })
});

