export default function Announcement({
    title,
    text,
    author,
    date,
}: {
    title: string
    text: string
    author: string
    date: string
}) {
    return (
        <article className="bg-gray-100 p-3 rounded-lg hover:cursor-pointer hover:bg-gray-200">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm">{text}</p>
            <div className="flex gap-2 mt-2">
                <p className="text-xs text-gray-400">
                    {new Date(date).toLocaleDateString()} &bull;
                </p>
                <p className="text-xs">{author}</p>
            </div>
        </article>
    )
}
