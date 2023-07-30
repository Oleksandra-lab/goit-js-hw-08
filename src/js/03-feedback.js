 import throttle from "lodash.throttle";
 const formEl = document.querySelector('.feedback-form')
formEl.addEventListener('submit', handleForm)
formEl.addEventListener('input', throttle(onInput, 500))
const STORAGE_KEY = "feedback-form-state";
let formState = {};



function handleForm(evt){
    evt.preventDefault()
    console.log(formState);
    formState = {}
    localStorage.removeItem(STORAGE_KEY)
    evt.currentTarget.reset()    
}

function onInput (evt) {
formState[evt.target.name]=evt.target.value.trim();
localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function onLoad(){
    try {
        const data = localStorage.getItem(STORAGE_KEY)
    if(!data)   return; 
    formState = JSON.parse(data);
    Object.entries(formState).forEach(([key, val]) =>{
        formEl.elements[key].value = val;
    } )
        
    } catch (error) {
        console.log(error.message);
        
    }
    


}
window.addEventListener('load', onLoad)