let buttons=document.getElementsByTagName('button')
let value=document.getElementById('value')
// buttons.forEach((element)=>{
//     console.log(element)
//     element.addEventListener('click',(e)=>{
//         console.log(e.currentTarget)
//         if(e.currentTarget.classList.contains('btn-outline-success')){
//             value.innerHTML=Number.parseInt(value.innerHTML)+1

//         }
//         else if(e.currentTarget.classList.contains('btn-outline-danger')){
//             value.innerHTML=Number.parseInt(value.innerHTML)-1
            
//         }
//         else{
//             value.innerHTML=0
//         }
//     })
// })
function increment(){
    value.innerHTML=Number.parseInt(value.innerHTML)+1

}
function decrement(){
    value.innerHTML=Number.parseInt(value.innerHTML)-1

}
function reset(){
    value.innerHTML=0

}