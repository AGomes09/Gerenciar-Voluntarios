export const aplicarMascaraCpf = (valor) => {
  valor = valor.replace(/\D/g, "");
  valor = valor.substring(0, 11);
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return valor;
};

// Máscara para telefone
export const aplicarMascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, ""); // remove tudo que não é número
  valor = valor.substring(0, 11); // limita a 11 dígitos

  if (valor.length > 10) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  }

  return valor;
};

// Validação de telefone (com DDD e 8 ou 9 dígitos)
export const validarTelefone = (valor) => {
  const somenteNumeros = valor.replace(/\D/g, "");
  return /^(\d{10,11})$/.test(somenteNumeros);
};
