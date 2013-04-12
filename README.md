# Placeholdit JQuery Plugin

A jquery plugin for easily adding FPO images to your html.

## How to use it
Once you've included it in your html, calling on it is straight forward.

	$('img').placeholdit();

## Parameters
You can customise a lot of different things with the placeholdit plugin with the following parameters, just note not all services being used support each of the parameters.

* type (str) - which service you want to use for FPO images.
	* [placeholdit](http://placehold.it) (_default_)
	* [kitten](http://placekitten.com/)
	* [lorempixel](http://lorempixel.com/)
	* [flair](http://flairpo.com/)
* format (str) - what filetype of image you want returned.
	* __.gif__ ( _default_ )
	* __.jpg__, __.jpeg__
	* __.png__
* text (str) - the text to appear over the image.
* backgroundcolor (hex str) - the color of the background of the image coming in if it's a flat color. Also used if you want the image returned in black & white by passing _'000000'_. Default value is _'cccccc'_.
* textColor (hex str) - color of the text in the image. Default value is _'969696'_.
* width (num) - width of image. Default is 200 pixels.
* height (num) - height of the image. If left empty, defaults to same value as _width_.
* overwriteSRC (bool) - tells plugin to ignore the _src_ attribute of the image tag and overwirte with the FPO image. Default value is _false_.
* overrideProperties (bool) - by default, if the _img_ element has _width_ or _height_ set either as attributes or in css, then it will use those measurements. This can make it so those settings are overridden when requesting the FPO image. Default value is _false_.
* tag (str) - for services that support the ability to pull images with a certain theme, this allows you to set that theme. Default value is empty string.
* callback (function) - the function that will be called when plugin has completed.

## Use case
A simple use for the placeholdit plugin is replacing all broken images so you can spot them easily during devolopment. Simply use this code.

```javascript
var errorReplacement = {
			overwriteSRC: true,
			backgroundColor: 'ff0000',
			textColor: 'ffffff',
			text: '! no img found !'
		}
		
$('img').error(function(){
	$(this).placeholdit(errorReplacement);
});
```

### More Info
To see it in action, [click here](http://individual11.com/placeholdit/).

###License

MIT [http://rem.mit-license.org](http://rem.mit-license.org)