<template>
  <div class="task">
    <label>
      <div v-bind:class="{done:completed}">
        <input type="checkbox" @change="completed=!completed">
        <span></span>
        <span
          class="task-text"
          ref="element"
          :contenteditable="editTable"
          @click="doeditTable"
          >buy bread
        </span>
      </div>
    </label>
    <div class="task-icon">
      <font-awesome-icon icon="sort"/>
      |
      <font-awesome-icon icon="pencil-alt" @click="focusSpan"/>
      |
      <font-awesome-icon icon="trash-alt"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      completed: false,
      editTable: true
    }
  },
  methods: {
    focusSpan () {
      this.editTable = true
      this.$refs.element.focus()
    },
    doeditTable () {
      this.editTable = true
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
