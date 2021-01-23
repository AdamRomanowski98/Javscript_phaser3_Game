<!-- Calling php functions ( Header and Nav ) -->
<?php
    
    include 'common.php';
    outputHeader("Register");
    outputNav("Register");
   
?> 

<script src="javascript/Register/register.js"></script>
<!-- Calling php functions ( Header and Nav ) -->    




<div id="container"> <!-- container used to center page content  -->
	
	  
            
	<p id="Result"></p>
	<p id="registerFailure"></p>
	
    <div id="register-box"> <!-- register box creation  -->
            
        <h1>Register</h1>
                
        <div class="textbox">
            <input type="email" placeholder="E-mail" id="EmailInput">
        </div>
                
        <div class="textbox">
            <input type="password" placeholder="Password" id="PasswordInput"> 
        </div>
                
        <div class="textbox">
            <input type="address" placeholder="Address" id="AddressInput">
        </div>
		
		<div class="textbox">
            <input type="phone" placeholder="Phone Number" id="PhoneInput">
        </div>
                
            <button onclick="storeUser()">Register</button>
		
		<a href="login.php"><p id="loginmsg">Arleady have an account? <br>Login here</p></a>
                
    </div>
	
	
         
</div> <!-- container used to center page content  -->
    
      
        <!-- Calling php function ( footer )  --> 
<?php
    
    outputFooter();
    
?>
        <!-- Calling php function ( footer )  -->    
        
        
    
    

    
    
    
