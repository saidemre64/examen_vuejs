<template>
    <div>
        <h2>Submission</h2>
        <!-- Schrijf hier code om de message van het submission object te tonen -->
        {{ submission.message }}
    </div>
</template>

<script>
//Vervolledig de script code
    export default {
        name: "FormSubmission",
        props: {
            submission: {
                type: Object
            }
        },

    }
</script>