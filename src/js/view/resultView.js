import View from "./view.js";

class resultView extends View {
  __parentElement = document.querySelector(".result");
  __message = '⛔ we couldn,t find the word u are looking plz try again';

  generateMarkup() {
    return `
         <div class="result__answer">
            <h4 class="result__word-answer">${this.__data.word}</h4>
            <div class="result__word-icon fw-lg">
            <i class="fas fa-volume-high fa-volume"></i>
         </div>

         <div class="bookmark-icon bookmark-extra ">
         <ion-icon name="bookmark${this.__data.bookmarked === true ?'':'-outline'}" class="bookmark__ion"></ion-icon>
          </div>
       </div>

       <div class="result__phonotic">
           <p class="result__phonotic-text">${this.__data.phonetic}</p>
           <p class="result__phonotic-standard">Phonetic (Standard)</p>
       </div>

      <div class="result__sentence">
         <h2 class="result__sentence-word">${this.__data.partOfSpeech}</h2>
         
         ${this.__data.definations.map((diff, i) => {
           //  console.log(diff.definition)
           return `
                <p class="result__sentence-text">
                    <span>${i + 1}: </span> ${diff.definition}
                </p>
           `;
         })}
               
          
       </div>

           `;
  }

  

  // __volumeEl = document.querySelector(".result__word-icon");

  addHandler(handler) {
    this.__parentElement.addEventListener('click', e => {
      if (e.target.closest(".result__word-icon")) {
       handler()
     }
   })
  }


  addHandlerBookmark(handler) {
    this.__parentElement.addEventListener('click', e => {
      const bookmarkBtn = e.target.closest(".bookmark__ion");
      

      if (!bookmarkBtn) return;
      console.log(bookmarkBtn);

      handler()



    })
  }
 
  }


  



export default new resultView();