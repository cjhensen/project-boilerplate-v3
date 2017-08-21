## Project Boilerplate V3 ##

Gulp Commands
-------------
***gulp*** the default command. Starts clean, server, watch, and runs less, html, and js
***server*** starts the server.js file, ignoring changes to the public js directory
***watch*** watches for changes and runs the corresponding tasks for less, html, js
***less*** minifies and concatenates less into a single main.css file in the public directory
***js*** concatenates js files into one app.js file in the public directory
***serve*** runs the server command and watch commands alone, for server testing (endpoints, etc.)
***clean*** flushes the build folder

Technologies
------------
**Dev Dependencies**

 - chai
 - chai-http
 - del
 - gulp
 - gulp-babili
 - gulp-concat
 - gulp-less
 - gulp-livereload
 - gulp-minify-css
 - gulp-newer
 - gulp-notify
 - gulp-nodemon
 - mocha
 - pump

**App Dependencies**

 - body-parser
 - express
 - uuid

