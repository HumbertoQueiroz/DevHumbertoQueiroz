interface techGroupProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Esse **Componente** agrupa tecnologias sob um subtítulo, para separar linguagens, front-end, back-end e ferramentas
 * @param {string} title *Type: string.* - Nome do grupo
 * @param {React.ReactNode} children *Type: Components.* - Os itens (ButtonImg) do grupo
 */

export function TechGroup({ title, children }: techGroupProps) {
  return (
    <div className="mt-3 print:break-inside-avoid">
      <h5 className="text-sm font-semibold uppercase text-[#0f4571] mb-1">
        {title}
      </h5>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}
