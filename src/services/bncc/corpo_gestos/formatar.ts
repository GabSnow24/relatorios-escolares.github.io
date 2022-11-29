import opcoes from "./corpo.json";

type opcao = {
  [index: string]: string;
};

const corpo_gestos_opcoes: opcao = {
  sim: opcoes.compreende_espaco.sim,
  nao: opcoes.compreende_espaco.nao,
  talvez: opcoes.compreende_espaco.talvez,
};

export const formatar_corpo_gestos = (values: string[]) => {
  const [compreende_espaco] = values;
  return `${corpo_gestos_opcoes[compreende_espaco]}`;
};
