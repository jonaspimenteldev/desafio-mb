import { defineStore } from "pinia";

export const useRegistrationStore = defineStore("registration", {
  state: () => ({
    user: {
      email: "",
      registrationType: "",
      password: "",
      name: "",
      phone: "",
      cpf: "",
      birthDate: "",
      company: {
        cnpj: "",
        openingDate: "",
      },
    },
  }),
});
