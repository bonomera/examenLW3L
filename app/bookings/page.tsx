import { getTasks, editResa } from '@/lib/tasks';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const tasks = await getTasks();

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent text-center">
        Liste des reservations
      </h1>

      {/* LISTE DES POSTS */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white/5 border border-white/5 p-4 rounded-xl transition-all">
            
            {/* Formulaire Unique pour Edit et Delete */}
            <form className="flex flex-col gap-3">
              <input type="hidden" name="id" value={task.id} />
              
              <div className="flex items-center justify-between gap-4">
                {/* Lien vers la page du post */}
                <Link href={`/bookings/${task.displayId}`} className="text-gray-200 hover:text-green-400 font-medium truncate">
                  {task.name}
                </Link>

                {/* Boutons d'action */}
                <div className="flex gap-2 shrink-0">
                  <Link href={`/bookings/${task.displayId}`}
                    type="submit"
                    className="text-[15px] uppercase tracking-tighter text-green-400 border border-green-400/30 px-2 py-1 rounded hover:bg-green-400/10"
                  >
                     Edit
                  </Link>
                </div>
              </div>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}