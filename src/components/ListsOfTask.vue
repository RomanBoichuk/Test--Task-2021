<template>
  <div class="lists-of-task">
    <div v-for="(title, index) in ListsOfTask" v-bind:key="index">
      <ListTaskHeader />
      <TaskForm />
      <div>
        <Task />
        <Task />
        <Task />
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
      'ListsOfTask'
    ])
  }
}
</script>

<style lang="sass">
.lists-of-task
  padding: 10%
</style>
