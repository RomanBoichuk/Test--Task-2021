<template>
  <div class="lists-of-task">
    <div v-for="(title, index) in ListsOfTask" v-bind:key="index">
      <ListTaskHeader />
      <TaskForm />
      <div v-for="(title,index) in TaskInput" v-bind:key="index">
        <Task :texttask = title.task :taskIndex = index />
      </div>
    </div>
  </div>
</template>

<script>
import ListTaskHeader from '@/components/ListTaskHeader.vue'
import TaskForm from '@/components/TaskForm.vue'
import Task from '@/components/Task.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ListTaskHeader,
    TaskForm,
    Task
  },
  data () {
    return {
      AddTask: 'ADD TASK',
      formtask: ''
    }
  },
  computed: {
    ...mapState([
      'ListsOfTask',
      'TaskInput'
    ])
  }
}
</script>

<style lang="sass">
.lists-of-task
  padding: 10%
</style>
