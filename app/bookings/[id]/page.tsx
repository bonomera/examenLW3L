import { editResa, getTaskByDisplayId, removeResa } from '@/lib/tasks';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {

  const displayId = Number((await params).id);

  const post = await getTaskByDisplayId(displayId);

  if (!post) return notFound();

  return (
    <div className="p-8 max-w-lg mx-auto text-white">
      <h1 className="text-2xl font-bold mb-6">Modifier la reservation</h1>
      
      <form action={editResa} className="flex flex-col gap-4">

        <input type="hidden" name="id" value={post.id} />
        
        <label className="text-sm text-gray-400">Reservation numero {post.displayId}</label>
        <input 
          name="name"
          placeholder="Nom"  
          defaultValue={post.name} 
          className="bg-black border border-white/20 p-3 rounded-lg text-white outline-none focus:border-green-500 outline-none"
        />
        <input 
          name="phone"
          placeholder="Numero de telephone"  
          defaultValue={post.phone} 
          className="bg-black border border-white/20 p-3 rounded-lg text-white outline-none focus:border-green-500 outline-none"
        />
        <input 
          name="people"
          placeholder="Nombre de convive"  
          defaultValue={post.people} 
          className="bg-black border border-white/20 p-3 rounded-lg text-white outline-none focus:border-green-500 outline-none"
        />
        <input 
          name="hours"
          placeholder="Date de la reservation"  
          defaultValue={post.hours} 
          className="bg-black border border-white/20 p-3 rounded-lg text-white outline-none focus:border-green-500 outline-none"
        />

        <div>
        <button 
          type="submit"
          className="uppercase tracking-tighter text-green-400 border border-green-400/30 px-2 py-1 rounded hover:bg-green-400/10 text-black font-bold p-3 rounded-lg"
        >
          Confirmer la modification
        </button>
        <button 
          formAction={removeResa.bind(null, String(post.id))}
          className="uppercase tracking-tighter text-red-400 border border-red-400/30 px-2 py-1 rounded hover:bg-red-400/10 text-black font-bold p-3 rounded-lg"
        >
          Supprimer la reservation
        </button>
        </div> 
      </form>
    </div>
  );
}