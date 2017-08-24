'use strict';

function Product(name, id, path) {
  this.name = name;
  this.id = id;
  this.path = path;
  this.clicks = 0;
  this.shown = 0;
}
var bag = new Product('Bag', 'bag', 'img/bag.jpg');
var banana = new Product('Banana Slicer', 'banana', 'img/banana.jpg');
var bathroom = new Product('Bathroom appliance','bathroom', 'img/bathroom.jpg');
var boots = new Product('Boots','boots', 'img/boots.jpg');
var breakfast = new Product('All-in-1 Breakfast','breakfast', 'img/breakfast.jpg');
var bubblegum = new Product('Meatball bubblegum', 'bubblegum', 'img/bubblegum.jpg');
var chair = new Product('Red chair', 'chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulhu', 'cthulhu', 'img/cthulhu.jpg');
var dog-duck = new Product('Dog duckbill', 'dog-duck', 'img/dog-duck.jpg');
var dragon = new Product('Dragon meat', 'dragon', 'img/dragon.jpg');
var pen = new Product('Utensil pen caps', 'pen', 'img/pen.jpg');
var pet-sweep = new Product('Pet sweeper shoes','pet-sweep', 'img/pet-sweep.jpg');
var scissors = new Product('Pizza scissors','scissors', 'img/scissors.jpg');
var shark = new Product('Shark sleeping bag', 'shark', 'img/shark.jpg');
var sweep = new Product('Baby sweeper pajamas', 'sweep', 'img/sweep.png');
var tauntaun = new Product('Tauntaun sleeping bag', 'tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product('Unicorn meat', 'unicorn', 'img/unicorn.jpg');
var usb = new Product('Octopus usb drive', 'usb', 'img/usb.gif');
var water-can = new Product('Artistic watering can', 'water-can', 'img/water-can.jpg');
var wine-glass = new Product('Wine glass', 'wine-glass', 'img/wine-glass.jpg');

var products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog-duck, dragon, pen, pet-sweep, scissors, shark, sweep, tauntaun, unicorn, usb, water-can, wineglass];

//for every item in the orderedProducts array do this process:
for (var i = 0; i < orderedProducts.length; i++){
//create div to hold ordered product info and add to body
  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  body.appendChild(div);
//create img element for product image
  var image = document.createElement('img');
  image.setAttribute('src', orderedProducts[i].path);
}
