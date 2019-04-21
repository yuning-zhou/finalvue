<!-- parts adapted from https://github.com/bradtraversy/microposts_fullstack_vue-->
/* eslint-disable */

<template>
  <div class="hello">
    <h1>Movie Lists!</h1>
    <hr/>
    <div class='movies-container'>
        <!-- iterate through the movielist-->
        <div class='movie' v-for='(movie, index) in movies' v-bind:item='movie' v-bind:index='index' v-bind:key='movie.name'>
            <p class='text'>Name: {{movie.name}}<br/>
            Director: {{movie.director}}<br/>
             Rating: {{movie.rating}}
            </p>
        </div>
    </div>
    <button id="movieButton" @click="created">See Movies</button>
    <br/>
    <div class='add-a-movie'>
      <input type="text" id='newMovieName' v-model='name' placeholder="Avengers">
      <input type="text" id='newMovieDirector' v-model='director' placeholder="Russel Brothers">
      <input type="number" id='newMovieRating' v-model='rating' placeholder=5>
      <button id="add" @click="add">Add this movie</button>
    </div>
  </div>
</template>

<script>
import movieLists from '../services/movieLists'
export default {
  name: 'movie',
  data () {
    return {
      movies: [],
      error: '',
      name: '',
      director: '',
      rating: 0
    }
  },
  methods: {
    async created () {
      try {
        this.movies = await movieLists.getMovies()
      } catch (err) {
        this.error = err.message
      }
    },
    async add () {
      await movieLists.insertMovie(this.name, this.director, this.rating)
      this.movies = await movieLists.getMovies()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
