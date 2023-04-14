<template>
    <InputText name="name" label="Nome" v-model="dados.name" :error="error.name" />

    <InputText name="cnpj" label="CNPJ" mask="XX.XXX.XXX/XXXX-XX" v-model="dados.company.cnpj" :error="error.cnpj" />

    <InputText name="openingDate" type="date" label="Data de abertura" v-model="dados.company.openingDate"
        :error="error.openingDate" />

    <InputText name="phone" mask="(XX) X XXXX.XXXX" label="Telefone" v-model="dados.phone" :error="error.phone" />

    <GroupButton>
        <Button label="Voltar" :outline="true" :half="true" @click.prevent="back" />
        <Button label="Continue" :half="true" @click.prevent="next" />
    </GroupButton>
</template>
  
<script>
import { validateCnpj, validateMinimumSize, } from "../../../utils/validate";

import InputText from '../../../components/InputText.vue'
import InputRadio from '../../../components/InputRadio.vue'
import Button from '../../../components/Button.vue'
import GroupButton from '../../../components/GroupButton.vue'


export default {
    components: {
        InputText,
        InputRadio,
        GroupButton,
        Button,
    },
    props: ['dados'],
    watch: {
        'dados.name'() {
            this.error.name = ''
        },
        'dados.company.cnpj'() {
            this.error.cnpj = ''
        },
        'dados.company.openingDate'() {
            this.error.openingDate = ''
        },
        'dados.phone'() {
            this.error.phone = ''
        }
    },
    data() {
        return {
            error: {},
        }
    },
    emits: ['next', 'back', 'dados'],
    methods: {
        next() {
            if (!this.dados.name) {
                this.error.name = 'Informe uma razão social'
                return
            }

            if (!this.dados.company.cnpj || !!!validateCnpj(this.dados.company.cnpj)) {
                this.error.cnpj = 'Informe um CNPJ válido'
                return
            }

            if (!this.dados.company.openingDate) {
                this.error.openingDate = 'Informe a data de abertura'
                return
            }

            if (!this.dados.phone || !!!validateMinimumSize(this.dados.phone, 11)) {
                this.error.phone = 'Informe um telefone válido'
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
  