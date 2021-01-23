<!-- Calling php functions ( Header and Nav ) -->
<?php
    
    include 'common.php';  
    outputHeader("Home");   
    outputNav("Home");

?>    
<!-- Calling php functions ( Header and Nav ) -->   

<div id="container">  <!-- container used to center page content  -->
 
    <div id="introduction">  <!-- Short introduction about the author and the game -->
        <h1>It's me - MARIO </h1>
        <p> Join the world of 2D platformer games and compete with your friends! Collect coins to earn 	   the points and climb in the ranking. </p>
		<p>	However, watch out for dangerous opponents who are trying to prevent you from winning first 	place.</p>
    </div>  <!-- Short introduction about the author and the game -->
    
    <div id="screenshots"> <!-- class used to post the pictures once game is finished -->
                    
        <div class="screenshot1"><img src="jpg/screen1.png" width="245" height="240"></div>
        <div class="screenshot2"><img src="jpg/screen3.png" width="245" height="240"></div>
        <div style="clear:both;"></div>  <!-- used to display next element below  -->
        <div class="screenshot3"><img src="jpg/screen2.png" width="245" height="240"></div>
        <div class="screenshot4"><img src="jpg/screen4.png" width="245" height="240"></div>

    </div>  <!-- class used to post the pictures once game is finished -->
                
        <div style="clear: both;"></div> <!-- used to show next element below  -->
   
</div>
    
        <!-- Calling php function ( footer )  -->
<?php 
    outputFooter();  
?>
        <!-- Calling php function ( footer )  -->   
        
        
    
    

    
    
    
