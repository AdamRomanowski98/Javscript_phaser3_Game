<?php 


function outputHeader($title){   //function for website parameters and outputing header and clock
// I used "?v=<?php echo time();" in stylesheet due to css not saving on the site while using local server.
echo '
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8" />
    <title>' . $title .'</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="stylesheet" href="css/style.css">          
    <script type="text/javascript" src="javascript/timer.js"></script>
	<script>window.onload=Time;</script>
</head>       

<body> 
    <h1 class="logo"><a href="index.php">2D Adventure</a></h1>  
    <div id="clock"></div>
    <div style="clear:both;"></div>
';   
}

function outputNav($pageName){
    
echo '<div id="nav">';
echo '<div class="smalllogo">
     <img src="jpg/logo1.png" width="70" height="60" style="float:left;">
	 
     </div>';
echo '<ul class="menu">';

     //Array of pages to link to
     $linkNames = array("Home", "Register", "Play", "Ranking");// this is the pageName of HTML file
     $linkAddresses = array("index.php", "Register.php","play.php", "ranking.php"); // the link
     
     //Output navigation
     for($x = 0; $x < count($linkNames); $x++){ // goes through the links to find matching pageName
echo '<li><a ';      // print the anchor
     if($linkNames[$x] == $pageName){    // finds the match of pageName and link
echo 'class="selected" '; }
echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</li></a>';  // goes to the page
       } // end for loop   
echo '</ul>'; 
echo '</div>';
}

function outputFooter(){ //function to output footer 
echo '
     <div id="footer">
        <br />Adam Romanowski Mario style Game 2020 &copy 
     </div>
     
</body> 
</html>
';
    
}

?>





