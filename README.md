# sepia-overlay
JavaScript script that creates an overlay to reduce eye strain

This script allows you to create an overlay on web browsers to help reduce eye strain. You can modify the "background-color", if you wish.

The main files are custom-overlay.js and custom-overlay-single-call.js. These are just the normal versions, with the first file defining the function itself and then calling it, and the second one creating it as a lambda and then running it. The value of the first one is that you can cleanly copy the function over to something and run it multiple times, or even modify it to accept parameters or something.

The third file simply adds "javascript: " in front, so you don't have to think about it at all and just save it as a bookmark URL to run on any page.
