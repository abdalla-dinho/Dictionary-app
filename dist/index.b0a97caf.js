const e=[{word:"serendipity",meaning:"The occurrence of events by chance in a happy or beneficial way."},{word:"ephemeral",meaning:"Lasting for a very short time."},{word:"quintessential",meaning:"Representing the most perfect or typical example of a quality or class."},{word:"eloquence",meaning:"Fluent or persuasive speaking or writing."},{word:"resilience",meaning:"The capacity to recover quickly from difficulties; toughness."},{word:"magnanimous",meaning:"Very generous or forgiving, especially toward a rival or less powerful person."},{word:"obfuscate",meaning:"To deliberately make something unclear or difficult to understand."},{word:"pernicious",meaning:"Having a harmful effect, especially in a gradual or subtle way."},{word:"surreptitious",meaning:"Kept secret, especially because it would not be approved of."},{word:"vicarious",meaning:"Experienced in the imagination through the feelings or actions of another person."},{word:"ebullient",meaning:"Cheerful and full of energy."},{word:"idiosyncrasy",meaning:"A mode of behavior or way of thought peculiar to an individual."},{word:"cogent",meaning:"Clear, logical, and convincing."},{word:"alacrity",meaning:"Brisk and cheerful readiness."},{word:"capitulate",meaning:"To surrender or give in after resisting."},{word:"languid",meaning:"Lacking energy or vitality; slow and relaxed."},{word:"gregarious",meaning:"Sociable, fond of company."},{word:"iconoclast",meaning:"A person who attacks or criticizes cherished beliefs or institutions."},{word:"ostentatious",meaning:"Designed to impress or attract notice, often in a showy way."},{word:"ubiquitous",meaning:"Present, appearing, or found everywhere."},{word:"sycophant",meaning:"A person who acts excessively submissive toward someone important to gain advantage."},{word:"antithesis",meaning:"A person or thing that is the direct opposite of someone or something else."},{word:"cacophony",meaning:"A harsh, discordant mixture of sounds."},{word:"parsimonious",meaning:"Extremely unwilling to spend money; stingy."},{word:"pedantic",meaning:"Overly concerned with minor details or rules; overly scholarly."},{word:"proclivity",meaning:"A tendency to choose or do something regularly; an inclination."},{word:"sagacious",meaning:"Having or showing keen mental discernment and good judgment."},{word:"taciturn",meaning:"Reserved or uncommunicative in speech."},{word:"voracious",meaning:"Having a very eager approach to an activity, especially eating or learning."},{word:"zealous",meaning:"Showing great energy or enthusiasm for a cause or objective."},{word:"aberration",meaning:"A departure from what is normal, usual, or expected, typically unwelcome."},{word:"cajole",meaning:"To persuade someone to do something by sustained coaxing or flattery."},{word:"debilitate",meaning:"To make someone weak or feeble."},{word:"enervate",meaning:"To weaken or drain energy from."},{word:"facetious",meaning:"Treating serious issues with deliberately inappropriate humor."},{word:"garrulous",meaning:"Excessively talkative, especially on trivial matters."},{word:"harangue",meaning:"A lengthy and aggressive speech."},{word:"jubilation",meaning:"A feeling of great happiness and triumph."},{word:"labyrinth",meaning:"A complicated irregular network of passages; a maze."},{word:"maelstrom",meaning:"A powerful whirlpool in the sea or a river; a situation of confused movement or turmoil."},{word:"nadir",meaning:"The lowest point in a situation."},{word:"obstreperous",meaning:"Noisy and difficult to control."},{word:"pugnacious",meaning:"Eager or quick to argue or fight."},{word:"quixotic",meaning:"Extremely idealistic, unrealistic, and impractical."},{word:"recalcitrant",meaning:"Stubbornly refusing to obey authority or rules."},{word:"spurious",meaning:"False or fake; not genuine."},{word:"tirade",meaning:"A long, angry speech of criticism or accusation."},{word:"ubiquity",meaning:"The state of being everywhere at once."},{word:"vacuous",meaning:"Having or showing a lack of thought or intelligence."},{word:"winsome",meaning:"Attractive or appealing in a charming or innocent way."}],t=[{question:"Which sentence is correct?",options:["She don't like apples.","She doesn't like apples.","She doesn’t likes apples.","She don’t like apples."],answer:"She doesn't like apples."},{question:"Choose the correct word: ‘The book is ____ the table.’",options:["on","in","at","with"],answer:"on"},{question:"Which word is an adverb?",options:["quickly","beautiful","bright","strong"],answer:"quickly"},{question:"Which sentence is grammatically correct?",options:["He go to school every day.","He goes to school every day.","He going to school every day.","He goed to school every day."],answer:"He goes to school every day."},{question:"Choose the correct form: ‘She ____ to the store yesterday.’",options:["go","goed","went","gone"],answer:"went"},{question:"Which sentence uses the correct preposition?",options:["She is interested on music.","She is interested in music.","She is interested at music.","She is interested of music."],answer:"She is interested in music."},{question:"Which sentence is in the past continuous tense?",options:["I was watching TV when he called.","I watch TV every evening.","I watched TV last night.","I have watched TV."],answer:"I was watching TV when he called."},{question:"Choose the correct conjunction: ‘I was tired, ____ I went to bed early.’",options:["but","or","so","and"],answer:"so"},{question:"Which is the correct plural form of ‘child’?",options:["childs","children","childes","childers"],answer:"children"},{question:"Choose the correct verb form: ‘She ____ already finished her work.’",options:["have","has","having","had"],answer:"has"}],n={result:{},wordOftheDay:{},quiz:{},index:0,bookmarks:[]};function r(e){let t=window.speechSynthesis,n=new SpeechSynthesisUtterance(e);n.lang="en-US",t.speak(n)}const a=async function(e){try{let t=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e}`),r=await t.json(),a={word:r[0].word,definations:r[0].meanings[0].definitions,partOfSpeech:r[0].meanings[0].partOfSpeech,phonetic:r[0].phonetic};n.bookmarks.some(t=>t.id===e)?a.bookmarked=!0:a.bookmarked=!1,n.result=a,console.log(n.result)}catch(e){throw e}},o=async function(){try{n.wordOftheDay=e}catch(e){console.error(e)}},i=async function(e){try{n.index=e,n.quiz=t}catch(e){console.error(e)}},s=async function(e){try{n.bookmarks.push(e),n.bookmarks.some(t=>t.word===e.word)&&(e.bookmarked=!0),console.log(e.word)}catch(e){console.error(e)}},l=function(e){let t=n.bookmarks.findIndex(e=>e.word);console.log(t),n.bookmarks.splice(t,1),e===n.result&&(n.result.bookmarked=!1)};class c{__data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError(this.__message);this.__data=e;let t=this.generateMarkup();t&&(this.clear(),this.__parentElement.insertAdjacentHTML("afterbegin",t))}clear(){this.__parentElement.innerHTML=""}renderSpinner(){let e=`
          <span class="loader"></span>
        `;e&&(this.clear(),this.__parentElement.insertAdjacentHTML("afterbegin",e))}renderError(){let e=`
            <div class="Error">${this.__message}</div> 
          `;e&&(this.clear(),this.__parentElement.insertAdjacentHTML("afterbegin",e))}}class d extends c{__parentElement=document.querySelector(".bookmark__container");generateMarkup(){return`
          <ul class="bookmarks-result">
                ${this.__data.map(e=>`
                    <li class="bookmark-results">${e.word}</li>
                  `).join("")}
         </ul>
        `}renderMessage(){let e=`
          <div class="d-flex bookmark-empty">
                <i class="fas fa-smile modal-icon"></i>
                <p>No bookmarks yet, find word and bookmark it </p>
                <div> 
        `;this.clear(),this.__parentElement.insertAdjacentHTML("afterbegin",e)}addHandler(e){this.__parentElement.addEventListener("click",t=>{let n=t.target.closest(".bookmark-results");n&&e(n.innerText)})}}var u=new d;class h extends c{__parentElement=document.querySelector(".quiz");index=0;score=0;generateMarkup(){return`
    <h2 class="quiz__header">Grammer Quiz</h2>
    <p class="quiz__question">${this.__data.question}</p>

       ${this.__data.options.map((e,t)=>`
            <div class="quiz__container">
               <input type="radio" class="radio-input" id="option${t+1}" name="options">
               <label for="option${t+1}">${e}</label>
              </div>
           `).join("")}
         
        <button class="btn btn-submit">Submit</button>

        <div class="alert-text">plz choose a answer</div>
        `}generateResult(){return`
            <div>
            u score is ${this.score} out of ${this.index}  
            ${this.score>this.index/2?"good job":"gain some knowledge idiot"}
          </div>
           <button class="btn btn-reset">Restart</button>
        `}displayResult(){let e=this.generateResult();this.clear(),this.__parentElement.insertAdjacentHTML("afterbegin",e)}addHandler(e){this.__parentElement.addEventListener("click",t=>{let n=this.__parentElement.querySelector(".alert-text"),r=t.target.closest(".btn-submit"),a=this.__parentElement.querySelector('input[name="options"]:checked');if(r){if(a){this.index++;let t=document.querySelector(`label[for="${a.id}"]`),n=this.__data.answer;t.textContent===n&&(this.score++,console.log(this.score)),e(this.index)}else console.log("error"),console.log(n),n.classList.add("alert-active")}})}addHandlerRestar(e){this.__parentElement.addEventListener("click",t=>{t.target.closest(".btn-reset")&&(this.index=0,this.score=0,e(this.index))})}}var m=new h;class p extends c{__parentElement=document.querySelector(".result");__message="⛔ we couldn,t find the word u are looking plz try again";generateMarkup(){return`
         <div class="result__answer">
            <h4 class="result__word-answer">${this.__data.word}</h4>
            <div class="result__word-icon fw-lg">
            <i class="fas fa-volume-high fa-volume"></i>
         </div>

         <div class="bookmark-icon bookmark-extra ">
         <ion-icon name="bookmark${!0===this.__data.bookmarked?"":"-outline"}" class="bookmark__ion"></ion-icon>
          </div>
       </div>

       <div class="result__phonotic">
           <p class="result__phonotic-text">${this.__data.phonetic}</p>
           <p class="result__phonotic-standard">Phonetic (Standard)</p>
       </div>

      <div class="result__sentence">
         <h2 class="result__sentence-word">${this.__data.partOfSpeech}</h2>
         
         ${this.__data.definations.map((e,t)=>`
                <p class="result__sentence-text">
                    <span>${t+1}: </span> ${e.definition}
                </p>
           `)}
               
          
       </div>

           `}addHandler(e){this.__parentElement.addEventListener("click",t=>{t.target.closest(".result__word-icon")&&e()})}addHandlerBookmark(e){this.__parentElement.addEventListener("click",t=>{let n=t.target.closest(".bookmark__ion");n&&(console.log(n),e())})}}var g=new p;class w extends c{__parentElement=document.querySelector(".input-group");getQuery(){let e=this.__parentElement.querySelector(".input-search").value;return this.clearInput(),e}addHandler(e){this.__parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}addHandlerMobile(e){this.__parentElement.addEventListener("click",t=>{t.target.closest(".input-search-icon")&&(t.preventDefault(),""!==this.__parentElement.querySelector(".input-search").value&&e())})}clearInput(){this.__parentElement.querySelector(".input-search").value=""}}var _=new w;class y extends c{__parentElement=document.querySelector(".result");getTheWord(){return new Date().getDate()}generateMarkup(){return`
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
    `}inputValidtion(e,t,n,r){e.textContent=t,e.classList.add(n),e.classList.remove(r)}clearInput(){this.__parentElement.querySelector(".input-mail").value=""}addHandler(){this.__parentElement.addEventListener("click",e=>{let t=e.target.closest(".btn-sign"),n=document.querySelector(".alert-mail");if(!t)return;let r=this.__parentElement.querySelector(".input-mail").value;if(""===r){n.textContent="Please enter your email address.",n.classList.add("alert-active"),n.classList.remove("alert-success");return}if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(r)){n.textContent="Please enter a valid email address.",n.classList.add("alert-active"),n.classList.remove("alert-success");return}n.textContent="Your submission was successful!",n.classList.remove("alert-active"),n.classList.add("alert-success"),this.clearInput()})}}var f=new y;const v=async function(){g.renderSpinner();try{let e=_.getQuery();if(!e)return;await a(e),console.log(e),g.render(n.result)}catch(e){g.renderError()}},k=async function(){try{await o();let e=f.getTheWord();f.render(n.wordOftheDay[e])}catch(e){console.error(e)}},b=function(e){i(),e===n.quiz.length?m.displayResult():m.render(n.quiz[e])},E=async function(){try{n.result.bookmarked?l(n.result):s(n.result),console.log(n.result),console.log(n.bookmarks),n.bookmarks.length>0?u.render(n.bookmarks):u.renderMessage(),g.render(n.result)}catch(e){}},q=async function(e){try{await a(e),g.render(n.result)}catch(e){console.error(e)}};b(0),_.addHandlerMobile(v),_.addHandler(v),g.addHandler(function(){let e=f.getTheWord();n.result.word?r(n.result.word):r(n.wordOftheDay[e].word)}),m.addHandler(b),m.addHandlerRestar(b),f.addHandler(),g.addHandlerBookmark(E),u.addHandler(q),k();
//# sourceMappingURL=index.b0a97caf.js.map
