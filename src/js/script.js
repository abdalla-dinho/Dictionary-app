const radioInput = document.querySelectorAll(".radio-input");
const answers = document.querySelector('.quiz__answers');
const bookmark = document.querySelector(".bookmark");
const iconBtn = document.querySelectorAll(".accordion__icons");
const accordionBody = document.querySelectorAll(".accordion__body");
const modalEl = document.querySelector(".modal");


window.visualViewport.addEventListener("resize", () => {
  document.body.style.height = `${window.visualViewport.height}px`;
});







//     const btn = e.target.closest('.radio-input');

//     if (!btn) return;

//     radioInput.forEach(inp => {
//         inp.checked = false;
//     });

//     btn.checked = true;
    

  
// });

const modalfunction = function (e) {
    
    modalEl.style.display = this;
   
 

    
}

bookmark.addEventListener('mouseover', modalfunction.bind('block'));

bookmark.addEventListener("mouseout", modalfunction.bind('none'));

iconBtn.forEach(iconBtn => {

    iconBtn.addEventListener('click', e => {

    const btn = e.target.closest('.accordion__icon');

    if (!btn) return;

        const parentEl = btn.closest(".accordion__body");
        
        accordionBody.forEach(acrd => {
            
            if (acrd !== parentEl) acrd.classList.remove('active-color');
        });

       
        parentEl.classList.toggle('active-color')

 
})
})