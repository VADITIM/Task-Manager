<template>
	<div class="add-task">Task Manager</div>
	<input class="input-task" v-model="newTask" />
	task

	<ul>
		<li v-for="(task, i) in filteredTasks" :key="i">
			{{ task.text }}
		</li>
	</ul>

	<button class="add-button" @click="addTask">Add</button>
	<button class="remove-button" @click="removeTask(i)">Remove</button>
</template>

<script setup>
	import taskManager from '@/modules/task-manager'

	const { newTask, addTask, removeTask, filteredTasks } = taskManager()
</script>
