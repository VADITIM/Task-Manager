<template>
	<div class="task-manager">Task Manager</div>
	<div class="add-task">Add a task you wish to complete</div>
	<input type="text" class="input-task" v-model="newTask" @keydown.enter="addTask"/>

	<select v-model="filter">
		<option value="all">All</option>
		<option value="done">Done</option>
		<option value="not_done">Not Done</option>
	</select>

	<ul>
		<li v-for="(task, i) in filteredTasks" :key="i">
			<button class="remove-task" @click="removeTask(i)">X</button>
			<span :class="{ 'done' : task.done}">
				{{ task.text }}
			</span>
			<input type="checkbox" v-model="task.done">
		</li>
	</ul>

	<button class="add-button" @click="addTask"></button>
</template>

<script setup>
	import taskManager from '@/modules/task-manager-ref'

	const {
		newTask,
		addTask,
		removeTask,
		filter,
		filteredTasks
	} = taskManager()
</script>

<style scoped>
	.done {
		text-decoration: line-through;
	}
</style>