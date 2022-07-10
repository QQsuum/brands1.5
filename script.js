//btn show-more//
const browsElement = document.documentElement;
const showMore = document.querySelector('.show-more');
const closeMore = document.querySelector('.close-more');
var productsLength = document.querySelectorAll('.brands__item').length;

var items = 6;
if (browsElement.clientWidth >= 1120) {
	items = 8
}

showMore.addEventListener ('click', function() {
	const array = Array.from(document.querySelectorAll('.brands__item'));
	array.forEach(el => el.classList.add('brands__item--visible'))
	showMore.classList.add('show-more--hidden');
	closeMore.classList.remove('close-more--hidden')
})

closeMore.addEventListener('click', function() {
	const array = Array.from(document.querySelectorAll('.brands__item--visible'));
	const visItems = array.slice(0, items)
	array.forEach(el => el.classList.remove('brands__item--visible'))
	showMore.classList.remove('show-more--hidden');
	closeMore.classList.add('close-more--hidden')
})



//swiper//
var swiperContainer = document.querySelector('.container')
var brandsList = document.querySelector('.brands__list')
var brandsItem = document.querySelectorAll('.brands__item')
	
if (browsElement.clientWidth <= 767) {

	swiperContainer.classList.add('swiper')
	brandsList.classList.add('swiper-wrapper')
	for (var i = 0; i<brandsItem.length; i++) {
		brandsItem[i].classList.add('swiper-slide')}

	const swiper = new Swiper('.swiper', {
	  loop: true,
	   slidesPerView: 'auto',
    slidesPerColumn: 'auto', // and this
	  spaceBetween: 16,
	  pagination: {
	    el: '.swiper-pagination',
	  },
	})
}


;