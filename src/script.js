
 document.addEventListener("DOMContentLoaded", function(event) {

const BrowsElement = document.documentElement;
const ShowMore = document.querySelector('.show-more');
const ShowMoreText = document.querySelector('.show-more__text');
const ShowMoreImage = document.querySelector('.show-more__image');
let ProductsLength = document.querySelectorAll('.brands__item').length;

let MiddleSizeItems = 6;
let LargeSizeItems = 8;


const ShowMoreButton = function() {
	if (ShowMoreText.textContent == 'Показать все') {
	const array = [...document.querySelectorAll('.brands__item')];
	array.forEach(el => el.classList.add('brands__item--visible'))
		ShowMoreText.textContent= 'Скрыть' 
		ShowMoreImage.classList.add('show-more__image--rotate')

	} else {
		ShowMoreText.innerText = 'Показать все';
		const array = [...document.querySelectorAll('.brands__item--visible')];
		array.forEach(el => el.classList.remove('brands__item--visible'))
		
		ShowMoreImage.classList.remove('show-more__image--rotate')
	};	
}

ShowMore.addEventListener ('click', ShowMoreButton)


//swiper//
const MediaQuery = window.matchMedia('(min-width: 767px)')
if (!MediaQuery.matches)  {
	const SwiperContainer = document.querySelector('.container')
	const BrandsList = document.querySelector('.brands__list')
	const BrandsItem = document.querySelectorAll('.brands__item')

		SwiperContainer.classList.add('swiper')
		BrandsList.classList.add('swiper-wrapper')

		for (let i = 0; i < BrandsItem.length; i++) {
			BrandsItem[i].classList.add('swiper-slide')}
}

	const swiper = new Swiper('.swiper', {
	  loop: true,
	  slidesPerView: 'auto',
    slidesPerColumn: 'auto', // and this
	  spaceBetween: 16,
	  pagination: {
	    el: '.swiper-pagination',
	  },

	  if(MediaQuery)  {
			swiper.destroy();
		}
	})
 });
