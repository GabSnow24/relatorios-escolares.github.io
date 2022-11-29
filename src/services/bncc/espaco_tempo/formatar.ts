import opcoes from "./espaco_tempo.json";

type opcao = {
  [index: string]: string;
};

const se_orienta_opcoes: opcao = {
  sim: opcoes.se_orienta.sim,
  nao: opcoes.se_orienta.nao,
  talvez: opcoes.se_orienta.talvez,
};

export const formatar_espaco_tempo = (values: string[]) => {
  const [se_orienta] = values;
  return `${se_orienta_opcoes[se_orienta]}`;
};
