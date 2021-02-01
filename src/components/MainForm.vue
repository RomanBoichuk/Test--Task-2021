<template>
  <div class="mainForm">
    <ul>
      <li v-for="(title, index) in MainForm" v-bind:key="index">
        {{ title.title }}
        <div class="form-plus"></div>
        <input type="text" placeholder="введіть завдання" v-model='formtask'>
        <button @click.prevent="addMainform">{{AddTask}}</button>
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
      'MainForm'
    ])
  }
}
</script>
