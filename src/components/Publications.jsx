import PublicationCard from "./publicationCard";

export default function Publications({ user, publicaciones }) {
  return (
    <div className="lg:col-span-2 space-y-8">
      <h3 className="text-2xl font-bold flex items-center gap-3">
        <i className="fa-solid fa-layer-group text-blue-500"></i> Publicaciones Subidas
      </h3>

      {publicaciones.map((pub) => (
        <PublicationCard key={pub.id} user={user} descripcion={pub.descripcion} />
      ))}
    </div>
  );
}
