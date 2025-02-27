

export default class View {
    __data;
    
  
    

    render(data) {
        
        if (!data || Array.isArray(data) && data.length === 0)
            return this.renderError(this.__message)
        
        this.__data = data;
        

        const markup = this.generateMarkup();
        
        if (!markup) return;

        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    clear() {
        this.__parentElement.innerHTML = "";
    }

    renderSpinner() {
        const markup = `
          <span class="loader"></span>
        `;

        if (!markup) return;

        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markup);

        
    }

      renderError() {
          const markup = `
            <div class="Error">${this.__message}</div> 
          `;

          if (!markup) return;

          this.clear();
          this.__parentElement.insertAdjacentHTML('afterbegin', markup);
    }


}