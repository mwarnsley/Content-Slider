function slidingFunctionality(){
	//set options
	var	speed = 500, //fading speed
		autoswitch = true, //auto slider option
		autoswitch_speed = 4000; //auto slider speed

	//add initial active class
	$(".slide").first().addClass("active");

	//hide all slides
	$(".slide").hide();

	//show the first slide
	$(".active").show();

	//next handler
	$("#next").on("click", nextSlide);

	//previous handler
	$("#prev").on("click", prevSlide);

	//auto switch handler
	if(autoswitch === true){
		setInterval(nextSlide, autoswitch_speed);
	}

	//functionality for the next slide
	function nextSlide(){
			$(".active").removeClass("active").addClass("prevActive");
			if($(".prevActive").is(":last-child")){
				$(".slide").first().addClass("active");
			}else{
				$(".prevActive").next().addClass("active");
			}
			$(".prevActive").removeClass("prevActive");
			$(".slide").fadeOut(speed);
			$(".active").fadeIn(speed);
	}

	//functionality for previous slide
	function prevSlide(){
			$(".active").removeClass("active").addClass("prevActive");
			if($(".prevActive").is(":first-child")){
				$(".slide").last().addClass("active");
			}else{
				$(".prevActive").prev().addClass("active");
			}
			$(".prevActive").removeClass("prevActive");
			$(".slide").fadeOut(speed);
			$(".active").fadeIn(speed);
	}

}

slidingFunctionality();


