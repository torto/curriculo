/*Starlight.js: A sparkling visual effects library
Created by Serj Babayan
View on Github at https://www.github.com/sergei1152/Starlight.js
Licence: MIT
*/

//TODO Fix resizing issues
//TODO 1: ADD SVG support
//TODO 2: FIX the keep_list true and rotation false instant expand glitch

//put your custom configuration settings here
var user_configuration={
	shape:"square", //could be "circle" or "square"
	initial_size:"12px", //initial size of the stars
	final_size:"64px", //final size of the stars after expansion
	expand_speed:"1s", //how fast the stars get bigger, in milliseconds
	fade_delay:"0.5s", //how long until the star fades out
	fade_duration:"0.5s", //how long the star fades for
	colors:["hsla(62, 50%,50%, 0.5)", "rgba(255,255,255,0.5)","hsla(180, 72%, 52%, 0.5)"], //The variety of colors of the stars. Can be any CSS complient color (eg. HEX, rgba, hsl)
	frequency:100, //how often a new wave of stars pop-out (in milliseconds. Bigger==longer)
	density: 1,//how many stars pop out per wave
	keep_lit: false, //whether the stars disappear after they are created
	rotation: true, //whether the stars rotate through out their expansion
	coverage:1, //how much of the element's area the stars will show up in (0-1)
	target_class:'.starlight', //the elements the script will target based on the class name
	custom_svg:"" //if you want to use a custom svg with a shape of a star instead (not supported yet)
};

//this is if you want to really customize how the stars appear
var advanced_configuration={
	expand_transition_timing: "linear", //could be ease, ease-in, ease-out, etc
	expand_delay: "0s",  //how long until the star starts to expand
	rotation_transition_timing: "linear",  //could be ease, ease-in, ease-out, etc
	rotation_angle: "360deg", //up to how much to rotate to
	rotation_duration: "1s", //how long the rotation will take place
	rotation_delay: "0s", //how long until rotation starts
  	fade_transition_timing:"linear", //could be ease, ease-in, ease-out, etc
  	z_index:0 //the stars are absolutely positioned, so you can give them a z-index of whatever you wish
};

//the star object with its position
function Star(width,height){
	//the offsets are required so that when a user specifies a coverage, the coverage is based around the center of the div, and not the top left
	leftOffset=Math.round((width-width*user_configuration.coverage)/2);
	topOffset=(height-Math.round(height*user_configuration.coverage))/2;
	this.xposition=Math.floor(Math.random()*width*user_configuration.coverage)+leftOffset;
	this.yposition=Math.floor(Math.random()*height*user_configuration.coverage)+topOffset;
}

//the star CSS properties
Star.prototype.create=function(parent_element,id){
	//The container is there so that when the stars expand they exapand around the center
	var star=$('<div></div>');
	var star_container=$('<div id=\"starlight-star'+id+'\"></div>');
	// star_container.attr("id","star"+id);
	star_container.append(star);

	//so the star stays centered as its container expands
	star.css({
		position: "absolute",
    	top: "-50%",
    	left: "-50%",
    	width:"100%",
    	height:"100%"
	});

	//the initial CSS properties of the star, including color, position, and size
	star_container.css({
		width:user_configuration.initial_size,
		height:user_configuration.initial_size,
		position:'absolute',
		top:this.yposition,
		left:this.xposition,
		"z-index": advanced_configuration.z_index
	});

	//sets transition css properties of the star
	setTimeout(function(){
		star_container.css({ //size expand properties
			transition: "height "+user_configuration.expand_speed+" "+advanced_configuration.expand_transition_timing+" "+advanced_configuration.expand_delay+","+
						"width "+user_configuration.expand_speed+" "+advanced_configuration.expand_transition_timing+" "+advanced_configuration.expand_delay,
			width:user_configuration.final_size,
			height:user_configuration.final_size
		});

    //because transition properties override each other, have to create a variable for transition and append transitions on to it
    if(user_configuration.rotation){ //rotation properties
      star.css({
        transform: "rotate("+advanced_configuration.rotation_angle+")"
      });
      var transition=advanced_configuration.rotation_duration+" "+advanced_configuration.rotation_transition_timing+" "+advanced_configuration.rotation_delay;
    }

    if(!user_configuration.keep_lit) {//fading properties
      star.css({
        opacity: 0
        });
      if(transition){
        transition+=",opacity " + user_configuration.fade_duration + " " + advanced_configuration.fade_transition_timing + " " + user_configuration.fade_delay;
      }
      else {
        var transition="opacity " + user_configuration.fade_duration + " " + advanced_configuration.fade_transition_timing + " " + user_configuration.fade_delay;
      }

      	//removes the element from the dom after it fades out
		setTimeout(function(){
			$("#starlight-star"+id).remove();
		},css_time_to_milliseconds(user_configuration.fade_duration)+css_time_to_milliseconds(user_configuration.fade_delay));
      }

    if(transition) {
      star.css({
        transition: transition
      });
    }

		},10);
	
	//sets shape and color of the star
	if(user_configuration.shape==='circle'){
		star.css('border-radius','50%');
	}
	if(user_configuration.custom_svg==='' || user_configuration.custom_svg===false){
		star.css('background-color',user_configuration.colors[Math.floor(Math.random()*user_configuration.colors.length)]); //picks one of the colors
	}
	parent_element.append(star_container);
};


//Handles the actual creation of the stars based on the frequency and density as defined by the user
$(document).ready(function(){
	var id=0;
	//traverses all of the elements with a class of 'starlight'
	$(user_configuration.target_class).each(function(index){
		var currentElement=$(this);
		var width=currentElement.width();
		var height=currentElement.height();
		setInterval(function(){ //creates the stars based on the frequency and desired density
			for(var i=0;i<user_configuration.density;i++){
				var newStar=new Star(width,height);
				newStar.create(currentElement,id);
				newStar=null; //just in case so the garbage collector clears this value up
				id++;
			}
		},user_configuration.frequency);
	});
});

//retrieved from https://gist.github.com/jakebellacera/9261266
function css_time_to_milliseconds(time_string) {
  var num = parseFloat(time_string, 10),
      unit = time_string.match(/m?s/),
      milliseconds;
 
  if (unit) {
    unit = unit[0];
  }
 
  switch (unit) {
    case "s": // seconds
      milliseconds = num * 1000;
      break;
    case "ms": // milliseconds
      milliseconds = num;
      break;
    default:
      milliseconds = 0;
      break;
  }
 
  return milliseconds;
}