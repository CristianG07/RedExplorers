
export default function ProductPost({ postInfo }) {
   return (
      <>
         {postInfo.map((item) => (
            <div className="grid grid-cols-3 gap-3" key={item.id}>
               <img src={item.image} alt="image" className="w-full" />
               <div className="col-span-2 flex flex-col gap-2 md:gap-10 lg:gap-2">
                  <h5 className="text-xl md:text-3xl lg:text-xl font-semibold">{item.title}</h5>
                  <span className="text-primary text-2xl md:text-4xl lg:text-xl font-semibold">{item.date}</span>
               </div>
            </div>
         ))}
      </>
   )
}
