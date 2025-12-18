'use server'

import { revalidatePath } from 'next/cache';
import { db } from '@/db'
import { tasksTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { integer } from 'drizzle-orm/gel-core';


export async function getTasks() {
  return await db.select().from(tasksTable)
}

export async function getTaskByDisplayId(displayId: number) {
  const result = await db
    .select()
    .from(tasksTable)
    .where(eq(tasksTable.displayId, displayId));
  return result[0];
}

export async function addResa(form: FormData) {
  await db.insert(tasksTable).values({
    name: String(form.get('name')),
    phone: Number(form.get('phone')),
    people: Number(form.get('people')),
    hours: String(form.get('hours')),
  });
  redirect((await headers()).get('referer') ?? '/')
}

export async function editResa(form: FormData) {
  const id = String(form.get('id')); // On récupère l'UUID normalement
  const name = String(form.get('name')); 
  const phone = Number(form.get('phone'));
  const people = Number(form.get('people'));
  const hours = String(form.get('hours'));
  await db
    .update(tasksTable)
    .set({
      name: String(form.get('name')),
      phone: Number(form.get('phone')),
      people: Number(form.get('people')),
      hours: String(form.get('hours')),
    })
    .where(eq(tasksTable.id, String(form.get('id'))))
  revalidatePath('/bookings'); // INDISPENSABLE : vide le cache de la page blog
  redirect('/bookings');      // Renvoie l'utilisateur sur la liste
}

export async function removeResa(id: string) {
  await db.delete(tasksTable).where(eq(tasksTable.id, id))
  revalidatePath('/bookings'); // INDISPENSABLE : vide le cache de la page blog
  redirect('/bookings');      // Renvoie l'utilisateur sur la liste
}