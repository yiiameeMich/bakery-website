//about info section

const aboutButtonsParent = document.querySelector('.about-btns'),
	aboutButtons = document.querySelectorAll('.info-btn'),
	aboutInfoHeadings = document.querySelectorAll('.secondary-text.info'),
	aboutInfoPars = document.querySelectorAll('.about__item');

const showContent = (i = 0) => {

	aboutInfoHeadings[i].classList.add('about__heading_active');
	aboutInfoPars[i].classList.remove('about__item_disabled');
	aboutInfoPars[i].classList.add('about__item_active');
	aboutButtons[i].classList.remove('info-check-btn');
	aboutButtons[i].classList.add('info-check-btn-active');

	aboutInfoPars[i].classList.add('fade');
	aboutInfoHeadings[i].classList.add('fade');
	aboutButtons[i].classList.add('fade');

};

const hideContent = () => {

	aboutInfoPars.forEach(item => {
		item.classList.remove('fade');
	});

	aboutInfoHeadings.forEach(item => {
		item.classList.remove('fade');
	});

	aboutInfoPars.forEach(par => {
		par.classList.remove('about__item_active');
		par.classList.add('about__item_disabled');
	})

	aboutInfoHeadings.forEach(head => {
		head.classList.remove('about__heading_active');
	})

	aboutButtons.forEach(btn => {
		btn.classList.remove('info-check-btn-active')
		btn.classList.add('info-check-btn')
	})

	aboutButtons.forEach(item => {
		item.classList.remove('fade');
	});

};

hideContent();
showContent();

aboutButtonsParent.addEventListener('click', (event) => {
	const target = event.target;

	if (target && target.classList.contains('info-btn')) {
		aboutButtons.forEach((btn, i) => {
			if (target === btn) {
				hideContent();
				showContent(i);
			}
		})
	}
})


//hover cards

const featuredCardsContainer = document.querySelector('.featured_cards-wrapper'),
	featuredCards = document.querySelectorAll('.featured_card'),
	hoverImage = document.querySelectorAll('.featured_hover_image'),
	featuredCardIcon = document.querySelectorAll('.featured_card-icon')

const makeCardsInactive = () => {
	featuredCards.forEach(card => {
		if (card.classList.contains('featured_card_active')) {
			card.classList.remove('featured_card_active');
			card.classList.add('featured_card');
			card.classList.remove('fade');
		}
	})

	hoverImage.forEach(image => {
		if (image.classList.contains('hover-image-active')) {
			image.classList.remove('hover-image-active');
			image.classList.add('hover-image');
			image.classList.remove('fade');
		}
	})

	featuredCardIcon.forEach((icon, i) => {
		icon.src = `images/icons/icon${i + 1}.png`
	})


};

const makeCardActive = (i = 0) => {
	featuredCards[i].classList.remove('featured_card');
	featuredCards[i].classList.add('featured_card_active');
	hoverImage[i].classList.remove('hover-image');
	hoverImage[i].classList.add('hover-image-active');
	featuredCardIcon[i].src = `images/icons/icon${i + 1}-alt.png`;
	hoverImage[i].classList.add('fade');
	featuredCards[i].classList.add('fade');
};

makeCardsInactive();
makeCardActive();

featuredCardsContainer.addEventListener('mouseover', (e) => {
	const target = e.target;

	if (target && target.classList.contains('f-card')) {
		featuredCards.forEach((card, i) => {
			if (target === card) {
				makeCardsInactive();
				makeCardActive(i);
			}
		})
	}
});

// slider

const slides = document.querySelectorAll('.product-card'),
	prevBtn = document.querySelector('.slide-to-prev'),
	nextBtn = document.querySelector('.slide-to-next'),
	slidesWrapper = document.querySelector('.products-wrapper'),
	slidesField = document.querySelector('.products__wrapper-inner'),
	width = window.getComputedStyle(slidesWrapper).width;

let slideOffset = 0;

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.transition = '0.7s all';
slidesField.style.display = 'flex';

slidesWrapper.style.overflow = 'hidden';

let slidesMath = (slides.length % 2 === 0 ? (slides.length - 2) : (slides.length - 3) )

nextBtn.addEventListener('click', () => {
	if (slideOffset === (+width.slice(0, width.length - 2) * (slides.length - slidesMath))) {
		slideOffset = 0;
	} else {
		slideOffset += +width.slice(0, width.length - 2);
	}

	slidesField.style.transform = `translateX(-${slideOffset}px)`;
})

prevBtn.addEventListener('click', () => {
	if (slideOffset === 0) {
		slideOffset = +width.slice(0, width.length - 2) * (slides.length - slidesMath );
	} else {
		slideOffset -= +width.slice(0, width.length - 2);
	}

	slidesField.style.transform = `translateX(-${slideOffset}px)`;
})

// changing cards

const changingCards = document.querySelectorAll('.recipes-card'),
	recipesCardsWrapper = document.querySelector('.cards-wrapper.recipes')

const cardChanger = (i) => {
	if (changingCards[i].classList.contains('recipes-card')) {
		changingCards[i].classList.remove('recipes-card');
		changingCards[i].classList.add('recipes-card-active');
	} else {
		changingCards[i].classList.remove('recipes-card-active');
		changingCards[i].classList.add('recipes-card');
	}
}

let rndCard = Math.floor(Math.random()*4)

cardChanger(rndCard)