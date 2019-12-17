var count = $('.top-animation b').length;
var i = 1;
function changeHeader(i){
	$(`.top-animation b:nth-child(${i})`).fadeOut('fast', () => {
		i = (i + 1) % count == 0 ? count : (i + 1) % count;
		$(`.top-animation b:nth-child(${i})`).fadeIn('fast');
	});
	return i;
}

setInterval(() => {
	i = changeHeader(i);
}, 1000);
