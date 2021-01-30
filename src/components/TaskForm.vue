<template>
  <div class="mainForm">
    <form>
      <ul>
        <li v-for="(task, index) in taskMainForm" v-bind:key="index">
          {{ task }}
          <div class="form-plus"></div>
          <input type="text" placeholder="введіть завдання">
          <button @click.prevent="addform">Add Task</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'taskMainForm'
    ])
  }
}
</script>
