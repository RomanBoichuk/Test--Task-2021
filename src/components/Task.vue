<template>
  <div class="task">
    <div class="task-list">
      <input type="checkbox">
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

<style lang="sass" scoped>
$black: #404040
$yellow: #ffe033
.task
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
</style>
