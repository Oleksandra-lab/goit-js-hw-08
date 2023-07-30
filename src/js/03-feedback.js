 const form = document.querySelector('.feedback-form')
form.addEventListener('submit', handleForm)
form.reset()
const array = JSON.parse(localStorage.getItem("feedback-form-state")) || [];

function handleForm(evt){
    evt.preventDefault()

    const email = evt.target.elements.email.value;
    const message = evt.target.elements.message.value;


    const object = {
        email,
        message,
    }

    array.push(object);

    localStorage.setItem("feedback-form-state", JSON.stringify(array))

    console.log(array);

    evt.currentTarget.reset()
    
}
