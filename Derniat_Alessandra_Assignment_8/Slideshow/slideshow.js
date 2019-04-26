//Creating an array to hold the images
var imageArray = ['images/backpack.jpg', 'images/boat.jpg', 'images/camaro.jpg', 'images/punk.jpg', 'images/race.jpg'];

//Public variables
var i = 0;
var speed = 2000;
var minSpeed = 3000;
var maxSpeed = 0;

//Our slideshow function
function createSlideshow() 
{
	// creates variable 'div' to load images into a div selected using 'getElementById'
	var div = document.getElementById('mySlideShowdiv');
	div.innerHTML = '<img src="' + imageArray[i] + '" />';

	//increment i by 1
	i++;

	// checks if i is greater than or equal to the length
	if(i >= imageArray.length)
	{
		// if true, resets value to 0
		i = 0;
		
	}
	//The default image change speed
	timer = setTimeout('createSlideshow()', speed);
	}

	//This function stops the timer from counting which stops the images from changing
	function stopShow()
	{
    clearTimeout(timer);
	}
	
	
	function playShow() 
	{
    timer = setTimeout('createSlideshow()', speed);
	}
	
	//This function gets a speed value from a user in the form of a private variable, then sets that value to public variable 'speed'
	function userSpeed()
	{
	alert("The current speed is: " + speed);
	var userSpeed = prompt("Please enter a new speed in increments of 100 between 100-2000. Keep in mind, the lower the number the faster the scroll");
	speed = userSpeed;
	alert("Speed has been changed to " + speed);
	}

	
	//Increment the speed up by decreasing the time
	function increase() 
	{
	if(speed -100 > maxSpeed)
    speed -= 100; 
	}
	
	//Increment the speed down by increasing the time
	function decrease()
	{
	if(speed +100 <= minSpeed)      
    speed += 100;
	}
	


	
