import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  registrationType: {
    type: String,
    enum: ["PF", "PJ"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: function () {
      return this.registrationType === "PF";
    },
  },
  birthDate: {
    type: Date,
    required: function () {
      return this.registrationType === "PF";
    },
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    cnpj: {
      type: String,
      required: function () {
        return this.registrationType === "PJ";
      },
    },
    openingDate: {
      type: Date,
      required: function () {
        return this.registrationType === "PJ";
      },
    },
  },
});

export default model("User", userSchema);
