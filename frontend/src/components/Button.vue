<template>
    <button class="form-button" :class="{ 'outline': outline, 'half': half }" :disabled="disabled">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: ["label", "disabled", "outline", "half"],
}
</script>