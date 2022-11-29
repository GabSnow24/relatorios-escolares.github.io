import opcoes from "./escuta_fala.json";

type opcao = {
  [index: string]: string;
};

const busca_compreender_opcoes: opcao = {
  sim: opcoes.busca_compreender.sim,
  nao: opcoes.busca_compreender.nao,
  talvez: opcoes.busca_compreender.talvez,
};
const conta_historias_opcoes: opcao = {
  sim: opcoes.conta_historias.sim,
  nao: opcoes.conta_historias.nao,
  talvez: opcoes.conta_historias.talvez,
};

export const formatar_escuta_fala = (values: string[]) => {
  const [busca_compreender, conta_historias] = values;
  return `${busca_compreender_opcoes[busca_compreender]}${conta_historias_opcoes[conta_historias]}`;
};
