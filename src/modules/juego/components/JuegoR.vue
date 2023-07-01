<template>
  <div v-if="!fin" class="juego">
    <h3>Puntaje: {{ puntaje }}</h3>
    <h3>Intentos: {{ intento }}</h3>
    <div class="container">
        <!-- no valio el arreglo -->
      <!-- <div class="grid" :v-for="algo in arreglo" key="algo.id">
            <img v-if="boton" :src="algo.img" alt="" />
            <img v-if="!boton" src="../img/imagen1.png" alt="" />
            <label for="" @click="contar()">{{ algo.nombre }}</label>
          </div> -->
          <div class="grid" >
            <img v-if="boton" :src="imagen1" alt="" />
            <img v-if="!boton" src="../img/imagen1.png" alt="" />
            <label for="" >{{nom1 }}</label>
            
          </div> 

          <div class="grid" >
            <img v-if="boton" :src="imagen2" alt="" />
            <img v-if="!boton" src="../img/imagen1.png" alt="" />
            <label for="" >{{nom2 }}</label>
            
          </div> 

          <div class="grid" >
            <img v-if="boton" :src="imagen3" alt="" />
            <img v-if="!boton" src="../img/imagen1.png" alt="" />
            <label for="" >{{nom3 }}</label>
            
          </div> 

         
          
    </div>
    <button @click="contar()" >JUGAR</button>
  </div>

  <div v-if="fin">
    <div v-if="puntaje >= 10"  class="azul">
      <h2 for="">Puntaje: {{ puntaje }}</h2>
      <h2>Felicidades has ganado un premio de $10.000,00</h2>
      <button @click="nuevoJuego()">Nuevo Juego</button>
    </div>
    <div v-if="puntaje < 10"  class="rojo">
      <h2 for="">Has utilizado tus 5 intentos</h2>
      <h2>El juego a terminado, intentalo nuevamente</h2>
      <button @click="nuevoJuego()">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import consumirAPIFachada from "../helpers/llamadaAPI";

export default {
  data() {
    return {
      puntaje: 0,
      intento: 0,
      arreglo: [],
      boton: false,
      fin: false,
      nom1: '',
      nom2: '',
      nom3: '',
      imagen1: '',
      imagen2: '',
      imagen3: '',
    };
  },

  mounted() {
    this.pokeAleatorio();
  },
  methods: {
    nuevoJuego() {
      this.puntaje = 0;
      this.intento = 0;
      this.boton = false;
      this.fin = false;
    },
    aleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    async pokeAleatorio() {
      return (this.arreglo = [this.llamar(), this.llamar(), this.llamar()]);
    },

    async llamar() {
      const a = await consumirAPIFachada();

      console.log(a);
    },

    contar() {
      const [
        { nombre: n1, img: i1 },
        { nombre: n2, img: i2 },
        { nombre: n3, img: i3 },
      ] = this.arreglo;

      this.nom1 = n1 
      this.nom2 = n2 
      this.nom3 = n3
      this.imagen1 = i1 
      this.imagen2 = i2 
      this.imagen2 = i3


      if (this.intento == 5) {
        this.fin = true;
      } else {
        if (n1 == n2 && n1 == n3) {
          this.puntaje += 5;
          this.intento += 1;
        } else if (n1 == n2 || n1 == n3) {
          this.puntaje += 2;
          this.intento += 1;
        } else {
          this.intento += 1;
        }
      }
    },
  },
};
</script>

<style scoped>
.azul {
  color: blue;
}

.rojo {
  color: red;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

button{
    width: 100px;
    height: 100px;
}

img {
  height: 200px;
}
</style>
