<!-- Calling php functions ( Header and Nav ) -->
<?php
    
    include 'common.php';
    outputHeader("Register");
    outputNav("Register");
   
?> 
<script src="javascript/Register/login.js"></script>
        
<div id="container">
		<div id="loginPara">
				<h1>Login</h1>
				<div class="textbox">
                <input type="email" placeholder="E-mail" id="emailInput"><br>
				</div>
				<div class="textbox">
                <input type="password" placeholder="Password" id="passwordInput"><br>
				</div>	
                <button onclick="login()">Login</button>
				<a href="register.php"><p id="loginmsg"> Don't have an account? <br>Register here</p></a>
			
				
        </div>
        <p id="loginFailure"></p>
</div>        
      



<?php
    
    outputFooter();
    
?>
        <!-- Calling php function ( footer )  -->    
        