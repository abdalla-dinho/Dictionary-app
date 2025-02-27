import View from "./view.js";

class BookmarkView extends View {
    __parentElement = document.querySelector(".bookmark__container");
    
    generateMarkup() {

        return `
          <ul class="bookmarks-result">
                ${this.__data.map(book => {
                    return `
                    <li class="bookmark-results">${book.word}</li>
                  `
                }).join('')}
         </ul>
        `;
    }

    renderMessage() {
        const markUp = `
          <div class="d-flex bookmark-empty">
                <i class="fas fa-smile modal-icon"></i>
                <p>No bookmarks yet, find word and bookmark it </p>
                <div> 
        `;

        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markUp);

    }


    addHandler(handler) {
        this.__parentElement.addEventListener('click', e => {
            const btn = e.target.closest(".bookmark-results");

            if (!btn) return;

            const value = btn.innerText;

            // console.log(btn)

            handler(value)
        })
    }
}

export default new BookmarkView();