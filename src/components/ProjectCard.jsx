export default function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-gray-500 transition-all group flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider bg-gray-900 text-gray-400 px-2 py-1 rounded-md border border-gray-800">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}