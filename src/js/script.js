const radioInput = document.querySelectorAll(".radio-input");
const answers = document.querySelector('.quiz__answers');
const bookmark = document.querySelector(".bookmark");
const iconBtn = document.querySelectorAll(".accordion__icons");
const accordionBody = document.querySelectorAll(".accordion__body");
const modalEl = document.querySelector(".modal");
const inputs = document.querySelectorAll('input');



document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="search"]'
  );
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      document
        .querySelector('meta[name="viewport"]')
        .setAttribute(
          "content",
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        );
    });
    input.addEventListener("blur", function () {
      document
        .querySelector('meta[name="viewport"]')
        .setAttribute(
          "content",
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1"
        );
    });
  });
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