interface projectLink {
  label: string;
  href: string;
}

interface textProjectItem {
  title: string;
  date: string;
  description: string;
  highlight?: string;
  links?: projectLink[];
}

/**
 * Esse **Componente** cria um item da lista de projetos, com destaque opcional e links para o código e a demonstração
 * @param {string} title *Type: string.* - Nome do projeto
 * @param {string} date *Type: string.* - Ano ou período
 * @param {string} description *Type: string.* - O que o projeto faz e as tecnologias usadas
 * @param {string} highlight *Type: string.* - Reconhecimento ou destaque, ex.: prêmio - opcional
 * @param {projectLink[]} links *Type: array.* - Links (rótulo e endereço) para repositórios e demonstração - opcional
 */

export function ProjectItem({
  title,
  date,
  description,
  highlight,
  links,
}: textProjectItem) {
  return (
    <div className="flex flex-col mt-2 print:break-inside-avoid">
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-[#009ddd] mr-2" />
        <li className="text-sm">
          <span className="font-medium text-base">{title}</span> - {date}
        </li>
      </div>
      <p className="ml-4 text-sm font-light">{description}</p>
      {highlight && (
        <p className="ml-4 mt-1 text-sm font-medium text-[#0f4571]">
          &#127942; {highlight}
        </p>
      )}
      {links && links.length > 0 && (
        <div className="ml-4 mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank" rel="noopener noreferrer"
              title={`Clique para abrir: ${link.label}`}
              className="text-blue-500 underline hover:text-[#0f4571]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
