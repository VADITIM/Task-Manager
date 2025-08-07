import { ref, computed, watch } from 'vue'

export default () => {
	const tasks = ref(JSON.parse(localStorage.getItem('tasks') || '[]'))
	const newTask = ref('')
	const filter = ref('all')
	const removeTask = (index) => tasks.value.splice(index, 1)

	const addTask = () => {
		if (newTask.value.trim()) {
			tasks.value.push({ text: newTask.value, done: false })
			newTask.value = ''
		}
	}

	const filteredTasks = computed(() => {
		if (filter.value === 'done') return tasks.value.filter((task) => task.done)
		if (filter.value === 'not_done')
			return tasks.value.filter((task) => !task.done)
		return tasks.value
	})

	watch(tasks, (task) => localStorage.setItem('tasks', JSON.stringify(task)), {
		deep: true,
	})

	return {
		newTask,
		filteredTasks,
		removeTask,
		addTask,
	}
}
