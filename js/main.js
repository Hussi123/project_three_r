
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


// input click
const upload = document.querySelectorAll('.upload');
const inputFile = document.querySelectorAll('.input-file');
inputFile.forEach((element, idx) => {
  element.addEventListener('click', () => {
    upload[idx].classList.toggle('actives');
  })
})


// Timer
const days = document.querySelectorAll(".diadline");
console.log(days);
let dayValue;
const green_btn_span = document.querySelector('.green-btn span');
const green_btn_svg = document.querySelector('.green-btn svg path');

days.forEach((item) => {
  item.textContent = dayValue = 90;
})

const timeFunction = setInterval(() => {

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  days.textContent = dayValue < 10 ? `${dayValue}` : dayValue;
}, 1000); //1000ms = 1s

if (dayValue <= 50 && dayValue > 10) {
  green_btn_span.style.color = '#d0721f';
  green_btn_svg.style.fill = "#d0721f"
}
else if (dayValue <= 10) {
  green_btn_span.style.color = 'red';
  green_btn_svg.style.fill = "red"

}

try {
  // dobavit-form

  const dobavit_form = document.querySelector('.dobavit-form');
  const cabinitet_form_klent = document.querySelector('.cabinitet-form-klent');
  const content_bnt_dobavit = document.querySelector('.content-bnt-dobavit');
  const etap_0 = document.querySelectorAll('.etap-0');
  const etap_1 = document.querySelectorAll('.etap-1');

  content_bnt_dobavit.addEventListener('click', () => {
    dobavit_form.classList.add('d-none');
    cabinitet_form_klent.classList.remove('d-none');

    etap_0.forEach((item) =>{
      item.classList.add('d-none')
    })
    etap_1.forEach((item) => {
      item.classList.remove('d-none')
    })
  })
}
catch { 
  console.log('ok');
}




// Tabs
const tabsParent = document.querySelector('.document-btns'),
  tabs = document.querySelectorAll('.commons-btn-154'),
  tabsContent = document.querySelectorAll('.document-img');

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade')
  })

  tabs.forEach((item) => {
    item.classList.remove('active-154')
  })
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide')
  tabs[i].classList.add('active-154')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains('commons-btn-154')) {
    tabs.forEach((item, idx) => {
      if (target == item) {
        hideTabContent();
        showTabContent(idx);
      }
    })
  }
})


