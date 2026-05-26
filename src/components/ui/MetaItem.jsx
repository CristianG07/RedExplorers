export default function MetaItem({ children, icon, alt = "", className = "" }) {
   return (
      <div className={`flex items-center gap-2 ${className}`}>
         <img src={icon} alt={alt} />
         <p>{children}</p>
      </div>
   )
}
