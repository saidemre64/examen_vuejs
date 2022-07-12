<template>
  <div >
    <h1>Contactpagina</h1>
    <div class="flex-center">
        <!-- Schrijf hier code om het ContactForm component in te laden. Wanneer het formulier gesubmit wordt, 
        spreek je de "sendMessage" methode aan -->
        <ContactForm v-on:contactform-submitted="sendMessage"/>
    </div>
    <div>
        <!-- Laad hier het FormSubmission component in en geef het submission object door. -->
        <FormSubmission v-if="submitted" :submission="submission"/>
    </div>
  </div>
</template>

<script>
//Vervolledig de script code
import ContactForm from "@/components/ContactForm.vue";
//import FormSubmission from "@/components/Formsubmission.vue";

  export default {
    name: "Contact",
    data() {
      return {
        submitted: null,
        submission: {}
      }
    },
    methods: {
      sendMessage() {

        ContactForm.onSubmit()
        .then(response => this.submission = response.submission);
        this.submitted = true;
        alert("Bericht verzonden")
      }
    }
  }
</script>

<style scoped>
    .flex-center {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>