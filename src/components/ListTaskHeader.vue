<template>
  <div class="list--task--header">
    <div>
      <font-awesome-icon icon="th-list"/>
      <div class="tasks--title">
        header here
      </div>
      <div class="tasks--options">
        <font-awesome-icon icon="pencil-alt"/>
        |
        <font-awesome-icon icon="trash-alt"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$blueLight: #39B7CD
$blueDark: #53868B
.tasks--options
  opacity: 0
  .list--task--header:hover &
    opacity: 1
.list--task--header
   border-radius: 2px
   border: 1px solid $blueDark
   box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, .8)
   padding: 10px 15px
   background: $blueLight
   background: linear-gradient(0deg, $blueDark 0%, $blueLight 100%)
   color: #fff
   & > div
    display: flex
    justify-content: space-between
</style>
