export default function Button({ children, className = "" }) {
   return (
      <div className="">
         <button className={`text-2xl bg-primary cursor-pointer rounded-md hover:scale-105 transition-transform duration-300 ease-in ${className}`}>{children}</button>
      </div>
   )
}
