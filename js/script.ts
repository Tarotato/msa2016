	function doIt() { 
	 var hashtag = (<HTMLInputElement>document.getElementById("hash")).value;
    //console.log("do it is " + hashtag);
	if(hashtag == ""){
		alert("Please enter a hashtag");
	}else{
		var output = $.ajax({
			url: 'https://tagdef.p.mashape.com/one.'+ hashtag +'.json',
			type: 'GET',
			data: {}, // Additional parameters here
			dataType: 'json',
			success: function(data) {
				
				//Change data.source to data.something , where something is whichever part of the object you want returned.
				//To see the whole object you can output it to your browser console using:
				//console.log(data);
				//$("#output").before('<p>Defnition is: </p><br>');
				document.getElementById("output").innerHTML = data.defs.def.text; 
				},
			error: function(err) { alert(err); },
			beforeSend: function(xhr) {
			xhr.setRequestHeader("X-Mashape-Authorization", "CashpxF8LsmshHOQd1kcByYvzs7xp1zWCMijsnEjStLeAxWsvE"); // Enter here your Mashape key
			}
		});	
	}
	}
