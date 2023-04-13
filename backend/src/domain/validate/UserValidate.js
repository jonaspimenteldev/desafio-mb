import joi from "joi";

const UserValidate = joi.object({
  email: joi.string().email().required(),
  registrationType: joi.string().valid("PF", "PJ").required(),
  password: joi.string().required(),
  name: joi.string().required(),
  cpf: joi.string().when("registrationType", {
    is: "PF",
    then: joi.string().required(),
  }),
  birthDate: joi.date().when("registrationType", {
    is: "PF",
    then: joi.date().required(),
  }),
  phone: joi.string().required(),
  company: joi
    .object({
      name: joi.string().when("registrationType", {
        is: "PJ",
        then: joi.string().required(),
      }),
      cnpj: joi.string().when("registrationType", {
        is: "PJ",
        then: joi.string().required(),
      }),
      openingDate: joi.date().when("registrationType", {
        is: "PJ",
        then: joi.date().required(),
      }),
      phone: joi.string().when("registrationType", {
        is: "PJ",
        then: joi.string().required(),
      }),
    })
    .when("registrationType", {
      is: "PJ",
      then: joi.object().required(),
    }),
});

export default UserValidate;
