
function countdown(){
	var now = new Date();
	var eventDate = new Date(2017, 11, 25);

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();

	var remTime = eventTime - currentTime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	if(h < 10){
		h = "0" + h;
	}
	if(m < 10){
		m = "0" + m;
	}
	if(s < 10){
		s = "0" + s;
	}

	document.getElementById("days").textContent = d;
	document.getElementById("days").innerText = d;

	document.getElementById("hours").textContent =h;
	document.getElementById("minutes").textContent =m;
	document.getElementById("seconds").textContent = s;

	setTimeout(countdown, 1000);

} 

countdown();

$(function(){
  $('#dropdown').hide();
});

$(function(){
    $('.list').show(function(){
      $(this).toggle('#dropdown');
    });
});




//30 - loop never ends, each 1s it is rerans
// line 9 chage to milliseconds to make it easter. 
// divide by 60 for m&s.. divide by 24 for days
