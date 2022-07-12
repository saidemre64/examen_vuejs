<template>
    <div >
        <div v-if="movie" class="movie" :type="movie" :class="{ series: !movie}">
            <h1>
                <!-- Schrijf hier code om de titel van het filmobject en het jaar dat de film of de serie werd uitgebracht: bv Spiderman (2021) -->
                {{ movie.titel}} + {{movie.year}}
            </h1>
            <div class="detail">
                <div class='flex'>
                    <div class="value">
                        <!-- Schrijf hier code om de plot van het filmobject te tonen -->
                        {{ movie.plot }}
                    </div>
                </div>
                <div class='flex'>
                    <div class="subTitle">Released:</div>
                    <div class="value">
                        <!-- Schrijf hier code om om de releasedatum van het filmobject te tonen -->
                        {{ movie.released }}
                    </div>
                </div>
                <div class='flex'>
                    <div class="subTitle">Genre:</div>
                    <div class="value">
                        <!-- Schrijf hier code om de genre(s) van het filmobject te tonen -->
                        {{ movie.genre }}
                    </div>
                </div>
                <div class='flex'>
                    <div class="subTitle">Director:</div>
                    <div class="value">
                        <!-- Schrijf hier code om de regisseur van het film object te tonen -->
                        {{ movie.director}}
                    </div>
                </div>
                <div class='flex'>
                    <div class="subTitle">Review:</div>
                    <div class="value">
                        <!-- Schrijf hier code om de computed property "stars" te tonen -->
                        {{ stars }}
                    </div>
                </div>
            </div>
            <button @click="addVote">Add a vote</button>
        </div>
        <div class="error" v-if="error">
            <!-- Schrijf hier code om een foutmelding te tonen, enkel en alleen wanneer er een fout optreedt. -->
            <!-- De foutmelding ziet er als volgt uit: "Something went wrong " + de error -->
            Something went wromg: {{ movie.error }}
        </div>
    </div>
</template>

<script>
//Vervolledig de script code
import MovieService from "@/services/MovieService.js"
    export default {
        name: "MovieDetail",
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                error: {},
                movie: {}
            }
        },

        created() {
            MovieService.getMovie(this.id)
            .then(response => this.movie = response.data)
            .catch(error => this.error = error);
        },
        computed: {
            stars() {
                if(this.movie.metascore > 70){
                    return "Top score"
                }
                return "Not so great"
            }
        },
        methods: {
            addVote() {
                MovieService.addVote(this.id)
                .then(response => alert(response.data))
                .catch(error => alert(error))

            }
        }
    }
</script>

<style scoped>
    .detail {
        width: 60%;
        text-align: left;
        padding: 20px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: white;
    }

    .error {
    color: red;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }

    .movie {
        border: 2px solid red;
    }

    .series {
        border: 2px solid green;
    }

    .subTitle {
        font-weight: bold;
    }
    
    .value {
        margin-left: 2px;
    }
</style>