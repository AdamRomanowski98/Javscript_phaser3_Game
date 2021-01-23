window.onload = checkLogin;//Check to see if user is logged in already

function checkLogin(){
				
    if(sessionStorage.loggedInUsrEmail !== undefined){

		//Extract details of logged in user
		let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsrEmail]);
		
		//Say hello to logged in user
        document.getElementById("loginPara").innerHTML = usrObj.email + " logged in.";
					
		//creation of log out button
		let logoutButton = document.createElement("button");
		logoutButton.innerHTML = "Log out";
		
		let body = document.getElementsByTagName("loginPara")[0];
		loginPara.appendChild(logoutButton);
		
		//adding an event for a button
		logoutButton.addEventListener("click", function(){
			
			sessionStorage.clear(); //clearing session storage
			location.reload();	//reloading page 
			
    	});
	 }
}
   
let cookies = document.cookie;

function login(){
    //Get email 
    let email = document.getElementById("emailInput").value;
    
    //User does not have an account
    if(localStorage[email] === undefined){
        //Inform user that they do not have an account
        document.getElementById("loginFailure").innerHTML = "Email not recognized. Do you have an account?";
        return; //Do nothing else
    }
    else{//User has an account
        let usrObj = JSON.parse(localStorage[email]);//Convert to object
        let password = document.getElementById("passwordInput").value;
		
        if(password === usrObj.password){//Successful login
			
			document.getElementById("loginPara").innerHTML = usrObj.email + " logged in.";

			document.getElementById("loginFailure").innerHTML = "";//Clear any login failures

			sessionStorage.loggedInUsrEmail = usrObj.email;

			//creation of log out button
			let logoutButton = document.createElement("button");
			logoutButton.innerHTML = "Log out";

			let body = document.getElementsByTagName("loginPara")[0];
			loginPara.appendChild(logoutButton);

			//adding an event for a button
			logoutButton.addEventListener("click", function(){

				sessionStorage.clear(); //clearing session storage
				location.reload(); //reloading page 

        	});
		}
		
        else{
			//inform user if password is not correct
			document.getElementById("loginFailure").innerHTML = "Password not correct. Please try again.";
        }
        }
}

	
			
			
		



		