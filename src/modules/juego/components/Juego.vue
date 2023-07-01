<template>
    <div class="container">
        <h1>Juego</h1>
        <h3>Puntaje: {{puntaje}}</h3>
        <h3>Intentos: {{intento}}</h3>
        <!-- <div  class="grid" :v-for="elem in this.arreglo" >
            <img v-if="boton" :src="elem.img" alt="">
            <img v-if="!boton" src="../img/imagen1.png" alt="">
            <label for="">{{elem.nombre}}</label>
        </div> -->


       

    </div>
</template>



<script>
import consumirAPIFachada from '../helpers/llamadaAPI'

    export default {
        data() {
            return {
                puntaje: 0,
                intento: 0,
                arreglo: [],
                boton: false
                
            }
        },

        mounted() {
            this.llamar()
        },
        methods: {
           

            aleatorio(min,max){
                return Math.floor(Math.random() * (max - min + 1) + min);
            },

            // async pokeAleatorio(){
            //     return this.arreglo = [llamar(), llamar(), llamar()]
            // },

            async llamar(){
                const a = await consumirAPIFachada()
                
                console.log(a);
            },

            contar(){

                const [
                    {nombre: n1, img: i1},
                    {nombre: n2, img: i2},
                    {nombre: n3, img: i3},

            ] = this.arreglo

            if (this.intentos == 10) {
                
            }else{
                
            if (n1 == n2 && n1 == n3) {
                this.puntaje += 5
                this.intentos += 1
            }else if(n1 == n2 || n1 == n3){
                this.puntaje += 2
                this.intentos += 1
            }else{
                this.intentos += 1
            }
                

            }

            }
        },
    }
</script>

<style scoped>

.container{
	display:grid;
	grid-template-columns :repeat(3,1fr);
}

.grid{
	display :flex;
	flex-direction: column;
align-items: center; 
text-align:center;

}




</style>