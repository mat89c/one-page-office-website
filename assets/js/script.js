(function() {

	function setLocationHash(id) {	
		if(history.pushState) {
		    history.pushState(null, null, '#'+id);
		}
		else {
		    window.location.hash = '#'+id;
		}
	}

	function setActiveLink(scrollPosition, sections) {
		var l = sections.length;

		for (var i = 0; i < l; i += 1) {
			var id = sections[i].getAttribute('href').replace('#', '');
			var nextSectionId = sections[i + 1] ? sections[i + 1].getAttribute('href').replace('#', '') : null;
			var topOffset = document.getElementById(id).offsetTop - 150;
			var bottomOffset = '';

			if(nextSectionId) {
				bottomOffset = document.getElementById(nextSectionId).offsetTop - 150;
			} else {
				bottomOffset = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )
			}

			function removeActiveClass() {
				var allLinks = document.getElementsByClassName('header__link');
				var l = allLinks.length;
				for(var i = 0; i < l; i += 1) {
					allLinks[i].classList.remove('active');
				}
			}

			if(scrollPosition >= topOffset && scrollPosition < bottomOffset) {
				removeActiveClass();

				var activeLink = document.querySelector('[href="#'+ id +'"]');
				activeLink.classList.add('active');
				setLocationHash(id);
			}

			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				removeActiveClass();

				var allLinks = document.getElementsByClassName('header__link');
				allLinks[allLinks.length - 1].classList.add('active');
				setLocationHash(allLinks[allLinks.length - 1].getAttribute('href').replace('#', ''));
    		}
		}
	};

	var mobileNavBtn = document.getElementById('toggle');
	var mobileNav = document.querySelector('.header__nav');
	function toggleNav(event) {
		event.target.classList.toggle('active');
		mobileNav.classList.toggle('active');
	}

	function hideNav(event) {
		event.target.classList.remove('active');
		mobileNav.classList.remove('active');
	}

	var sections = document.getElementsByClassName('header__link');

	var scrollPosition = document.documentElement.scrollTop;
	setActiveLink(scrollPosition, sections);

	window.addEventListener('scroll', function () {
		var scrollPosition = document.documentElement.scrollTop;
		setActiveLink(scrollPosition, sections);

		var header = document.querySelector('.header');
		if(scrollPosition > 50) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	});

	var sectionsLength = sections.length
	for(var i = 0; i < sectionsLength; i += 1) {
		sections[i].addEventListener('click', function(event) {
			event.preventDefault();
			hideNav(event);
			var id = this.getAttribute('href').replace('#', '');
			var pos = document.getElementById(id).offsetTop - 80;

			window.scrollTo(0, pos);
		});
	}

	
	mobileNavBtn.addEventListener('click', function(event) {
		toggleNav(event);
	});

})();