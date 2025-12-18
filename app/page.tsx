import { addResa } from '@/lib/tasks';

export default function NewResatPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Nouvelle reservation</h1>
      <form action={addResa} className="flex flex-col gap-4">
        <input 
          name="name" 
          placeholder="Entrer votre nom" 
          className="bg-black border border-white/20 p-3 rounded-lg text-white focus:border-green-500 outline-none"
          required 
        />
        <input 
          name="phone" 
          type="number"
          placeholder="Entrer votre numero de telephone (04********)" 
          className="bg-black border border-white/20 p-3 rounded-lg text-white focus:border-green-500 outline-none"
          required 
        />
        <input 
          name="people"
          type="number"
          placeholder="Nombre de convive" 
          className="bg-black border border-white/20 p-3 rounded-lg text-white focus:border-green-500 outline-none"
          required 
        />
        <input 
          name="hours"
          placeholder="La date de la reservation ?" 
          className="bg-black border border-white/20 p-3 rounded-lg text-white focus:border-green-500 outline-none"
          required 
        />
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold p-3 rounded-lg">Enregistrer</button>
      </form>
    </div>
    
  );
}