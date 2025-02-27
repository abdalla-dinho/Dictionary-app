import View from "./view.js";

class QuizView extends View {
  __parentElement = document.querySelector(".quiz"); 
   
 
    index = 0;
    score = 0;

  generateMarkup() {
    return `
    <h2 class="quiz__header">Grammer Quiz</h2>
    <p class="quiz__question">${this.__data.question}</p>

       ${this.__data.options
         .map((op, i) => {
           return `
            <div class="quiz__container">
               <input type="radio" class="radio-input" id="option${
                 i + 1
               }" name="options">
               <label for="option${i + 1}">${op}</label>
              </div>
           `;
         })
         .join("")}
         
        <button class="btn btn-submit">Submit</button>

        <div class="alert-text">plz choose a answer</div>
        `;
    }

    generateResult() {
        return `
            <div>
            u score is ${this.score} out of ${this.index}  
            ${
              this.score > this.index / 2
                ? "good job"
                : "gain some knowledge idiot"
            }
          </div>
           <button class="btn btn-reset">Restart</button>
        `;
    }

    

     displayResult() {
         const markup = this.generateResult();
         this.clear();

         this.__parentElement.insertAdjacentHTML('afterbegin', markup);
    }

  addHandler(handler) {
    this.__parentElement.addEventListener('click', e => {
      const alertElm = this.__parentElement.querySelector(".alert-text");   
      const btnSubmit = e.target.closest('.btn-submit');   
          const checkedInput = this.__parentElement.querySelector('input[name="options"]:checked');

      if (!btnSubmit) return;
      
     
   

        if (checkedInput) {
          this.index++;
          const label = document.querySelector(`label[for="${checkedInput.id}"]`);
          const answer = this.__data.answer;

          if (label.textContent === answer) {
            this.score++;

            console.log(this.score)
              
          }
              
   
  
          
          
          handler(this.index);
          
        } else {
          console.log('error')
          console.log(alertElm)
          alertElm.classList.add('alert-active')
        }
        
        
      })
  }

  addHandlerRestar(handler) {
    this.__parentElement.addEventListener('click', e=> {
      const btnrestart = e.target.closest(".btn-reset");

      if (!btnrestart) return;

      this.index = 0;
      this.score = 0;

      handler(this.index)

    })
  }


  
}

export default new QuizView();