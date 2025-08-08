<template>
    <div class="add-task">Task Manager</div>
    <div class="add-task-complete">Add a task to complete</div>

    <button class="add-button" @click="addTask">Add</button>
    <input class="input-task" v-model="newTask" @keydown.enter="addTask"/>

    <select class="select-filter" v-model="filter">
        <option>All</option>
        <option value="done">Done</option>
        <option value="not_done">Not Done</option>
    </select>
    
    <div class="list-container">
        <ul>
            <li v-for="(task, i) in filteredTasks" :key="i">
                <input class="checkbox-done" type="checkbox" v-model="task.done"/>
                <button class="remove-button" @click="removeTask(i)">X</button>
                <span :class="{ 'done' : task.done}"> 
                    {{ task.text }}
                </span>
            </li>
        </ul>
    </div>

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

    .add-task {
        display: block;
        font-size: 4rem;
    }

    .add-task-complete
    {
        display: block;
        font-size: 2rem;
    }

    .add-button {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        top: 29.5dvh;
        left: 50dvw;
        transform: translate(-50%, -50%);
        border: 3px solid yellow;
        border-radius: 5px;
        cursor: pointer;
    }

    .input-task {
        display: flex;
        position: absolute;
        border: 2px solid green;
        border-radius: 5px;
        top: 25dvh;
        left: 50dvw;
        transform: translate(-50%, -50%);
        text-align: center;
        justify-content: center;
    }

    .select-filter {
        display: flex;
        position: absolute;
        top: 34dvh;
        left: 50dvw;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .list-container {
        display: block;
        position: absolute;
        top: 60dvh;
        left: 50dvw;
        transform: translate(-50%);
    }

    .remove-button {
        display: flex;
        position: absolute;
        width: 30px;
        height: 30px;
        left: -100px;
        border: 2px solid red;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .checkbox-done {
        position: absolute;
        margin-top: 0px;
        width: 30px;
        height: 30px;
        left: -50px;
        border: 2px solid red;
        border-radius: 5px;
        cursor: pointer;
    }

    ul {
        position: absolute;
        top: -20dvh;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: inline-block;
        position: relative;
        margin-bottom: 5px ;
        height: 30px;
        width: 300px;
        background-color: red;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        text-align: start;
    }

</style>