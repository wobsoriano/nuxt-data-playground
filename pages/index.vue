<script setup lang="ts">
import { useServerData } from '@/lib/loader'
import { onGetTodos } from '@/db/todos?server'

const todos = await useServerData(() => onGetTodos())
</script>


<template>
  <div>
    <ul v-if="todos">
      <li v-for="t in todos" :key="t.id">{{ t.title }}</li>
    </ul>
    <div v-else>No todos</div>
  </div>
</template>
