export default function ProjectCard({ title, description, tags, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-gray-500 transition-all group flex flex-col h-full hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <span className="text-gray-600 group-hover:text-blue-400 transition-colors">
          ↗
        </span>
      </div>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="text-[10px] uppercase tracking-wider bg-gray-900 text-gray-400 px-2 py-1 rounded-md border border-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}