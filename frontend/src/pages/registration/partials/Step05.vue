<template>
    <div>
        Revise suas informações
        {{ registrationType }}

        <template v-if="registrationType === 'PF'">
            Pessoa fisica
        </template>
        <template v-else>
            Pessoa juju
        </template>
    </div>
</template>

<script>
export default {
    props: ['registrationType']
}
</script>

<style lang="scss" scoped></style>