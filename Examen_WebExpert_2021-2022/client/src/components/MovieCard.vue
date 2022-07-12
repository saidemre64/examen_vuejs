<template>
    <div class="movie-card">
        <!-- Schrijf hier de code om te linken naar een MovieDetail component -->
        <router-link class="movie-link" v-bind:to="{name: 'MovieDetails', params: { id: movie.id}}"></router-link>
            <div>
                <h4>
                    <!-- Schrijf hier code om de titel van een filmobject te tonen -->
                    {{ movie.title }}
                </h4>

                <div class="card-detail">

                    <div class='flex'>
                        <div class="subTitle">Genre:</div>
                        <div class="value">
                            <!-- Schrijf hier code om de genre(s) van een filmobject te tonen -->
                            {{ movie.genre }}
                        </div>
                    </div>

                    <div class='flex'>
                        <div class="subTitle">Age Level:</div>
                        <div class="value">
                            <!-- Schrijf hier code om de rated eigenschap van een filmobject te tonen -->
                            {{ movie.rated }}
                        </div>
                    </div>

                    <div class='flex'>
                        <div class="subTitle">Score:</div>
                        <div class="value">
                            <!-- Schrijf hier code om de imdbRating eigenschap van een filmobject te tonen -->
                            {{ movie.imdbRating}}
                        </div>
                    </div>

                </div>
            </div>
    </div>
</template>

<script>
//Vervolledig de script code
    export default {
        name: "MovieCard",
        props: {
            movie: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .card-detail {
        text-align: left;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
    }

    .movie-card {
        padding: 20px;
        width: 30%;
        cursor: pointer;
        border: 1px solid #39495c;
        margin-bottom: 18px;
    }

    .movie-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }

    .movie-link {
        color: #2c3e50;
        text-decoration: none;
    }

    .subTitle {
        font-weight: bold;
    }

    .value {
        margin-left: 2px;
    }
</style>