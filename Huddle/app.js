function setCounter(counters){
    counters.forEach(counter => {
        counter.innerText = '0'
        const updateCounter = ()=>{
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText
            const increment = target/200
            if(c<target){
                counter.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updateCounter, 1)
            }else{
                counter.innerText = target
            }
        }
        updateCounter()
    });
}

let ctrl = false

window.addEventListener('scroll', ()=>{
    if(window.scrollY + 400 > document.querySelector('.three').offsetTop & !ctrl){
        setCounter(document.querySelectorAll('.three .people span'))
        ctrl = true
    }
    
})