# Minneapolis Mayoral Candidates 2013

A simple view on the 2013 Minneapolis mayoral candidates.

## Data

Data is collected or created by MinnPost staff and stored in a Google Spreadsheet.

## Build

1. Install ```node```
1. Install [grunt command line](http://gruntjs.com/) globally: ```npm install -g grunt-cli```
2. Install dependencies: ```npm install```
3. Run: ```grunt```

The build compiles the javascript files, including the templates and data sources, and minifies.  It also compile the CSS and relevant images.  The data is source is also downloaded from Google Spreadsheets.

## Deploy

1. Define AWS keys to upload S3: ```export AWS_ACCESS_KEY_ID=XXXXXXX && export AWS_SECRET_ACCESS_KEY=XXXXXXX```
2. To push build to S3: ```grunt mp-deploy```

## Application

* ```index-src.html``` uses the local JS and CSS directly.
* ```index.html``` uses the deployed files on S3 and would should be embedded into MinnPost.