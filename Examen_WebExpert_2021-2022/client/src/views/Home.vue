<template>
  <div class="movies">
    <h1>Onze favoriete films en series</h1>
    <div class="container">

      <div class="flex">
        <!-- Schrijf hier code zodat voor elk filmobject het MovieCard component opgehaald wordt -->
        <MovieCard v-for="movie in movies" :key="movie.id"  />
      </div>

      <div class="error">
        <!-- Schrijf hier de code die ervoor zorgt dat er een foutmelding wordt getoond, enkel en alleen wanneer er een fout optreedt. -->
        <!-- De foutmelding ziet er als volgt uit: "Something went wrong " + de error -->
        <p v-if="error">Something went wrong: {{error}}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
//Vervolledig de script code
import MovieCard from "@/components/MovieCard.vue";
import MovieService from "@/services/MovieService.js"

  export default {
    name: "Home",
    component: MovieCard,
    data() {
      return {
        error: {},
        movies: []
      }
    },

    created() {
      MovieService.getMovies()
      .then(response => this.movies = response.data)
      .catch(error => this.error = error)
    }

  }
</script>

<style scoped>
  .container {
    width: 75%;
  }

  .error {
    color: red;
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .movies {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
