//Responsive Side navigation
function sideNavigationToggle(){
	$('#side-navigation-toggle').on('click', function(event){
		event.preventDefault();
		//creating variables
		var sideNavigation = $('#side-navigation');
		var sideNavigationWidth = sideNavigation.width();
		var overlay = $('#overlay');
		var toggleButton = $('#side-navigation-toggle');

		//toggling
		sideNavigation.toggleClass('open');

		//animation
		if (sideNavigation.hasClass('open')) {
			sideNavigation.animate({left: "0px"});
			overlay.fadeIn();
			toggleButton.hide();
		} else {
			sideNavigation.animate({left: -sideNavigationWidth}, 400);
			overlay.fadeOut();
			toggleButton.delay(300).fadeIn(200);
		}

		overlay.on('click', function(){
			sideNavigation.animate({left: -sideNavigationWidth}, 400);
			sideNavigation.removeClass('open');
			overlay.fadeOut();
			toggleButton.delay(300).fadeIn(200);
		});

	});
}

//Initialize
(function(){
	sideNavigationToggle();
}());