export default function Knowledge({ enseñar1, aprender1 }) {
  return (
    <section className="bg-white/5 border border-white/10 p-6 rounded-[25px]">
      <h3 className="text-xl font-bold mb-4">Conocimiento</h3>
      <div className="mb-4">
        <h4 className="text-xs font-bold text-green-400 uppercase mb-2">Puedo enseñar</h4>
        <p className="text-sm italic text-gray-400">{enseñar1}</p>
      </div>
      <div>
        <h4 className="text-xs font-bold text-purple-400 uppercase mb-2">Quiero aprender</h4>
        <p className="text-sm italic text-gray-400">{aprender1}</p>
      </div>
    </section>
  );
}
