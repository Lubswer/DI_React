export default function Projects({ proyecto1 }) {
  return (
    <section className="bg-white/5 border border-white/10 p-6 rounded-[25px]">
      <h3 className="text-xl font-bold mb-4 text-blue-400">Proyectos</h3>
      <p className="text-sm bg-blue-500/10 text-blue-300 p-3 rounded-xl border border-blue-500/20">
        {proyecto1}
      </p>
    </section>
  );
}
