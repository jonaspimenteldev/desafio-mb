

  <template>
    <div>
      <h2>Etapa 2</h2>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="dados.nome">
      <br>
      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" v-model="dados.cpf">
      <br>
      <label for="dataNascimento">Data de Nascimento:</label>
      <input type="date" id="dataNascimento" v-model="dados.dataNascimento">
      <br>
      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" v-model="dados.telefone">
      <br>
      <button @click="next">Próximo</button>
      <button @click="back">Voltar</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      dados: Object
    },
    data() {
      return {
        step: 2
      }
    },
    methods: {
      next() {
        this.$emit('next', this.dados)
      },
      back() {
        this.$emit('back')
      }
    }
  }
  </script>
  