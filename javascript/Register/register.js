function storeUser(){
	
	
	
    //Build object that we are going to store
    let usrObject = {}; 
	
	//Validation of email and phone number
	let phoneformat1 = /^0[7]\d{9}$/;
	let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	let password = document.getElementById("password");
	let address = document.getElementById("address");
	
	
	//checking if user inputs matches validation format
	if((EmailInput.value.match(mailformat) && localStorage.getItem(EmailInput.value) == null) && PhoneInput.value.match(phoneformat1) && PasswordInput.value.length !== 0 && AddressInput.value.length !== 0)
		{	
			//adding user data to local storage 
			usrObject.email = document.getElementById("EmailInput").value;
			usrObject.password = document.getElementById("PasswordInput").value;
			usrObject.address = document.getElementById("AddressInput").value; 
			usrObject.phone = document.getElementById("PhoneInput").value;
			usrObject.score = 0;
		
	 		//Inform user of result
			document.getElementById("Result").style.color = "green";
            document.getElementById("Result").innerHTML = "<b>Registration successful.</b>"; 
	 
	 		//Store user
            localStorage[usrObject.email] = JSON.stringify(usrObject);
 		}
			
	//displaying errors
	else if(localStorage.getItem(EmailInput.value) !== null){
		
		document.getElementById("Result").innerHTML = "E-mail arleady exists.";
	}
	else if(!EmailInput.value.match(mailformat)){
		
		document.getElementById("Result").innerHTML = "Invalid E-mail address.";
	}
	else if(!PhoneInput.value.match(phoneformat1)){
		
		document.getElementById("Result").innerHTML = "Invalid phone number ";
	}
	else{
		
		document.getElementById("registerFailure").innerHTML = " Missing informations";
	}
            }//end of store user
			
