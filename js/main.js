const number_input = document.querySelectorAll(".number-input");
number_input.forEach(function (item) {
  const inputValue = item.querySelector('input');
  const arrowUp = item.querySelector('.arrow-up');
  const arrowDown = item.querySelector('.arrow-down');
  arrowUp.addEventListener('click', () => {
    if (inputValue.value == '') {
      inputValue.value = 1;
    } else {
      inputValue.value++;
    }
  })
  arrowDown.addEventListener('click', () => {
    if (inputValue.value > 0) {
      inputValue.value--;
    }
  })
});

// tabs 
const rightSidebarBtns = document.querySelectorAll(".document-btns button");
rightSidebarBtns.forEach((element, idx) => {
  element.addEventListener('click', (e) => {
    rightSidebarBtns.forEach(item => {
      if (item != this) {
        item.classList.remove('active');
      }
    })
    element.classList.toggle('active');
  })
})

// input click
const upload = document.querySelectorAll('.upload');
const inputFile = document.querySelectorAll('.input-file');
inputFile.forEach((element, idx) => {
  element.addEventListener('click' , () =>{
    upload[idx].classList.toggle('actives');
  })
})









