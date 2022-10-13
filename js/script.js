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




