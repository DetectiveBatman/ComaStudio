var count = 2;
var i = 0;
function changeHeader(i){
	$("#top-headline-" + i).fadeOut('fast', () => {
		i = (i + 1) % count;
		$("#top-headline-" + i).fadeIn('fast');
	});
	return i;
}

setInterval(() => {
	i = changeHeader(i);
}, 3000);
