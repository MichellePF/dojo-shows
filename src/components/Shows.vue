<template>
	<div id="main-container">
		<div class="wrap">
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Network</th>
						<th>Number of seasons</th>
						<th>Is current</th>
						<th>genres</th>
						<th>Actions</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="show in shows" :key="show.id">
						<td><router-link :to="{path: '/data/' + show.id}">{{ show.title }}</router-link></td>
						<td>{{ show.network }}</td>
						<td>{{ show.numberOfSeasons }}</td>
						<td>{{ show.isCurrent }}</td>
						<td>{{show.genres.join(' / ')}}</td>
						<td><router-link :to="{path: '/data/' + show.id + '/edit'}">Edit</router-link></td>
						<td><a href="#" @click.prevent="delete_show(show.id)">X</a></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="wrap">
			<form @submit="newShow">
				<p>Title</p>
				<input required type="text" class="field" v-model="new_title"> <br/>

				<p>Network</p>
				<input required type="text" class="field" v-model="new_network"> <br/>

				<p>Number of seasons</p>
				<input required type="text" class="field" v-model="new_numSeasons"> <br/>

				<select class="field current" v-model="new_isCurrent" required>
					<option value>Is Current?</option>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>

				<p>Genres (separate by " , ")</p>
				<input required type="text" class="field" v-model="new_genres"> <br/>


				<p class="center-content">
				<input type="submit" class="btn btn-green" value="Send information">
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
			shows: [],
			new_title: "",
			new_network: "",
			new_numSeasons: "",
			new_isCurrent: "",
			new_genres: []      
		}
	},
	methods: {
		newShow(ev){
			ev.preventDefault();
			db.collection("shows").add({
				title: this.new_title,
				network: this.new_network,
				numberOfSeasons: parseInt(this.new_numSeasons),
				isCurrent: this.new_isCurrent == "true" ? true : false,
				genres: this.new_genres.split(", ")
			});
			this.new_title = "",
			this.new_network = "",
			this.new_numSeasons = "",
			this.new_isCurrent = "",
			this.new_genres = []
		},
		delete_show(id_show){
			const sure = confirm('¿Seguro de borrar el elemento?');
			if(!sure){return;}
			db.collection("shows").doc(id_show).delete();
		},
		
	},
	firestore() {          
		return {
			shows: db.collection('shows')
		}
	},
	
}
</script>

<style scoped>
#main-container{
	margin-top: 100px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

a {
	text-decoration: none;
}
table{
	background-color: white;
	text-align: center;
	border-collapse: collapse;
	width: 80%;
	margin: 30px;
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
	border: 3px solid  #18A383;
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

.current {
	margin-top: 15px;
	border: 0;
	outline: none;
	width: 300px;
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
	background-color:  #18A383;	
}
.btn-green:active{
	background-color: #29962A;
}
</style>