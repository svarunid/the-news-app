export default function Article(props) {
  return (
    <article className="w-full drop-shadow rounded bg-white">
      <img className="w-full h-32 rounded-t object-cover" src={props.imageUrl} alt="something"/>
      <div className="px-4 py-4 flex flex-col">
          <p className="line-clamp-2 font-medium leading-snug text-slate-900">{props.title}</p>
          <div className="flex flex-row place-content-between font-medium text-sm text-slate-600 my-1">
            <span>{props.source}</span>
            <span>{props.publishedDate}</span>
          </div>
          <p className="line-clamp-4 text-justify text-sm text-slate-900 leading-tight">{props.description}</p>
      </div>
    </article>
  );
}
