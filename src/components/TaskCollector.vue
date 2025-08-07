<template>
    <div class="add-task">Task Manager</div>
    <div>Add a task to complete</div>
    <input class="input-task" v-model="newTask" @keydown.enter="addTask"/>
    
    <select v-model="filter">
        <option>All</option>
        <option value="done">Done</option>
        <option value="not_done">Not Done</option>
    </select>
    
    <ul>
        <li v-for="(task, i) in filteredTasks" :key="i">
            <button class="remove-button" @click="removeTask(i)">X</button>
            <span :class="{ 'done' : task.done}"> 
                {{ task.text }}
            </span>
            <input type="checkbox" v-model="task.done"/>
        </li>
    </ul>

    <button class="add-button" @click="addTask">Add</button>
</template>

<script setup>
    import taskManager from '@/modules/task-manager'

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