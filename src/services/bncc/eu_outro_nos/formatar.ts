import opcoes from "./eu_outro_nos.json";

type opcao = {
  [index: string]: string;
};

const solidario_opcoes: opcao = {
  sim: opcoes.solidario.sim,
  nao: opcoes.solidario.nao,
  talvez: opcoes.solidario.talvez,
};
const confiante_opcoes: opcao = {
  sim: opcoes.confiante.sim,
  nao: opcoes.confiante.nao,
  talvez: opcoes.confiante.talvez,
};
const compartilha_brinquedos_opcoes: opcao = {
  sim: opcoes.compartilha_brinquedos.sim,
  nao: opcoes.compartilha_brinquedos.nao,
  talvez: opcoes.compartilha_brinquedos.talvez,
};

export const formatar_eu_outro_nos = (values: string[]) => {
  const [solidario, confiante, compartilha_brinquedos] = values;
  return `${solidario_opcoes[solidario]}${confiante_opcoes[confiante]}${compartilha_brinquedos_opcoes[compartilha_brinquedos]}`;
};
