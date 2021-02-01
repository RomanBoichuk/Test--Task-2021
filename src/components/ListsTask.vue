<template>
  <div class="lists">
    <ul>
      <li v-for="(title, index) in ListsTask" v-bind:key="index">
        {{ title.title }}
        <div class="form-plus"></div>
        <input type="text" placeholder="введіть завдання" v-model='formtask'>
        <button @click.prevent="addTask">{{AddTask}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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
