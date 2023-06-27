const card1 = document.querySelector(".main__container__card1");
const card2 = document.querySelector(".main__container__card2");
const button = document. querySelector(".main__container__card1__form__submit");
const Email = document.querySelector(".main__container__card1__form__email");

button.addEventListener('click', (event)=> {
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(Email.value) == true) {
        Email.style.border = '1px solid hsl(231, 7%, 60%)';
    }else{
        event.preventDefault();        
        Email.style.border = '1px solid red';
    }
    if (Email == true){
        button.addEventListener('click', () =>{
            card1.style.display = 'none';
            card2.style.display = 'flex';
        })
    }
});