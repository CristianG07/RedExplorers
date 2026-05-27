export default function SimpleCard({ children, className = "" }) {
   return (
      <div className={`card py-7 ${className}`}>
         <h3 className="titleCard">{children}</h3>
      </div>
   )
}
