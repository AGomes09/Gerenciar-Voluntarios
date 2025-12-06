export const aplicarMascaraCpf = (valor) => {
  valor = valor.replace(/\D/g, "");
  valor = valor.substring(0, 11);
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return valor;
};

export const aplicarMascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, "");
  valor = valor.substring(0, 11);

  if (valor.length > 10) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  }

  return valor;
};

export const validarTelefone = (valor) => {
  const somenteNumeros = valor.replace(/\D/g, "");
  return /^(\d{10,11})$/.test(somenteNumeros);
};

export const formatarTelefoneFixo = (numero) => {
  const digits = numero.replace(/\D/g, "");

  const regexFixo = /^[1-9]{2}[2-5]\d{7}$/;

  if (!regexFixo.test(digits)) {
    return null;
  }

  const ddd = digits.substring(0, 2);
  const parte1 = digits.substring(2, 6);
  const parte2 = digits.substring(6);

  return `(${ddd}) ${parte1}-${parte2}`;
};
