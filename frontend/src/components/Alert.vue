<template>
    <div v-if="display.enable" :class="display.error ? 'form-error' : 'form-sucesso'">
        {{ display.message }}
    </div>
</template>

<script>
export default {
    props: {
        display: {
            type: Object,
            required: true
        },
    },
}
</script>
