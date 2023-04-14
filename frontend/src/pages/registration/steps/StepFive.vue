<template>
    <InputText name="email" label="Endereço de e-mail" v-model="dados.email" :error="error.email" />

    <InputText name="name" :label="dados.registrationType === 'PF' ? 'Nome' : 'Razão Social'" v-model="dados.name"
        :error="error.name" />

    <template v-if="dados.registrationType === 'PF'">
        <InputText name="cpf" label="CPF" mask="XXX.XXX.XXX-XX" v-model="dados.cpf" :error="error.cpf" />
        <InputText name="birthDate" type="date" label="Data de nascimento" v-model="dados.birthDate"
            :error="error.birthDate" />
    </template>

    <InputText name="phone" mask="(XX) X XXXX.XXXX" label="Telefone" v-model="dados.phone" :error="error.phone" />

    <template v-if="dados.registrationType === 'PJ'">
        <InputText name="cnpj" label="CNPJ" mask="XX.XXX.XXX/XXXX-XX" v-model="dados.company.cnpj" :error="error.cnpj" />
        <InputText name="openingDate" type="date" label="Data de abertura" v-model="dados.company.openingDate"
            :error="error.openingDate" />
    </template>
    <InputText name="email" label="Sua Senha" v-model="dados.password" :error="error.password" />

    <GroupButton>
        <Button label="Voltar" :outline="true" :half="true" @click.prevent="back" />
        <Button label="Cadastrar" :half="true" @click.prevent="submitForm" />
    </GroupButton>
</template>

<script>
/* Mixins */
import mixinsValidateForm from '../mixins/mixinsValidateForm';

/* Components */
import InputText from '../../../components/InputText.vue'
import Button from '../../../components/Button.vue'
import GroupButton from '../../../components/GroupButton.vue'

export default {
    mixins: [mixinsValidateForm],
    components: {
        InputText,
        GroupButton,
        Button,
    },
    watch: {
        "dados.email"() {
            this.error.email = "";
        },
        "dados.name"() {
            this.error.name = "";
        },
        "dados.cpf"() {
            this.error.cpf = "";
        },
        "dados.birthDate"() {
            this.error.birthDate = "";
        },
        "dados.phone"() {
            this.error.phone = "";
        },
        "dados.company.cnpj"() {
            this.error.cnpj = "";
        },
        "dados.company.openingDate"() {
            this.error.openingDate = "";
        },
        "dados.phone"() {
            this.error.phone = "";
        },
        "dados.password"() {
            this.error.password = "";
        },
    },
    data() {
        return {
            error: {},
        }
    },
    methods: {
        back() {
            this.$emit('back')
        },

        submitForm() {

            const valid = !!this.validateForm();

            if (valid) {
                let form;

                if (this.dados.registrationType === 'PF') {
                    form = {
                        email: this.dados.email,
                        registrationType: this.dados.registrationType,
                        password: this.dados.password,
                        name: this.dados.name,
                        cpf: this.dados.cpf,
                        birthDate: this.dados.birthDate,
                        phone: this.dados.phone
                    }

                    console.log(form);

                } else {
                    form = {
                        email: this.dados.email,
                        registrationType: this.dados.registrationType,
                        password: this.dados.password,
                        name: this.dados.name,
                        phone: this.dados.phone,
                        company: {
                            cnpj: this.dados.company.cnpj,
                            openingDate: this.dados.company.openingDate
                        }
                    }
                    console.log(form);

                }
            }


        }
    },
    props: ['dados'],
    emits: ['back'],

}
</script>