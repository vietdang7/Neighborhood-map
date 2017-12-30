# Neighborhood-map
Final project of part 4 - Udacity FullStack Nanodegree - Neighborhood Map of Helsinki 
![Web App Demo](https://github.com/vietdang7/Neighborhood-map/blob/master/img/demo.png)

## Code Example
Here are some lines of example code:
1. index.html:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Neighborhood Map Helsinki</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/main.css">
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark  justify-content-center">
     <p class="navbar-brand ">Neighborhood Map Helsinki</p>
    </nav>

```
2. app.js
```javascript
// Create a map variable
var map;

// Create a variable for Place
var place;

// Create variables for clientID & secret key of Foursquare
var clientID;
var clientSecret;

// Variable for Places list
var placeList = [
  {
    name: 'Helsinki Railway Station',
    lat: 60.170711, long: 24.941497
  },
  {
    name: 'Forum Shopping Center',
    lat: 60.168767, long: 24.938321
  },
  {
    name: 'Kamppi Shopping Center',
    lat: 60.169270, long: 24.933558
  },
  {
    name: 'Stockmann Shopping Center',
    lat: 60.168438, long: 24.942033
  },
  {
    name: 'Kluuvi Shopping Center',
    lat: 60.169709, long: 24.947752
  },
  {
    name: 'Sokos Shopping Center',
    lat: 60.170357, long: 24.938718
  },
  {
    name: 'Railway Station Square',
    lat: 60.171031, long: 24.943922
  },
  {
    name: 'Market Square',
    lat: 60.167626, long: 24.954039
  },
]

```

## Why I create this project?
This is one of final projects of Full Stack Udacity Nanodegree.  In this project, I have learnt to use MVVM pattern (KnockOutJS), setup connection to Google Maps API, FourSquare API.

## Functions of Neighborhood Map of Helsinki
At the beginning, the web app will show a list of 7 shopping centers and markets in Helsinki. You can filter out the list by typing search keyword in the search box. Whenever the place name is clicked, a info window will be showed up on the map.

## Getting Started
### Prerequisites
1. You need to have code editor like `Atom` to modify the code 
2. A mordern browser
3. You need a Foursquare account to have clienID and clienSecret key
4. You need to have Google Account to get Google Map API key 
5. A webserver on your local machine, here I am using [MAMP](https://www.mamp.info/en/)

### Installation
1. Clone this project (Using `https://github.com/vietdang7/Neighborhood-map.git` or through your GitDesktop application)
2. Install MAMP
3. Unzip the file, move this directory to your MAMP document root folder (htdocs folder, located under /Applications/MAMP)


## Testing
1.  Open `http://locahost:8888/Neighborhood-map-master` in your browser to test application

## Modification
You can add more places by edit `placeList` array.

## Built With
- KnockOutJS
- Google Maps API
- Foursquare API
- Javascript
- jQuery
- HTML
- CSS
- Bootstrap 4

## Contribution
If you want to make contribution for this project, feel free to `fork` this project and make `pull request`

## License
- This project is licensed under the MIT license
