<template>
  <div class="mainForm">
    <div class="form-plus"></div>
    <input type="text" placeholder="введіть завдання" v-model='formtask'>
    <button @click.prevent="addform">{{AddForm}}</button>
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
    addform () {
      this.$store.dispatch('showMainTask', this.formtask)
      this.formtask = ''
      this.$store.dispatch('showAFORMS')
    }
  },
  computed: {
    ...mapState([
      'taskMainForm'
    ])
  }
}
</script>
