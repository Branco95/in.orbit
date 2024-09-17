import { and, count, eq, lte, sql } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { gte } from 'drizzle-orm'
import dayjs from 'dayjs'

interface CreateGoalCOmpletionRequest {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: CreateGoalCOmpletionRequest) {
  const firstDayofWeek = dayjs().startOf('week').toDate()
  const lastDayofWeek = dayjs().endOf('week').toDate()

  const goalCompletionCounts = db.$with('goal_completion_counts').as(
    db
      .select({
        goalId: goalCompletions.goalId,
        completionCount: count(goalCompletions.id).as('completionCount'),
      })
      .from(goalCompletions)
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayofWeek),
          lte(goalCompletions.createdAt, lastDayofWeek),
          eq(goalCompletions.goalId, goalId)
        )
      )
      .groupBy(goalCompletions.goalId)
  )

  const result = await db
    .with(goalCompletionCounts)
    .select({
      desiredWeeklyCompletions: goals.desiredWeeklyFrequency,
      completionCount: sql /*sql*/`
        COALESCE(${goalCompletionCounts.completionCount}, 0)
        `.mapWith(Number),
    })
    .from(goals)
    .leftJoin(goalCompletionCounts, eq(goalCompletionCounts.goalId, goals.id))
    .where(eq(goals.id, goalId))
    .limit(1)

  const { completionCount, desiredWeeklyCompletions } = result[0]

  if (completionCount >= desiredWeeklyCompletions) {
    throw new Error('Goal already completed this week')
  }

  const insertResult = await db
    .insert(goalCompletions)
    .values({
      goalId,
    })
    .returning()
  const goalCompletion = insertResult[0]

  return {
    goalCompletion,
  }
}
