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

		if (target && target.classList.contains('info-btn')){
				aboutButtons.forEach((btn, i) => {
					if (target === btn) {
						hideContent();
						showContent(i);
					}
				})
		}
})

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

	featuredCardIcon.forEach((icon,i) => {
		icon.src = `images/icons/icon${i+1}.png`
	})


};

const makeCardActive = (i = 0) => {
	featuredCards[i].classList.remove('featured_card');
	featuredCards[i].classList.add('featured_card_active');
	hoverImage[i].classList.remove('hover-image');
	hoverImage[i].classList.add('hover-image-active');
	featuredCardIcon[i].src = `images/icons/icon${i+1}-alt.png`;
	hoverImage[i].classList.add('fade');
	featuredCards[i].classList.add('fade');
};

makeCardsInactive();
makeCardActive();

featuredCardsContainer.addEventListener('mouseover', (e) => {
	const target = e.target;

	if (target && target.classList.contains('f-card')){
		featuredCards.forEach((card, i) => {
			if (target === card) {
				makeCardsInactive();
				makeCardActive(i);
			}
		})
	}
});



