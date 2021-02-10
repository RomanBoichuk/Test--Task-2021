<template>
  <div class="task-form">
    <div class="form-plus">
      <font-awesome-icon  icon="plus"/>
    </div>
    <input class=form-input type="text" placeholder="введіть завдання" v-model=inputtask>
    <button class=form-button @click.prevent="addTask">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Add task',
      inputtask: ''
    }
  },
  methods: {
    addTask () {
      this.$store.dispatch('addNEWTASK', { task: this.inputtask })
      this.inputtask = ''
    }
  }
}
</script>

<style lang="sass" scoped>
$grey: #dcdcdc
$lightgrey: #f2f2f2
$green: #004d00
.task-form
  border: 1px solid $lightgrey
  background: $grey
  color: #fff
  display: flex
  padding: 15px 10px
  justify-content: space-between
.form-plus
  color: $green
  margin-left: 7px
  padding: 0 0 5px 0
.form-input
  width: 100%
  margin-left: 10px
  padding-left: 10%
  padding-right: 10%
.form-button
  width: 100px
  background: $green
  color: #fff
  margin-left: 0px
  margin-right: 0
</style>
