interface textItemList{
  title:string
  date:string
  organization:string
  description?: string
}
export function ItemLinst({title}:textItemList) {
  return (
    <div className="flex items-center">
      <div className="w-2 h-2 rounded-full bg-sky-300 mr-2" />
      <li>{title}</li>
    </div>
  );
}
