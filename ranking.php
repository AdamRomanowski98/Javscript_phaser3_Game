<!-- Calling php functions ( Header and Nav ) -->
<?php
    
    include 'common.php';
    outputHeader("Ranking");
    outputNav("Ranking");
    
?>  

<!-- Calling php functions ( Header and Nav ) -->    

<div id="container">   <!-- container used to center page content  -->
    
    <div id="ranking">  <!-- space for a future ranking  -->    
        <h1 id="rankingHeader">Top Scores</h1>
		<table id = "rankingTable">
			<thead id="head">
				<tr>
					<th>User</th>
					<th>Score</th>
				</tr>
			</thead>
			<tbody id="tbody">
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
		
    </div>
            
            
</div> <!-- container used to center page content  -->
<script src="javascript/Game/phaser.js"></script>
<script src="javascript/Game/GameOver.js"></script>
<script src="javascript/Register/ranking.js"></script>
    
    <div style="clear:both;"></div> <!-- used to display next element below  -->

        <!-- Calling php function ( footer )  -->  
<?php
    
    outputFooter();
    
?>
        <!-- Calling php function ( footer )  -->     
        
        
