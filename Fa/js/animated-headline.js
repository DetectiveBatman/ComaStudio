var count = 2;
var i = 1;
function changeHeader(i){
	$("#top-headline-" + i).fadeOut('fast');
	$("#top-headline-" + i).fadeIn('fast');
}

setInterval(() => {
	changeHeader(i);
	i = (i + 1) % count;
}, 5000);
