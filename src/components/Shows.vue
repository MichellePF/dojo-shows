<template>
    <div id="main-container">
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
	margin: 150px auto;
	width: 800px;
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
</style>