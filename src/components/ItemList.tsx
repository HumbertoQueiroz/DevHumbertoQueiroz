interface textItemList {
  title: string;
  date: string;
  organization: string;
  description?: string;
}

/**
 * Esse **Componente** cria um item de uma lista
 * @param {string} title *Type: string.* - Título
 * @param {string} date *Type: string.* - Data
 * @param {string} organization *Type: string.* - Organização/Empresa
 * @param {string} description *Type: string.* - Descrição - opcional
 */

export function ItemList({
  title,
  date,
  organization,
  description,
}: textItemList) {
  return (
    <div className="flex flex-col mt-2">
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-[#009ddd] mr-2" />
        <li className="text-sm">
          <span className="font-medium text-base">{title}</span> - {date}
        </li>
      </div>
      <p className="ml-4 text-sm font-light">
        {organization} - {description}
      </p>
    </div>
  );
}
