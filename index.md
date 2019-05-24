---
layout: default
---
<h1 data-test="test" data-title="Hello World" data-subtitle="subtitle" class="title" id="home">Hello World</h1>

<div class="container">
	<div class="container__inside container--shadow">
		<article class="home">
			<div class="bg-fixed"></div>
			<h2 class="home__title">I am<br>Designer</h2>
			<p class="home__subtitle">I make wonderful websites</p>
			<p class="home__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac elit ante. Nam varius nisi a lacus aliquet, at ornare sem luctus. Etiam dui libero, lacinia a consectetur ullamcorper, consectetur quis purus. Vivamus dictum est a sodales ultricies.</p>

			<a class="button" href="#about-us">Read more</a>
		</article>

		<section id="about-us" class="about-us">
			<article class="about-us__info">
				<h3 class="about-us__title about-us__title--to-right">Creative and<br>professional</h3>

				<p class="about-us__text">Sed tincidunt lectus sem, nec vulputate odio dictum vulputate. Morbi aliquet mattis malesuada. Aenean ultricies volutpat sollicitudin. Morbi posuere vitae diam vel lacinia. Aenean et sollicitudin tellus. In eget tincidunt felis. Suspendisse efficitur consectetur placerat. Morbi lorem dolor, ullamcorper quis lorem ut, auctor aliquam massa. Nam nisi dolor, auctor vitae porttitor eget, gravida sit amet lacus. </p>

				<p class="about-us__text">Proin bibendum velit sit amet pulvinar pharetra. Suspendisse condimentum egestas facilisis. Aenean ac lacinia tortor, nec interdum lectus. Praesent dictum tempus egestas.</p>

				<a class="button" href="#">Read more</a>
			</article>

			<article class="about-us__images">
				<h3 class="about-us__title">Our team<br>&nbsp;</h3>

				<div class="about-us__person">
					<img class="about-us__person-img" src="{{ "/assets/images/p1.jpg" | prepend: site.baseurl }}" alt="Proin bibendum">
					<div class="about-us__person-info-wrapper">
						<p class="about-us__person-name">Name Surname</p>
						<p class="about-us__person-job">Manager</p>
						<p class="about-us__person-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>

				<div class="about-us__person">
					<img class="about-us__person-img" src="{{ "/assets/images/p2.jpg" | prepend: site.baseurl }}" alt="Proin bibendum">
					<div class="about-us__person-info-wrapper">
						<p class="about-us__person-name">Name Surname</p>
						<p class="about-us__person-job">Graphic Designer</p>
						<p class="about-us__person-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>

				<div class="about-us__person">
					<img class="about-us__person-img" src="{{ "/assets/images/p3.jpg" | prepend: site.baseurl }}" alt="Proin bibendum">
					<div class="about-us__person-info-wrapper">
						<p class="about-us__person-name">Name Surname</p>
						<p class="about-us__person-job">Web Design</p>
						<p class="about-us__person-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
			</article>
		</section>

		<article id="portfolio" class="portfolio">
			<h4 class="portfolio__title">Selected work</h4>
			<div class="portfolio__images">
				<img class="portfolio__image" src="{{ "/assets/images/img1.jpg" | prepend: site.baseurl }}" alt="Nam varius nisi">
				<img class="portfolio__image" src="{{ "/assets/images/img2.jpg" | prepend: site.baseurl }}" alt="Nam varius nisi">
				<img class="portfolio__image" src="{{ "/assets/images/img3.jpg" | prepend: site.baseurl }}" alt="Nam varius nisi">
				<img class="portfolio__image" src="{{ "/assets/images/img4.jpg" | prepend: site.baseurl }}" alt="Nam varius nisi">
			</div>
		</article>
	</div>
</div>

<div class="container container--last">
	<div class="container__inside">
		<div id="contact" class="contact">
			<h5 class="contact__title">Get in touch</h5>
			<form class="contact__form">
				<div class="contact__form-wrapper">
					<input class="contact__form-name" type="text" name="name" placeholder="Name" required aria-required="true">
					<input class="contact__form-email" type="email" name="email" placeholder="Email" required aria-required="true">
				</div>
				<textarea class="contact__form-msg" name="message" placeholder="Message"></textarea>
				
				<div class="contact__form-submit-wrapper">
					<input class="contact__form-submit" class="button" type="submit" value="Submit">
				</div>
			</form>	
		</div>
	</div>
</div>
