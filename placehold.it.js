/*//////////////////////

Author: David Vogeleer
Site: http://www.individual11.com

Version: 0.1

License: MIT, see README.txt

**Placehold.it is a service/website created by Brent Spore (http://twitter.com/#!/iboughtamac) and Russell Heimlich (http://twitter.com/#!/kingkool68)**

TODO:
-get width/height from css properties if available

*//////////////////////

(function( $ ){
  $.fn.placeholdit = function( options ) {

    var settings = {
    	'format'			:	'.gif',		//->supports '.jpg', '.jpeg', '.png', '.gif'
    	'text'				:	'',			//->default text is the dimensions
    	'backgroundColor'	:	'cccccc',	//->default color is 'cccccc'
    	'textColor'			:	'969696',	//->default color is '969696'
    	'width'				:	200,		//->required
    	'height'			:	'',			//->not required. If left blank, image returned will be square widthxwidth
    	'overwriteSRC'		:	false,		//->if the image already has src filled in, this decided whether or not to replace it
    	'overrideProperties':	false		//->by default, if the img element has width/height set, we use that, but if this is set to true, we ignore it and use the settings
    }
    
    console.log(this);
    
    //make sure at least one image is there
    if(this.is('img')){    	
    	if ( options ) { 
    		$.extend( settings, options );
       	}
    	
    	return this.each(function(i, el){
    		if(settings.overwriteSRC || !$(el).attr('src')){
	    		var src = 'http://placehold.it/';
    			var width = (settings.overrideProperties)? Number(settings.width):Number($(el).attr('width')) || settings.width;
    			var height = (settings.overrideProperties)? Number(settings.height) || width:Number($(el).attr('height')) || Number(settings.height) || width;
    			src += width + "x" + height;
    			src += "/" + settings.backgroundColor + "/" + settings.textColor;
    			src += settings.format;
    			if(settings.text.length) src += "&text=" + settings.text;
    			$(el).attr('src', src);
    		}
    	});
    }else{
    	return this;
    }
  };
})( jQuery );