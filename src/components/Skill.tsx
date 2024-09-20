interface SkillInterface {
  levelSkill: number;
  textSkill: string;
}

/**
 * Esse **Componente** cria um uma escala de circulos de 0 a 6 e concatena com o texto.
 * @param {number} levelSkill *Type: number* - Escala, gera 6 circulos vazios ou preenchidos, dependera do valor informado, menor que 1 gera todos vazios, preenchendo conforme valor ate 6 (ou maior) sendo retornado neste caso todos preenchidos.
 * @param {string} textSkill *Type: string.* - Texto que sera concatenado com a escala de conhecimento.
 * @returns {Component} Retorna o componente com uma div envolvendo a escala e o texto
 */

export function Skill({ levelSkill, textSkill }: SkillInterface) {
  //função criada para gerar a escala de forma automática através de um for
  function CreateLevel(level: number) {
    let aux = level;
    const empty = "w-2 h-2 bg-slate-00 ring-1 ring-white m-1 rounded-full";
    const full = "w-2 h-2 bg-white ring-1 ring-white m-1 rounded-full";
    const divReturn = [];

    for (let i = 0; i < 6; i++) {
      divReturn.push(<div className={aux < 1 ? empty : full} key={i} />);
      aux--;
    }
    return <div className="flex">{divReturn}</div>;
  }

  return (
    <div className="flex my-1 items-center gap-2">
      {CreateLevel(levelSkill)}
      <p className="truncate">{textSkill}</p>
    </div>
  );
}
