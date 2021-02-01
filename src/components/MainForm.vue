<template>
  <div class="mainForm">
    <div class="form-plus"></div>
    <input type="text" placeholder="введіть завдання" v-model='formtask'>
    <button @click.prevent="addMainform">{{AddForm}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      AddForm: 'ADD FRORM',
      formtask: '',
      FormTask: []
    }
  },
  methods: {
    addMainform () {
      // this.FormTask.push({ name: this.formtask })
      // this.$store.dispatch('addNEWFORM', this.FormTask)
      this.$store.dispatch('showMainForm', this.formtask)
      this.formtask = ''
      // console.log(this.$store.state.taskMainForm)
      this.$store.dispatch('showFORM')
    }
  },
  computed: {
    ...mapState([
      'taskMainForm'
    ])
  }
}
</script>
