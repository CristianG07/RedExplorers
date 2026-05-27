
export default function RecentPost({ postInfo }) {
   return (
      <>
         {postInfo.map((item) => (
            <div className="grid grid-cols-3 gap-3" key={item.id}>
               <img src={item.image} alt="image" className="w-full" />
               <div className="col-span-2 flex flex-col gap-2">
                  <span>{item.date}</span>
                  <h5 className="text-2xl font-semibold">{item.title}</h5>
               </div>
            </div>
         ))}
      </>
   )
}
