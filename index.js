const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const loginForm = document.getElementById('login-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalFormBtns = document.getElementById('modal-form-btns');

setTimeout(function(){
    modal.style.display = "inline";
},500)



loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const loginFormData = new FormData(loginForm);
    console.log(loginFormData);
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
        Uploading your data to the dark web...
        </p>
    </div>`
    const uploadText = document.getElementById('uploadText');
    setTimeout(function(){
        uploadText.textContent = `
            Making the sale...`
    },1500)
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `<h2>Thanks <span class="userName">${loginFormData.get('fullName')}</span> you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        ` 
    },3000);
    setTimeout(function(){
        modalCloseBtn.disabled = false;
    }   ,3000)
})

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = "none";
})

declineBtn.addEventListener('mouseenter', function(){
    modalFormBtns.classList.toggle('reverse');
})