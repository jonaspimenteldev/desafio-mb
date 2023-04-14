export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return false;
  }

  return true;
};

export const validateMinimumSize = (value, minimumSize) => {
  if (value.length < minimumSize) {
    return false;
  }
  return true;
};

export const validateCpf = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

  if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

  if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
};

export const validateBirthDate = (birthDate) => {
  if (!birthDate) {
    return false;
  }

  var regexData = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regexData.test(birthDate)) {
    return false;
  }

  var partesData = birthDate.split("/");
  var dia = parseInt(partesData[0], 10);
  var mes = parseInt(partesData[1], 10);
  var ano = parseInt(partesData[2], 10);
  var data = new Date(ano, mes - 1, dia);
  if (
    data.getFullYear() !== ano ||
    data.getMonth() + 1 !== mes ||
    data.getDate() !== dia
  ) {
    return false;
  }

  return true;
};

export const validateCnpj = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  var soma = 0;
  var peso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (var i = 0; i < 12; i++) {
    soma += parseInt(cnpj.charAt(i)) * peso[i];
  }
  var resto = soma % 11;
  var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  if (parseInt(cnpj.charAt(12)) !== digitoVerificador1) {
    return false;
  }

  soma = 0;
  peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (var i = 0; i < 13; i++) {
    soma += parseInt(cnpj.charAt(i)) * peso[i];
  }
  resto = soma % 11;
  var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  if (parseInt(cnpj.charAt(13)) !== digitoVerificador2) {
    return false;
  }

  return true;
};
