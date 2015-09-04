// object literal
var dog = {
	breed: 'pug', //proper syntax!
	name: 'maggie',
	age: 7
}



// constructor
var Character = function(fullName, role){
	this.fullName = fullName;
	this.role = role;
}
// instances
var buffy = new Character('buffy summers', 'the vampire slayer');
var giles = new Character('rupert giles', 'watcher');
var willow = new Character('willow rosenberg', 'witch');
var xander = new Character('xander harris', 'friend');



//constructor with prototype
var Candy = function(brand, kind, yumFactor){
	this.brand = brand;
	this.kind = kind;
	this.yumFactor = yumFactor;
	this.great_candy = function(){
		return this.brand + ' is great candy!';
	}
}
//adding attribute and method via objects prototype
Candy.prototype.type = "chocolate";
Candy.prototype.announceType = function (){
	console.log('this candy is ' + this.type);
}

var my_candy = new Candy('KitKat', 'chocolate', 7);
var yr_candy = new Candy('Almond Joy', 'chocolate-almond', 10);
var our_candy = new Candy('AirHeads', 'chewy', 8);
//modifying the instance
our_candy.type = "sour and chewy!";


