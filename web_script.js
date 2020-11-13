$(document).ready(function (){
	$("#first_button").click(function (){
		$('html, body').animate({
			scrollTop: $("#edu_and_xp").offset().top
		}, 1500);
	});
});

$(document).ready(function (){
	$("#skills_button").click(function (){
		$('html, body').animate({
			scrollTop: $("#skills").offset().top
		}, 1500);
	});
});

$(document).ready(function (){
	$("#contact_button").click(function (){
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 2000);
	});
});

$(document).ready(function (){
	$("#gallery_button").click(function (){
		$('html, body').animate({
			scrollTop: $("#gallery").offset().top
		}, 2000);
	});
});

function drop_func(){
	document.getElementById("myDropdown").classList.toggle("show");
	var arrow = document.getElementById("arrow"); 
	if(arrow.innerHTML === "Language \u25BC"){
		arrow.innerHTML = "Language &#9650";
	}else if(arrow.innerHTML === "言語 \u25BC"){
		arrow.innerHTML = "言語 &#9650";
	}else if(arrow.innerHTML === "言語 \u25B2"){
		arrow.innerHTML = "言語 &#9660";
	}else{
		arrow.innerHTML = "Language &#9660";
	}
}

window.onclick = function(event){
	if(!event.target.matches('.dropbtn')){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for(i=0;i<dropdowns.length;i++){
			var openDropdown = dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}

		var arrow = document.getElementById("arrow");
		if(arrow.innerHTML === "Language \u25B2"){
			arrow.innerHTML = "Language &#9660";
		}else if(arrow.innerHTML === "言語 \u25B2"){
			arrow.innerHTML = "言語 &#9660";
		}
	}
}

function age_func(birth){
	var diff = Date.now() - birth.getTime();
	var age = new Date(diff);

	document.write(Math.abs(age.getUTCFullYear() - 1970));
}

function back_to_top(){
	var s = document.body.scrollTop || document.documentElement.scrollTop;
	if(s > 0){
		window.requestAnimationFrame(back_to_top);
		window.scrollTo(0,s-s/10);
	}
}

function copyright_func(){
	document.getElementById("foot").innerHTML = "&copy " + new Date().getFullYear() + " Bruno Suverza-Baek";
}