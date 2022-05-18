tutorial from https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa

A sprite image is simply a single image file (in .jpg or .png) which has multiple drawings within that single image. Such images are called sprite sheets.

The idea behind using a sprite image is to use one single image that contains all animations of a character instead of dealing with multiple server calls to multiple single files. Thus instead of storing each animation frame in separate files, and having to do multiple server calls to fetch each file to render the animation, a sprite sheet can instead store all the animation in a single image file that is downloaded once (just one server call) when the page is loaded. This provides less web latency since the entire file is available to the browser when the page first loads, leading to a faster and smoother animation.

