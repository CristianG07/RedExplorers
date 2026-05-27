export default function SocialCard({ socialInfo, }) {
   return (
      <div className="grid grid-cols-2 gap-5">
         {socialInfo.map((item) => (
            <div className={`${item.color} px-8 py-5 rounded-xl`} key={item.id}>
               <div className="flex gap-5 items-center text-white">
                  <img className="object-contain min-w-fit" src={item.image} alt={item.text} />
                  <div>
                     <p>{item.users}</p>
                     <p>{item.text}</p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}
