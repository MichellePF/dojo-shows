<template>
    <div class="wrap_container">
        <div class="wrap">
            <a><router-link to="/">Home</router-link></a>
        </div>
            <h3>Edit Show</h3>
			<form @submit.prevent="edit_show">
				<p>Title</p>
				<input required type="text" class="field" v-model="title"> <br/>

				<p>Network</p>
				<input required type="text" class="field" v-model="network"> <br/>

				<p>Number of seasons</p>
				<input required type="text" class="field" v-model="numberOfSeasons"> <br/>

				<select class="field current" v-model="isCurrent" required>
					<option value>Is Current?</option>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>

				<p>Genres (separate by " , ")</p>
				<input required type="text" class="field" v-model="genres"> <br/>


				<p class="center-content">
				<input type="submit" class="btn btn-green" value="Send information">
				</p>

			</form>
		</div>
</template>

<script>
import { db } from '../firebase';  

export default {
    name: 'Edit',
    data(){
        return {
            title: "",
			network: "",
			numberOfSeasons: "",
			isCurrent: "",
			genres: []      
        }
    },
    props: {
        id: String
    },
    mounted(){
        db.collection("shows").doc(this.$route.params.id).get()
            .then(datos => {
                const show = datos.data();
                this.title= show.title;
				this.network= show.network;
				this.numberOfSeasons= show.numberOfSeasons;
				this.isCurrent= show.isCurrent;
				this.genres= show.genres.join(', ');
            });
    },
    methods: {
        edit_show() {
            db.collection("shows").doc(this.$route.params.id).update({
                title: this.title,
                network: this.network,
                numberOfSeasons: parseInt(this.numberOfSeasons),
                isCurrent: this.isCurrent,
                genres: this.genres.split(' / ')
      })
      .then(() => {
        this.$router.push('/');
      })
    }
    }
}
</script>

<style scoped>
.wrap {
    text-align: end;
    margin-bottom: 20px;
}

.wrap a {
    background: #0F362D;
    color: white;
    padding: 15px;
    text-decoration: none;
}
form{
	background-color: white;
	border: 3px solid  #18A383;
	color: #999;
	font-size: 0.8em;
	padding: 20px;
	margin: 0 auto;
	width: 50%;
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