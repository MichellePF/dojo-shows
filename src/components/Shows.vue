<template>
	<div id="main-container">
		<div class="wrap">
			<h3>TV SHOWS</h3>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Network</th>
						<th>Number of seasons</th>
						<th>Is current</th>
						<th>genres</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="show in shows" :key="show.id">
						<td>{{ show.title }}</td>
						<td>{{ show.network }}</td>
						<td>{{ show.numberOfSeasons }}</td>
						<td>{{ show.isCurrent }}</td>
						<td><span v-for="(genre, i) in show.genres" :key="i">{{ genre }}/ </span></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="wrap">
			<form action="">
				<p>Nombre:</p>
				<input type="text" class="field"> <br/>

				<p>Correo electrónico:</p>
				<input type="text" class="field"> <br/>

				<p>Asunto:</p>
				<input type="text" class="field"> <br/>

				<div class="wrap_check">
					<label for="vehicle1"> I have a bike</label><br>
					<input type="checkbox" class="check" name="vehicle1" value="Bike">
				
				</div>
				<div class="wrap_check">
					<label for="vehicle1"> I have a bike</label><br>
					<input type="checkbox" class="check" name="vehicle1" value="Bike">
				
				</div>

				<p class="center-content">
				<input type="submit" class="btn btn-green" value="Enviar Datos">
				</p>

			</form>
		</div>
		
	</div>
</template>

<script>
import { db } from '../firebase';  
export default {
	name: "Shows",
	data() {
		return {
			shows: []      
		}
	},
	firestore() {          
		return {
			shows: db.collection('shows')
		}
	}
}
</script>

<style scoped>
#main-container{
	margin: 200px;
	width: 100%;
	display: flex;
	align-items: center;
	
}

table{
	background-color: white;
	text-align: left;
	border-collapse: collapse;
	width: 100%;
}

th, td{
	padding: 20px;
}

thead{
	background-color: #246355;
	border-bottom: solid 5px #0F362D;
	color: white;
}

tr:nth-child(even){
	background-color: #ddd;
}

tr:hover td{
	background-color: #369681;
	color: white;
}

form{
	background-color: white;
	border-radius: 3px;
	color: #999;
	font-size: 0.8em;
	padding: 20px;
	margin: 0 auto;
	width: 100%;
}

input{
	border: 0;
	outline: none;
	width: 280px;
}


.field{
	border: solid 1px #ccc;
	padding: 10px;

			
}
.field:focus{
	border-color: #18A383;
}

.center-content{
	text-align: center;
}
.btn{
	border-radius: 3px;
	display: inline-block;
	padding: 20px 15px;
	text-decoration: none;
	text-shadow: 0 1px 0 rgba(255,255,255,0.3);
	box-shadow: 0 1px 1px rgba(0,0,0,0.3); 
}

.btn-green{
	color: white;
	background-color: #0F362D;
}
.btn-green:hover{
	background-color: #37B839;	
}
.btn-green:active{
	background-color: #29962A;
}
</style>