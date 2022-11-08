//массив с данными
const mainArray = [
    {
        productName: 'Велосипед STELS Navigator 510 HD 26 2022',
        productParagraphOne: 'Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.',
        productParagraphTwo: 'Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.',
        productImgUrl: './img/products/image1.png'


    },
    {
        productName: 'Велосипед SCHWINN Traveler women 2022',
        productParagraphOne: 'Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.',
        productParagraphTwo: 'На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.',
        productImgUrl: './img/products/image2.png'

    }

];

//табы
const tabOne = document.querySelector('#productOne');
const tabTwo = document.querySelector('#productTwo');
const productTitle = document.querySelector('[data-productTitle]');
const productParagraphOne = document.querySelector('[data-productParagraphOne]');
const productParagraphTwo = document.querySelector('[data-productParagraphTwo]');
const productImg = document.querySelector('[data-productImg]');

tabOne.classList.add('tab--active');

tabOne.addEventListener('click',()=>{
    tabOne.classList.add('tab--active');
    tabTwo.classList.remove('tab--active');

    productTitle.innerText = mainArray[0].productName;

    productParagraphOne.innerText = mainArray[0].productParagraphOne;

    productParagraphTwo.innerText = mainArray[0].productParagraphTwo;

    productImg.setAttribute(`src`, `${mainArray[0].productImgUrl}`);


     if (window.matchMedia("(max-width: 820px)").matches) {
         tabOne.classList.remove(`tabOne--media`);
         tabTwo.classList.remove(`tabTwo--media`);
       }

});

tabTwo.addEventListener('click', ()=>{
    tabOne.classList.remove('tab--active');
    tabTwo.classList.add('tab--active');

    productTitle.innerText = mainArray[1].productName;

    productParagraphOne.innerText = mainArray[1].productParagraphOne;

    productParagraphTwo.innerText = mainArray[1].productParagraphTwo;

    productImg.setAttribute(`src`, `${mainArray[1].productImgUrl}`);

     if (window.matchMedia("(max-width: 820px)").matches) {

        tabOne.classList.add(`tabOne--media`);
        tabTwo.classList.add(`tabTwo--media`);
      }

})


//табы

//Кнопка "Добавить"

const addBtn = document.querySelector('#addBtn');
const qualitiesInput = document.querySelector('#qualitiesInput');
const listWithQualities = document.querySelector('#listWithQualities');


addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const qualitiesInputValue = qualitiesInput.value;
     const tplForListItem = `<li>${qualitiesInputValue}</li>`;

    if(qualitiesInputValue === ''){
        alert(`Валидация. Пусто место не бывает:))`);

    }else{
        listWithQualities.insertAdjacentHTML('beforeend', tplForListItem);
        qualitiesInput.value = '';
        qualitiesInput.focus();
        listWithQualities.classList.add('qualities__list--transform');
    }

})

//плавный скролл
let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}



