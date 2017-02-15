var dishes = [
	{name: 'Pannkakor/plättar med sylt & grädde', vegetarian: true, url: 'http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/'},
	{name: 'KÖTTBULLAR MED POTATISMOS, GRÄDDSÅS OCH STEKT LÖK', vegetarian: false, url: 'https://www.landleyskok.se/recept/hemlagade-kottbullar.html/'},
	{name: 'Thaigryta med kyckling', vegetarian: false, url: 'http://www.koket.se/mitt-kok/donal-skehan/thaigryta-med-kyckling/'},
	{name: 'Baconinlindad kycklingfile', vegetarian: false, url: 'https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2'},
	{name: 'Lasagne med köttfärssås', vegetarian: false, url: 'http://www.koket.se/lasagne-med-kottfarssas'},
	{name: 'Pastagratäng med rökt lax och spenat', vegetarian: true, url: 'www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/'},
	{name: 'Grönkålssoppa med chorizo', vegetarian: false, url: 'http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WCxTNcn3b9I'},
	{name: 'Majsplättar med avokadoröra', vegetarian: true, url: 'https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri'},
	{name: 'Pannkakor/plättar med sylt & grädde', vegetarian: true, url: 'http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/'},
	{name: 'Lax med nudelsallad', vegetarian: true, url: 'https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander'},
	{name: 'Lasagne med halloumi, spenat och pumpakärnor', vegetarian: true, url: 'www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/'},
	{name: 'Rödbetsrisotto med hyvlad halloumi och valnötter', vegetarian: true, url: 'www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/'},
	{name: 'Halstrad tonfisk med avokadohummus', vegetarian:true, url: 'www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/'},
	{name: 'Baconlindad köttfärslimpa', vegetarian: false, url: 'http://mittkok.express,en.se/recept/baconlindad-kottfarslimpa/'},
	{name: 'Vegetarisk Chipotle Chilipizza', vegetarian: true, url: 'http://www.koket.se/vegetariska-chipotle-chilipizzor'},
	{name: 'Ugnssteks falukorv med rostade rotsaker', vegetarian: false, url: 'http://www.ica.se/recept/ugnsstekt-falukorv-med-rostade-rotfrukter-713615/'},
	{name: 'Korvstroganoff', vegetarian: false, url: 'http://www.ica.se/recept/korvstroganoff-med-ris-533512/'},
	{name: 'Biff teriyaki', vegetarian: false, url: 'http://www.arla.se/recept/biff-teriyaki'},
	{name: 'Morotsbiffar', vegetarian: true, url: 'http://www.tasteline.com/recept/morotsbiffar-med-dragon/'},
	{name: 'Coq Au Vin', vegetarian: false, url: 'http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html'}
];	


 
var dishButton = document.getElementById('btn').addEventListener('click', randomDish);

function randomDish() {
	var dish = dishes[Math.floor(Math.random() * dishes.length)];
	if (check.checked) {
		checkTypeOfDish(dish);
	} else {
		newDish(dish);  
	}
}

function checkTypeOfDish(dish) {
	if(dish.vegetarian) {
		newDish(dish);
	} else {
		randomDish();
	}
}

function newDish(dish){
	var currentDish = document.getElementById('dishDiv');
	text = document.createTextNode(dish.name);
	a = document.createElement('a');
	a.title = dish;
	a.href = dish.url;
	a.appendChild(text);
	currentDish.appendChild(a);

	if(currentDish.childNodes.length > 1) {
		currentDish.removeChild(currentDish.childNodes[0]);
	}
}


//Räknare för vanliga maträtter och vegetariska
var vegDishes = 0;
var nonVegetarian = 0;
for (var i = 0; i < dishes.length; i++){
	if (dishes[i].vegetarian){
		vegDishes++;
	} else {
		nonVegetarian++;
	}
}





