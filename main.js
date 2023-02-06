const boxes = document.querySelectorAll('.box');

const config = {
	threshold: 0.5 };
	
const tl = new TimelineMax();

let observer = new IntersectionObserver(function (entries, self) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
		let overlap = '-=0.3';

		if (!tl.isActive()) {
			overlap = '+=0';
		}

		tl.to(entry.target, 0.5, { autoAlpha: 1 }, overlap);
		self.unobserve(entry.target);
		}
	});
	}, config);

	boxes.forEach(box => {
		observer.observe(box);
	});