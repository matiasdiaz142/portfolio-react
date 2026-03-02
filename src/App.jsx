import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-blue-500/30">

      {/* Navbar fija arriba */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">MD</span>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#perfil" className="hover:text-white transition-colors">Perfil</a>
            <a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* SECCIÓN 1: Perfil (Ocupa toda la pantalla) */}
      <section id="perfil" className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
          Matias Diaz
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl text-center leading-relaxed">
          Estudiante de Licenciatura en Informática @ UNAHUR.
          Desarrollador enfocado en software moderno y sistemas.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#proyectos" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Ver proyectos
          </a>
          <a href="#contacto" className="border border-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition">
            Contactarme
          </a>
        </div>
      </section>

      {/* SECCIÓN 2: Tecnologías (Basado en imagen 10) */}
      <section id="tecnologias" className="min-h-screen py-32 max-w-5xl mx-auto px-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Tecnologías</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">Un resumen de las herramientas que utilizo en mis proyectos académicos y personales.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Lenguajes</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• C#</li>
              <li>• C</li>
              <li>• JavaScript</li>
            </ul>
          </div>
          <div className="bg-[#111] border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Frontend</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• React</li>
              <li>• Tailwind CSS</li>
              <li>• HTML5 / CSS3</li>
            </ul>
          </div>
          <div className="bg-[#111] border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-green-400">Herramientas</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Git / GitHub</li>
              <li>• Wollok</li>
              <li>• .NET Core</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Proyectos (Ocupa casi toda la pantalla) */}
      <section id="proyectos" className="min-h-screen py-32 flex flex-col justify-center max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-100 border-l-4 border-blue-500 pl-4">
          Proyectos destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* SECCIÓN 4: Contacto (Ocupa casi toda la pantalla) */}
      <section id="contacto" className="min-h-screen py-32 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-3xl bg-zinc-900/30 border border-white/5 p-12 rounded-[2.5rem] text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">¿Hablamos?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Si te interesa mi perfil para algún proyecto o simplemente querés charlar sobre código, escribime.
          </p>
          <a href="mailto:matiasdiaz142@gmail.com" className="text-2xl md:text-3xl font-semibold text-blue-400 hover:text-blue-300 transition underline underline-offset-8">
            matiasdiaz142@gmail.com
          </a>
          <div className="mt-12 flex justify-center gap-8">
            <a href="https://github.com/matiasdiaz142" target="_blank" className="text-gray-500 hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/matiasdiaz142/" target="_blank" className="text-gray-500 hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-700 text-xs border-t border-white/5">
        © 2026 — Matias Diaz
      </footer>
    </div>
  );
}

export default App;