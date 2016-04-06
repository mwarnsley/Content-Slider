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

	$("#next").on("click", function(){
		$(".active").removeClass("active").addClass("prevActive");
		if($(".prevActive").is(":last-child")){
			$(".slide").first().addClass("active");
		}else{
			$(".prevActive").next().addClass("active");
		}
		$(".prevActive").removeClass("prevActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	});

}

slidingFunctionality();