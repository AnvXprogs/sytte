


let h1 = document.createElement("h1")
document.body.append(h1)
let input = document.createElement("input")
document.body.append(input)
console.log(document)

input.addEventListener("change",(data)=>{
    h1.innerText = input.value
})
let i = 1;
 let button = document.createElement("button")
 document.body.append(button)
button.addEventListener("click",(data)=>{
    i++
    button.innerText = i


})
let box = document.querySelector('.b1')

box.addEventListener('click',()=>{
    box.classList.toggle('b2')
})


