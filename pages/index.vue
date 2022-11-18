<script setup lang="ts">
import { useServerData } from '@/lib/loader'
import { prisma } from '@/lib/prisma?server'

const todos = await useServerData(async () => {
  const result = await prisma.todo.findMany()
  return result
})
</script>


<template>
  <div>
    <ul v-if="todos">
      <li v-for="t in todos" :key="t.id">{{ t.title }}</li>
    </ul>
    <div v-else>No todos</div>
  </div>
</template>
