import opcoes from "./tracos_sons.json";

type opcao = {
  [index: string]: string;
};

const letra_cursiva_opcoes: opcao = {
  sim: opcoes.letra_cursiva.sim,
  nao: opcoes.letra_cursiva.nao,
  talvez: opcoes.letra_cursiva.talvez,
};
const desenha_pinta_canta_opcoes: opcao = {
  sim: opcoes.desenha_pinta_canta.sim,
  nao: opcoes.desenha_pinta_canta.nao,
  talvez: opcoes.desenha_pinta_canta.talvez,
};

export const formatar_tracos_sons = (values: string[]) => {
  const [letra_cursiva, desenha_pinta_canta] = values;
  return `${desenha_pinta_canta_opcoes[desenha_pinta_canta]}${letra_cursiva_opcoes[letra_cursiva]}`;
};
