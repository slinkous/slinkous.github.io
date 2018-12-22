
# Responsive Images Notes

## File Types

- Raster (data for grid of pixels)
	- png best quality but biggest size
- Vector (mathematically generated)
	- this has a much smaller file size
	- does not get fuzzy with resizing like jpg

## CSS sizing

- calc() can be used in to size image calculating the margin

	```
	img{
		width: calc(100%-2em);
	}
	```
- 100vh (100% viewport height) -- also vw
- 100vmin and 100 vh will resize so that the image is always cover one dimension
- vmax can be used to make sure the image always covers the viewport

## Background Images
- background-size: cover: resizes without skewing
- could come up with smaller crop for smaller sizes
- CSS image set function can choose which one with media queries
	- not always supported
- background-size: contain = large as possible while still being visible.

##  Srcset and sizes attributes

- **srcset**: use to choose different files based on pixel density
	```<img src = "photo1.jpg" srcset="largerphoto.jpg 2x" alt="photo">```
		chooses the larger photo when the pixel density is 2.
- use ```window.devicePixelRatio`` in console to get this info
- if browser does not support srcset, will just use the regular src image
- can also be used with width attribute
	```<img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500" alt="info">```

- **sizes** attribute: browswer does not know *display size*, so use this attr to denote if, e.g. it is only 50% of width, so that it calculates that with srcset
	- ```sizes="50vw"``` for image that only takes up half viewport
	- can add (max-width) to say what it will be with different media queries

## The Picture Element
- Example:
```html
<picture>
	<source srcset="kittens.webp" type="image/webp">
	<source srcset="kittens.jpeg" type="image/jpeg">
	<img src="kittens.jpg" alt="Two kittens">
</picture>
```
- img is mandatory fallback, literal element, esp for browsers that don't support ```picture```
- this example is in case browser doesn't support ```webp```

## Art Direction
- add ```media="(min-width: 600") attribute to source element to choose different files for different viewports

## Accessibility
- Use ``alt`` attributes that are descriptive for important images
- Leave decorative images without alt tags
- Use "ChromeVox" to test how a Screen Reader interacts with your page
- Use "Lynx" for text-only version of page
