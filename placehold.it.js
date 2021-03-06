/*//////////////////////

Author: David Vogeleer
Site: http://www.individual11.com/placeholdit/
Description: The easiest way to add FPO images to your mockups at runtime.

Contributors:
Sidney Bofah

Version: 0.5

License: MIT, see README.txt

** Placehold.it is a service/website created by Brent Spore (http://twitter.com/#!/iboughtamac) and Russell Heimlich (http://twitter.com/#!/kingkool68) **
** Placekitten.com is a service created by Mark James (http://mark.james.name/) **
** Lorempixel.com is a service created by Holler-Moritz (http://lorempixel.com//) **
** http://flairpo.com/ is a service created by Fletcher Padgett (http://twitter.com/flatanimals)

*****CHANGE LOG*****
-V 0.5.1
*Added support for 'flairpo.com'
*Cleaned up a few things, including bad default settings

*****CHANGE LOG*****
-V 0.5
*Added support for callback functions
*Added support for 'Lorempixel.com'
*Removed support for 'Flickholdr.com'

*****CHANGE LOG*****
-V 0.4
*Added support for 'Flickholdr.com'

-V 0.3.5
•Had an error with some css in the html page, but decided to switch to .width and .height to get the info about the image dynamically

-V 0.3
•Added support for 'http://placekitten.com/' because KITTENS ARE AWESOME! ( see settings for details )
	•if the background color is '000' or '000000' then the kitten image returned will be black & white
	•format, text, textcolor are ignored if type is set to 'kitten', the others will still work
•Removed the conditional for adding text for Placehold.it calls, since the server ignores blank text anyway, so hopefully it will speed the loop up a little bit
•Changed Site reference in this file so it points directly to where the example file lives
•Added Description, just in case

-V 0.2
• Looks at img attributes (or css) to see if it should already have a specific width x height

*//////////////////////

(function( $ ){
  $.fn.placeholdit = function( options ) {

    var settings = {
    	format				:	'.gif',			//->supports '.jpg', '.jpeg', '.png', '.gif'
    	text				:	'',			//->default text is the dimensions
    	backgroundColor		:	'cccccc',		//->default color is 'cccccc'
    	textColor			:	'969696',	//->default color is '969696'
    	width				:	200,		//->required
    	height				:	'',			//->not required. If left blank, image returned will be square widthxwidth
    	overwriteSRC		:	false,		//->if the image already has src filled in, this decided whether or not to replace it
    	overrideProperties	:	false,		//->by default, if the img element has width/height set, we use that, but if this is set to true, we ignore it and use the settings
    	type				:	'default',	//->'default' uses Placehold.it to generate images, 'kitten' uses placekitten.com and 'flair' uses flairpo.com (if you pass '000' or '000000' as the background color, the images will be b&w)
    	tag					:	'',			//->default tag for use with lorempixel. Use this to narrow down content in returned image (e.g. 'work')			
    	callback			:	function(){}// execute a calLback
    },
    	src;//used later in code
    
    //make sure at least one image is there
    if(this.is('img')){    	
    	if ( options ) { 
    		$.extend( settings, options );
       	}
    	return this.each(function(i, el){
    		if(settings.overwriteSRC || !$(el).attr('src')){
       			var width = (settings.overrideProperties)? Number(settings.width):$(el).width() ||  settings.width;
    			var height = (settings.overrideProperties)? Number(settings.height) || width:$(el).height() || Number(settings.height) || width;
    			if(settings.type === 'kitten'){
    				src = 'http://placekitten.com/';
    				if(settings.backgroundColor === '000' || settings.backgroundColor === '000000') src += 'g/';
    				src += width + '/' + height;
    			}else if(settings.type === 'lorempixel'){
    				src = 'http://lorempixel.com/';
    				if(settings.backgroundColor === '000' || settings.backgroundColor === '000000') src += 'g/';
    				src += width + '/' + height;
    				if(settings.tag.length) src += '/' + settings.tag;
    			}else if(settings.type === 'flair'){
    				src = 'http://flairpo.com/';
    				if(settings.backgroundColor === '000' || settings.backgroundColor === '000000') src += 'g/';
    				src += width + '/' + height;
    			}else{
    				src = 'http://placehold.it/';
    				src += width + "x" + height;
    				src += "/" + settings.backgroundColor + "/" + settings.textColor;
    				src += settings.format;
    				src += "&text=" + settings.text;//the service ignores it if it's left blank, so this will speed up the loop slightly
    			}
    			$(el).attr('src', src);
				
    			$(el).load(function(){
		    		settings.callback.call(this);
		    	})
			
    		};
    	});
    }else{
    	//if no images are found, it just moves forward
    	return this;
    }
  };
})( jQuery );
