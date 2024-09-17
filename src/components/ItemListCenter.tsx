interface interfaceItemListCenter{
  icon:React.ReactNode;
  text:string
}
export function ItemListCenter({icon, text}:interfaceItemListCenter){
  return(
    <div className="flex items-center gap-1">
      {icon}
      <p>{text}</p>
    </div>
  )
}