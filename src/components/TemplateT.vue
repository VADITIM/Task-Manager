<!-- <script setup>
import { ref, computed, watch } from 'vue'

const tasks = ref(JSON.parse(localStorage.getItem('tasks') || '[]'))
const newTask = ref('')
const filter = ref('all')

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, done: false })
    newTask.value = ''
  }
}

const removeTask = index => tasks.value.splice(index, 1)
const toggleDone = task => task.done = !task.done

const filteredTasks = computed(() => {
  if (filter.value === 'done') return tasks.value.filter(t => t.done)
  if (filter.value === 'not_done') return tasks.value.filter(t => !t.done)
  return tasks.value
})

watch(tasks, t => localStorage.setItem('tasks', JSON.stringify(t)), { deep: true })
</script>

<template>
  <input v-model="newTask" @keyup.enter="addTask" placeholder="New task" />
  <button @click="addTask">Add</button>

  <select v-model="filter">
    <option value="all">All</option>
    <option value="done">Done</option>
    <option value="not_done">Not Done</option>
  </select>

  <ul>
    <li v-for="(task, i) in filteredTasks" :key="i">
      <input type="checkbox" v-model="task.done" />
      <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
        {{ task.text }}
      </span>
      <button @click="removeTask(i)">X</button>
    </li>
  </ul>
</template> -->
