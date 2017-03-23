# Browser Technologies
Documentation of the course browser technology of the minor Web Development at the University of Applied Sciences in Amsterdam.

# Demo HTML Media `capture`
HTML Media Capture only works on mobile browsers for Android & iOS, it opens the camera, or uses the microphone
> HTML Media Capture works in conjunction with the accept attribute which can take several values, among them:
> * `accept="audio/*"`
> * `accept="video/*"`
> * `accept="image/*"`

> A user clicking on an input field whose accept attribute value has been set to `video/*` for example will only be able to select (or capture) a video file.

> [...]The definition of a video file also differs at the browser level with Safari 10 on macOS graying out .mp4 files while Chrome on macOS allowed both .mp4 and .mov files.<br>
By [addpipe.com](https://addpipe.com/blog/correct-syntax-html-media-capture/)

The `capture` attribute is used to indicate the use of a user's camera and/or microphone is preferred.
According to the W3C Candidate Recommendation `capture` is a boolean attribute, the correct syntax is this: 

```
<input type="file" name="video" accept="video/*" capture>
```
and
```
<input type="file" name="video" accept="video/*" capture="capture">
```
It has a good automatic fallback, when it's opened in a not-mobile browser the input just opens a file picker.
![can i use color](/screenshots/ciu_capture.png)

# Demo `input type="color"`
`<input type="color">` is an HTML tag which, when clicked, opens a color picker. In some browsers like Safari v10 this is not yet supported. The tag will be automatically changed to: `<input type="text">` which can make it unclear for users what to do. A lot of attributes aren't useable when specifying as a `color` type, but value is. By adding a clear label and good example value the user will still be able to know what to do. The value also gives the color picker a standard to start from.


![chrome](/screenshots/chrome.png) ![safari](/screenshots/safari.png)
![can i use color](/screenshots/ciu_color.png)

# Demo `clip-path: url()`
`clip-path: url()` is a CSS property to clip images in certain shapes, using external `url()`'s is not completely supported in all browsers.
The fallback I used for circle clippings was border-radius, I put this above the `clip-path` so it's only used if the browser doesn't know the `url()` property but not when it does know `clip-path`.
```
.clip {
  border-radius: 100vw;
  clip-path: url(round.svg#svg);
}
```
![can i use clip-path](/screenshots/ciu_clip.png)

# Demo
