import { prisma } from '~/lib/prisma'

export async function onGetTodos() {
  const todos = await prisma.todo.findMany()
  return todos
}

export const onNewTodo = async ({ title, content }: { title: string; content: string }) => {
  await prisma.todo.create({
    data: {
      title,
      content,
      completed: false
    }
  })
}
