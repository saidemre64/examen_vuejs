<template>
    <div>
        <!-- Voeg de ontbrekende Vue directives toe aan de input velden, zodat het formulier Vue compatibel is. -->
        <form class="contact-form" @submit.prevent="onSubmit">
            <h2>Contactform</h2>
            <div class='flex'>
                <div>
                    <label for="firstname">Firstname</label>
                    <input type="text" id="firstname" v-model="firstname">
                </div>
                <div>
                    <label for="lastname">Lastname</label>
                    <input type="text" id="lastname" v-model="lastname">
                </div>
            </div>
            
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email">

            <label for="message">Message:</label>
            <textarea id="message" v-model="message"></textarea>

            <input type="submit" class="button" value="Submit">
        </form>
    </div>
</template>

<script>
//Vervolledig de script code
    export default {
        name: "ContactForm",
        data() {
            return {
                firstname: "",
                lastname: "",
                email: "",
                message: "",
            }
        },
        methods: {
            onSubmit() {
                let submission = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    message: this.message,
                }
                this.$emit('contactform-submitted', submission);

                this.firstname = '';
                this.lastname = '';
                this.email = '';
                this.message = '';

            
            }
        }
    }
</script>

<style scoped>
    .button {
        display: block;
        margin: 30px auto;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        width: 600px;
        padding: 20px;
        margin: 40px;
        border: 2px solid #d8d8d8;
        background-color: white;
        -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
        -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
        box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
    }

    .flex {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    input {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
    }

    label {
        font-size: 20px;
        margin-bottom: 5px;
    }
    
    textarea {
        width: 95%;
        height: 70px;
        padding: 10px;
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>