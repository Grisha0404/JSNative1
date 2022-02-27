

const sm = document.getElementById('small')

const onClickHandler1 = (e) =>{
    if(e.altKey){
        alert('yo!')
    }
}


const onClickHandler2 = () => alert('hey!')
const onClickHandler3 = (e) => console.dir(e)
const onClickHandler4 = (e) => console.dir(e)
const onClickHandler5 = (e) => {
    e.stopPropagation()
    if(e.currentTarget.id === 'small'){
        alert(e.currentTarget.id )
    }
}

sm.onclick = onClickHandler1
sm.onclick = onClickHandler2
sm.onclick = null

const md = document.getElementById("medium")
const bg = document.getElementById("big")

sm.addEventListener('click', onClickHandler5)
md.addEventListener('click', onClickHandler4)
bg.addEventListener('click', onClickHandler4)

const superHandler = (e) => {
    e.stopPropagation()
    if(e.target.tagName === "BUTTON"){
        alert(e.target.id)
    }
}
sm.addEventListener('click', superHandler)
