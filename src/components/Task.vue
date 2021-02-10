<template>
  <div class="task">
      <div v-bind:class="{done:completed}">
        <input type="checkbox" @change="completed=!completed">
        <span></span>
        <span
          class="task-text"
          ref="element"
          :contenteditable="editTable"
          @click="doeditTable"
          >{{ texttask }}
        </span>
      </div>
    <div class="task-icon">
      <font-awesome-icon icon="sort"/>
      |
      <font-awesome-icon icon="pencil-alt" @click="focusSpan"/>
      |
      <font-awesome-icon icon="trash-alt"  @click="removeTask({taskIndex})"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      completed: false,
      editTable: true
    }
  },
  props: {
    texttask: String,
    taskIndex: Number
  },
  methods: {
    focusSpan () {
      this.editTable = true
      this.$refs.element.focus()
    },
    doeditTable () {
      this.editTable = true
    },
    removeTask (taskIndex) {
      console.log(1223)
      console.log(this.taskIndex)
      this.$store.dispatch('removeTask', this.taskIndex)
    }
  },
  computed: {
    ...mapState([
      'TaskInput'
    ])
  }
}
</script>

<style lang="sass" scoped>
$black: #404040
$yellow: #ffe033
$white: #ffffff
.task
  border: 1px solid $white
  color: $black
  padding: 15px 10px
  display: flex
  background: $white
  justify-content: space-between
  &:hover
    background: $yellow
  &:last-child
    border-radius: 0 0 10px 10px
.task-icon
  opacity: 0
  .task:hover &
    opacity: 1
.task-text
  margin-left: 20px
.done
  text-decoration: line-through
</style>
