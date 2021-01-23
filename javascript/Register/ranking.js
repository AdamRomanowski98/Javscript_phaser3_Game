window.onload=ranking;


// function to display ranking
function ranking(){		

	let usrObjectarr = [];
	//creating temporary object to store sorted highest scores
	let newHighest = {};
	
	//pushing usrObjectarr to local storage
	for(let i = 0; i<localStorage.length; i++){
		
		usrObjectarr.push(JSON.parse(localStorage[localStorage.key(i)]));
		
	}
	//sorting usrObjectarr
	for( let b = 0; b < usrObjectarr.length; b++){
		
		for (let j = 0; j<usrObjectarr.length - b - 1; j++){
			
			//checking for highest score 
			if(usrObjectarr[j].score < usrObjectarr[j+1].score){
				
			//saving new sorted scores in temporary array
			newHighest = usrObjectarr[j+1];
			usrObjectarr[j+1] = usrObjectarr[j];
			//chaning usrObjectarr into temporary array to mainain sorted scores
			usrObjectarr[j] = newHighest;
				
			}
	   }
	}

//displaying ranking
	for (b = 0; b<usrObjectarr.length; b++) {

		let table = document.getElementById('rankingTable');
		let tbody = table.getElementsByTagName('tbody')[0];
		let tr = tbody.getElementsByTagName('tr')[b];


		tr.getElementsByTagName('td')[0].innerHTML = usrObjectarr[b].email;
		tr.getElementsByTagName('td')[1].innerHTML = usrObjectarr[b].score;	
	
	}
}

