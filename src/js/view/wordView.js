import View from "./view.js";

class WordView extends View {
  __parentElement = document.querySelector(".result");
  
  getTheWord() {
    const month = new Date().getDate();

    return month;
  }

  generateMarkup() {
    return `
    <h3 class="result__title">word of the day</h3>
    <p class="result__date">${new Date().toDateString()}</p>
    <div class="result__word">
    <h4 class="result__word-text">${this.__data.word}</h4>
    <div class="result__word-icon">
    <i class="fas fa-volume-high "></i>
    </div>
    </div>  
    <p class="result__word-meaning">${this.__data.meaning}</p>
    
    <p class="text">Sign up to get word of the in you box</p>
    
    <div class="result__input-group">
    <input class="result__input-group-input--1 input-mail" type="text" placeholder="Enter U Email">    
    <button class="result__input-group-btn--1 btn-sign">Sign Up</button>
    </div>
    
    <div class="alert-mail"></div>
    `;
  }

  
  inputValidtion(elm,text,active,sucess) {
    elm.textContent = text;
    elm.classList.add(active);
    elm.classList.remove(sucess)
  }

  clearInput() {
    this.__parentElement.querySelector(".input-mail").value = "";
  }

 

  addHandler() {
    this.__parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-sign");
      
      const alertEl = document.querySelector(".alert-mail");
      
      
      if (!btn ) return;
      const inputValue = this.__parentElement.querySelector(".input-mail").value;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
      // Check if input is empty
      if (inputValue === "") {
              
        alertEl.textContent = "Please enter your email address.";
        alertEl.classList.add("alert-active");
        alertEl.classList.remove("alert-success");
        return;
      }

      // Check if input follows a valid email pattern
      if (!emailRegex.test(inputValue)) {
      alertEl.textContent = "Please enter a valid email address.";
      alertEl.classList.add("alert-active");
        alertEl.classList.remove("alert-success");        
        return;
      }

     alertEl.textContent = "Your submission was successful!";
     alertEl.classList.remove("alert-active");
     alertEl.classList.add("alert-success");

      this.clearInput();
    });
  }
}


export default new WordView();