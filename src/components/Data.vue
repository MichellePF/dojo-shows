<template>
    <div class="contenedor">
        <div class="wrap">
            <a><router-link to="/">Home</router-link></a>
        </div>
		<div class="contenedor_tarjeta">
			<a href="#">
				<figure id="tarjeta">
					<img src="@/assets/sabrina.jpg" class="frontal" alt="">
					<figcaption class="trasera">
						<h2 class="titulo">{{this.title}}</h2>
						<hr>
						<p>{{this.network}}</p>
                        <p>{{this.numSeasons}}</p>
                        <p>{{this.isCurrent}}</p>
                        <p><span v-for="(genre, i) in this.genres" :key="i">{{genre}} / </span></p>
					</figcaption>
				</figure>
			</a>
		</div>
    </div>
</template>

<script>

import { db } from '@/firebase';

export default {
    name: 'Data',

    data(){
        return {
            shows: [],
			title: "",
			network: "",
			numSeasons: "",
			isCurrent: "",
			genres: []  
        }
    },
    mounted(){
        db.collection("shows").doc(this.$route.params.id).get()
        .then(datos => {
            const show = datos.data();
            this.title = show.title;
            this.network = show.network;
            this.numSeasons = show.numberOfSeasons;
            this.isCurrent = show.isCurrent;
            this.genres = show.genres
            
        })
    }
}
</script>

<style scoped>
    * {
	margin:0;
	padding: 0;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

body {
	background: #F0F2F1;
	font-family: 'Open Sans', sans-serif;
}

a {
	text-decoration: none;
}

.contenedor {
	max-width: 1200px;
	margin:50px auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
}

.wrap {
    text-align: end;
    margin-bottom: 20px;
}

.wrap a {
    background: #0F362D;
    color: white;
    padding: 15px;
}
.contenedor_tarjeta {
	margin: 20px;
}

.contenedor_tarjeta a {
	display: inline-block;
}

.contenedor_tarjeta:hover figure {
	transform: perspective(600px) rotateY(180deg);
	-webkit-box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.25);
	-moz-box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.25);
	box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.25);
}

.contenedor_tarjeta figure img {
    object-fit: contain;
}
.contenedor_tarjeta:hover figure img {
	/* Si queremos podemos aplicar un efecto blur a nuestra imagen al girar */
	filter:blur(2px);
    
}

figure {
	width: 450px;
	height: 400px;
	margin:0;
	position: relative;
	transition: all ease .5s;
	transform-style: preserve-3d;
    
	/* Nota:
		Establecemos que la imagen tendra una rotacion de 0grados al inicio porque si no
		ponemos esta propiedad nos da un poco de problemas en algunos navegadores al pasar el cursor.
	*/
	transform: perspective(600px) rotateY(0deg);
}

figure .frontal,
figure .trasera {
	width: 100%;
	height: 100%;
	border-radius: 5px;
	transition: all ease .5s;
}

figure .frontal {
	display: block;
	background: #000;

	/* Podemos ocultar la imagen al da la vuelta si lo queremos */
	/*backface-visibility: hidden;*/
}

figure .trasera {
	position: absolute;
	top: 0;
	padding: 20px;
	color: #fff;
	transform: perspective(600px) rotateY(180deg);
	backface-visibility: hidden;
	overflow: auto;
}

.contenedor_tarjeta:nth-child(1) figure .trasera{
	background: rgba(223,234,241,0.7);
	background: -moz-linear-gradient(top, rgba(223,234,241,0.7) 0%, rgba(15,99,144,1) 100%);
	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(223,234,241,0.7)), color-stop(100%, rgba(15,99,144,1)));
	background: -webkit-linear-gradient(top, rgba(223,234,241,0.7) 0%, rgba(15,99,144,1) 100%);
	background: -o-linear-gradient(top, rgba(223,234,241,0.7) 0%, rgba(15,99,144,1) 100%);
	background: -ms-linear-gradient(top, rgba(223,234,241,0.7) 0%, rgba(15,99,144,1) 100%);
	background: linear-gradient(to bottom, rgba(223,234,241,0.7) 0%, rgba(15,99,144,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dfeaf1', endColorstr='#0f6390', GradientType=0 );
}

.contenedor_tarjeta:nth-child(2) figure .trasera{
	background: rgba(251,232,202,0.7);
	background: -moz-linear-gradient(top, rgba(251,232,202,0.7) 0%, rgba(25,44,72,1) 100%);
	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(251,232,202,0.7)), color-stop(100%, rgba(25,44,72,1)));
	background: -webkit-linear-gradient(top, rgba(251,232,202,0.7) 0%, rgba(25,44,72,1) 100%);
	background: -o-linear-gradient(top, rgba(251,232,202,0.7) 0%, rgba(25,44,72,1) 100%);
	background: -ms-linear-gradient(top, rgba(251,232,202,0.7) 0%, rgba(25,44,72,1) 100%);
	background: linear-gradient(to bottom, rgba(251,232,202,0.7) 0%, rgba(25,44,72,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fbe8ca', endColorstr='#192c48', GradientType=0 );
}

.contenedor_tarjeta:nth-child(3) figure .trasera{
	background: rgba(95,58,53,0.7);
	background: -moz-linear-gradient(top, rgba(95,58,53,0.7) 0%, rgba(221,32,47,1) 100%);
	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(95,58,53,0.7)), color-stop(100%, rgba(221,32,47,1)));
	background: -webkit-linear-gradient(top, rgba(95,58,53,0.7) 0%, rgba(221,32,47,1) 100%);
	background: -o-linear-gradient(top, rgba(95,58,53,0.7) 0%, rgba(221,32,47,1) 100%);
	background: -ms-linear-gradient(top, rgba(95,58,53,0.7) 0%, rgba(221,32,47,1) 100%);
	background: linear-gradient(to bottom, rgba(95,58,53,0.7) 0%, rgba(221,32,47,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5f3a35', endColorstr='#dd202f', GradientType=0 );
}

figure .trasera .titulo {
	color: #0F362D;
	font-weight: normal;
	margin-bottom: 20px;
	font-family: 'Roboto', sans-serif;
	font-size: 35px;
    font-weight: 600;
}

figure .trasera hr {
	height: 2px;
	background: #fff;
	border: none;
	margin-bottom: 20px;
	opacity: .5;
}

figure .trasera p {
	font-family: 'Open Sans', sans-serif;
	line-height: 22px;
	font-size: 25px;
    margin-bottom: 20px;
    
}

@media screen and (max-width: 992px) { 
	figure .trasera {
		/*position: relative;*/
		backface-visibility:visible;
		transform: perspective(600px) rotateY(0deg);
	}

	.contenedor_tarjeta:hover figure {
		transform: perspective(600px) rotateY(0deg);	
	}

}
</style>