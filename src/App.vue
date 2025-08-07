<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<TaskCollector msg="Welcome to Your Vue.js App" />
</template>

<script>
	import TaskCollector from './components/TaskCollector.vue'

	export default {
		name: 'App',
		components: {
			TaskCollector,
		},
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
