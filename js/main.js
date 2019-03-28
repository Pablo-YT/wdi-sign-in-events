window.addEventListener('load', () => {

    var button = document.querySelector('button.signin')
    console.log(button)
    button.addEventListener('click',function(){
        var modal = document.querySelector('.modal')
        modal.style.display = "block"
    })


    var close = document.querySelector('.close')
    close.addEventListener('click',function(){
        var modal = document.querySelector('.modal')
        modal.style.display = 'none'
    })

    var error = document.querySelector('button.submit')
    
    error.addEventListener('click', function(){
        var getstarted = document.querySelector('.getstarted')
        var input = document.querySelectorAll('.getstarted>input')
        input[0].classList.add('error')
        input[1].classList.add('error')
        //input[1].setAttribute('class', 'error')
        //input[0].setAttribute('class', 'error')
        getstarted.addEventListener("mouseover", function(){
            input[0].classList.remove('error')
            input[1].classList.remove('error')
        })

    })});
