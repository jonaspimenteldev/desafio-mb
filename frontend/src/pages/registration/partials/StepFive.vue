<template>
    <Alert :display="display" />
    <InputText name="email" label="Endereço de e-mail" v-model="form.email" :error="error.email" />

    <InputText name="name" :label="form.registrationType === 'PF' ? 'Nome' : 'Razão Social'" v-model="form.name"
        :error="error.name" />

    <template v-if="form.registrationType === 'PF'">
        <InputText name="cpf" label="CPF" mask="XXX.XXX.XXX-XX" v-model="form.cpf" :error="error.cpf" />
        <InputText name="birthDate" type="date" label="Data de nascimento" v-model="form.birthDate"
            :error="error.birthDate" />
    </template>

    <InputText name="phone" mask="(XX) X XXXX.XXXX" label="Telefone" v-model="form.phone" :error="error.phone" />

    <template v-if="form.registrationType === 'PJ'">
        <InputText name="cnpj" label="CNPJ" mask="XX.XXX.XXX/XXXX-XX" v-model="form.company.cnpj" :error="error.cnpj" />
        <InputText name="openingDate" type="date" label="Data de abertura" v-model="form.company.openingDate"
            :error="error.openingDate" />
    </template>
    <InputText name="email" label="Sua Senha" v-model="form.password" :error="error.password" />
    {{ this.loading }}
    <GroupButton>
        <ButtonComponent :disabled="loading" label="Voltar" :outline="true" :half="true" @click.prevent="back" />
        <ButtonComponent :disabled="loading" label="Cadastrar" :half="true" @click.prevent="submitForm" />
    </GroupButton>
</template>

<script>
/* Mixins */
import mixinsValidateForm from '../mixins/mixinsValidateForm'

/* Components */
import Alert from '@/components/Alert.vue'
import InputText from '@/components/InputText.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import GroupButton from '@/components/GroupButton.vue'

export default {
    mounted() {
        this.form = this.dados;
    },
    mixins: [mixinsValidateForm],
    components: {
        Alert,
        InputText,
        GroupButton,
        ButtonComponent
    },
    watch: {
        'form.email'() {
            this.error.email = ''
        },
        'form.name'() {
            this.error.name = ''
        },
        'form.cpf'() {
            this.error.cpf = ''
        },
        'form.birthDate'() {
            this.error.birthDate = ''
        },
        'form.phone'() {
            this.error.phone = ''
        },
        'form.company.cnpj'() {
            this.error.cnpj = ''
        },
        'form.company.openingDate'() {
            this.error.openingDate = ''
        },
        'form.password'() {
            this.error.password = ''
        }
    },
    data() {
        return {
            loading: false,
            display: {
                enable: false,
                message: '',
                error: false
            },
            form: {
                company: {}
            },
            error: {}
        }
    },
    methods: {
        back() {
            this.$emit('back')
        },

        submitForm() {
            try {

                const valid = !!this.validateForm()

                if (valid) {
                    this.loading = true;

                    const form = {
                        email: this.form.email,
                        registrationType: this.form.registrationType,
                        password: this.form.password,
                        name: this.form.name,
                        phone: this.form.phone,
                        ...(this.form.registrationType === 'PJ' && {
                            company: {
                                cnpj: this.form.company.cnpj,
                                openingDate: this.form.company.openingDate
                            }
                        }),
                        ...(this.form.registrationType === 'PF' && {
                            cpf: this.form.cpf,
                            birthDate: this.form.birthDate,
                        })
                    }

                    this.$axios
                        .post('/registration', form)
                        .then(() => {
                            this.display = {
                                enable: true,
                                message: 'Usuário cadastrado com sucesso!',
                                error: false
                            },
                                this.loading = false;

                            setTimeout(() => {
                                this.display.enable = false

                            }, 5000);
                        })
                        .catch((error) => {

                            this.display = {
                                enable: true,
                                message: `Erro ao realizar novo cadastro:  ${error.response.data.message}`,
                                error: true
                            },
                                this.loading = false;

                            setTimeout(() => {
                                this.display.enable = false;

                            }, 5000);
                        })
                }
            } catch (error) {
                console.log(error)
                this.loading = false;

            }
        }
    },
    props: ['dados'],
    emits: ['back', 'next']
}
</script>
