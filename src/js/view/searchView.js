import View from "./view.js";


 class SearchView extends View {
   __parentElement = document.querySelector(".input-group");

   getQuery() {
     const query = this.__parentElement.querySelector(".input-search").value;
     this.clearInput();

     return query;
   }

   addHandler(handler) {
     this.__parentElement.addEventListener("submit", (e) => {
       e.preventDefault();
       const input = this.__parentElement.querySelector(".input-search");

       handler();
       this.__blurInput(input);
     });
   }

   addHandlerMobile(handler) {
     this.__parentElement.addEventListener("click", (e) => {
       const submitBtn = e.target.closest(".input-search-icon");
       if (!submitBtn) return;
       e.preventDefault();

       const inputValue = this.__parentElement.querySelector(".input-search");

       if (inputValue.value === "") return;

       handler();
       this.__blurInput(inputValue);
     });
   }

   clearInput() {
     this.__parentElement.querySelector(".input-search").value = "";
   }

   __blurInput(input) {
     input.blur();
   }
 }

export default new SearchView();