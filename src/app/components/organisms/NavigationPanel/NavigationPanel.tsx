import { getCsvLines } from "@utils/csv";
import { downloadFile } from "@utils/file";
import React from "react";
import { formatar_corpo_gestos } from "services/bncc/corpo_gestos/formatar";
import { formatar_escuta_fala } from "services/bncc/escuta_fala_pensamento/formatar";
import { formatar_espaco_tempo } from "services/bncc/espaco_tempo/formatar";
import { formatar_eu_outro_nos } from "services/bncc/eu_outro_nos/formatar";
import { formatar_tracos_sons } from "services/bncc/tracos_sons/formatar";

const NavigationPanel = () => {
  const createMapFromCsvLines = (csvLines: string[]) => {
    const lines = csvLines
      .map((line: string) => {
        const [nome, a, b, c, d, e, f, g, h, i] = line.split(",");
        const eu_outro_nos = formatar_eu_outro_nos([a, b, c]);
        const corpo_gestos = formatar_corpo_gestos([d]);
        const tracos_sons = formatar_tracos_sons([e, f]);
        const escuta_fala = formatar_escuta_fala([g, h]);
        const espaco_tempo = formatar_espaco_tempo([i]);

        return {
          nome,
          eu_outro_nos: eu_outro_nos,
          corpo_gestos: corpo_gestos,
          tracos_sons: tracos_sons,
          escuta_fala: escuta_fala,
          espaco_tempo: espaco_tempo,
        };
      })
      .filter(Boolean);

    lines.forEach((line) => {
      let finalText = "";
      const currentLine = Object.values(line);
      const firstName = currentLine[0].split(" ").slice(0, 1).join(" ");
      currentLine.forEach(
        (entry) =>
          (finalText += `${entry.replaceAll("{{nome}}", firstName)}\r\n\r\n`)
      );
      const contentType = "text/csv";
      const title = currentLine[0];
      downloadFile(contentType, finalText, title);
    });
    return csvLines;
  };

  const handleCsvFile = (file: File) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      if (event && event.target && event.target.result) {
        const csvText = event.target.result.toString();
        createMapFromCsvLines(getCsvLines(csvText));
      }
    };
    if (file instanceof Blob) {
      fileReader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept={".csv"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            const file = Array.from(e.target.files)[0];
            handleCsvFile(file);
          }
        }}
      />
    </div>
  );
};

export default NavigationPanel;
