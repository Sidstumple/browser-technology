# Browser Technologies
Documentation of the course browser technology of the minor Web Development at the University of Applied Sciences in Amsterdam.

# Demo HTML Media `capture`
HTML Media Capture only works on mobile
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

# Demo `input type="color"`




