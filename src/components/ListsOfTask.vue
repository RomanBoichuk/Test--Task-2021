<template>
  <div class="lists">
    <div v-for="(title, index) in ListsTask" v-bind:key="index">
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
      'ListsTask'
    ])
  }
}
</script>

<style lang="sass">
</style>
