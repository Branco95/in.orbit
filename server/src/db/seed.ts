//this file will be used to seed the database with some initial data for testing purposes
// use npm run seed to run this file

import { client, db } from '.'
import { goalCompletions, goals } from './schema'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Learn TypeScript', desiredWeeklyFrequency: 3 },
      { title: 'Learn React', desiredWeeklyFrequency: 2 },
      { title: 'Learn Postgres', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week') //this will give the start of the week

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: startOfWeek.toDate() },
    { goalId: result[1].id, createdAt: startOfWeek.add(1, 'day').toDate() }, //this will add 1 day to the start of the week
  ])
}

seed().finally(() => {
  client.end()
}) //this will close the connection to the database after the seeding is done
