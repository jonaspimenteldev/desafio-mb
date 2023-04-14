<template>
    <InputText name="email" label="Sua Senha" v-model="dados.password" :error="error.password" />
    <GroupButton>
        <Button label="Voltar" :outline="true" :half="true" @click.prevent="back" />
        <Button label="Continue" :half="true" @click.prevent="next" />
    </GroupButton>
</template>
  
<script>
import InputText from '../../../components/InputText.vue'
import Button from '../../../components/Button.vue'
import GroupButton from '../../../components/GroupButton.vue'



export default {
    components: {
        InputText,
        GroupButton,
        Button,
    },
    props: ['dados'],
    watch: {
        'dados.password'() {
            this.error.password = ''
        }
    },
    data() {
        return {
            step: 4,
            error: {
                password: '',
            },
        }
    },
    emits: ['next', 'back', 'dados'],
    methods: {
        next() {
            if (!this.dados.password) {
                this.error.password = 'Informe uma senha'
                return
            }

            this.$emit('next', this.dados)
        },

        back() {
            this.$emit('back')
        }
    }
}
</script>
  