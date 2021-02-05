<template>
  <div class="task">
    <div v-bind:class="{done:completed}">
      <input type="checkbox" @change="completed=!completed">
      <span></span>
      <span class="task-text">buy bread</span>
    </div>
    <div class="task-icon">
      <font-awesome-icon icon="sort"/>
      |
      <font-awesome-icon icon="pencil-alt"/>
      |
      <font-awesome-icon icon="trash-alt"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      completed: false
    }
  }
}
</script>

<style lang="sass" scoped>
$black: #404040
$yellow: #ffe033
.task
  border: 1px solid $black
  color: $black
  padding: 15px 10px
  display: flex
  justify-content: space-between
  :hover &
    background: $yellow
.task-icon
  opacity: 0
  .task:hover &
    opacity: 1
.task-text
  margin-left: 20px
.done
  text-decoration: line-through
</style>
