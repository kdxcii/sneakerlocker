function loadOwnerInventory() {


	// need user ID

	const userData = {

	}

	$.ajax({
		type: 'GET',
		url: `/${ownerID}/inventory`,
		dataType: 'json',
		data: JSON.stringify(result),
		contentType: 'json/application'
	})
	.done(result => {
		// render owners inventory
	})


};

function addItem() {
	$.ajax({
		type: 'POST',
		url: `/${ownerID}/inventory/${itemID}/addShoe`,
		dataType: 'json',
		data: JSON.stringify(result),
		contentType: 'json/application'
	})
	.done(result => {
		// append item to inventory
	})
};

function editItem() {
	$.ajax({
		type: 'PUT',
		url: `/${ownerID}/inventory/${itemID}/editShoe`,
		dataType: 'json',
		data: JSON.stringify(result),
		contentType: 'json/application'
	})
	.done(result => {
		// edit item 
	})
};

function deleteItem() {
	$.ajax({
		type: 'DELETE',
		url: `/${ownerID}/inventory/${itemID}/deleteShoe`,
		dataType: 'json',
		data: JSON.stringify(result),
		contentType: 'json/application'
	})
	.done(result => {
		// delete item from inventory
	})

};



var MOCK_MYLOCKER_DATA = {
	"L_000001": [
		{
			"shoe_brand": "nike",
			"shoe_model": "presto",
			"primary_shoe_color": "red",
			"shoe_size": "11.5"
		},
		{
			"shoe_brand": "Jordan",
			"shoe_model": "4 Retro",
			"primary_shoe_color": "blue",
			"shoe_size": "11.5"
		},
		{
			"shoe_brand": "Adidas",
			"shoe_model": "Yeezy 500",
			"primary_shoe_color": "yellow",
			"shoe_size": "11.5"
		},
		{
			"shoe_brand": "Adidas",
			"shoe_model": "Ultraboost",
			"primary_shoe_color": "black",
			"shoe_size": "11.5"
		},
		{
			"shoe_brand": "nike",
			"shoe_model": "Kobe XII",
			"primary_shoe_color": "green",
			"shoe_size": "11.5"
		}
	]
};

function getUserLocker(callbackFn) {
	setTimeout(function(){ callbackFn(MOCK_MYLOCKER_DATA)}, 100);
}

function displayUserLocker(data){
	for(index in data.L_000001){
		$('body').append(
			'<p> Brand: ' + data.L_000001[index].shoe_brand + ' Model: ' + data.L_000001[index].shoe_model + ' Primary Color: ' + data.L_000001[index].primary_shoe_color + ' Size: ' + data.L_000001[index].shoe_size + '</p>',
			'<button> DELETE </button>'
		)
	}
}

function getAndDisplayUserLocker(){
	getUserLocker(displayUserLocker);
}

$(function(){
	getAndDisplayUserLocker();
})