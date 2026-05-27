import { chat, map } from "../../assets/images";
import MetaItem from "./MetaItem";

export default function CardPrimary({ cardInfo }) {
   const { image, video, date, title, text = "", location, comment, alt, mediaType } = cardInfo

   return (
      <div className="card">
         <figure>
            {mediaType === "image"
               ? <img src={image} alt={alt} className="w-full object-fill aspect-video" />
               : <iframe src={video} title={title} loading="lazy" allowFullScreen className="w-full aspect-video" />}
         </figure>
         <div className="flex flex-col justify-between">
            <span className="inline-block px-5 mt-5 border-l-4 border-secondary">{date}</span>
            <div className="grid gap-5 p-5">
               <h3 className="text-3xl font-semibold leading-12">{title}</h3>
               <p className="text-xl text-balance leading-10">{text}</p>
               <div className="flex justify-between mb-1.5">
                  <MetaItem icon={map} alt="map icon">{location}</MetaItem>
                  <MetaItem icon={chat} alt="chat icon">Comment ({comment})</MetaItem>
               </div>
            </div>
         </div>
      </div>
   )
}
