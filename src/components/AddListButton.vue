<template>
  <button class="mainButton" @click="addList">
    <font-awesome-icon  icon="plus"/>
    {{ text }}
  </button>
</template>

<script>

export default {
  name: 'AddListButton',
  props: {
    text: String
  },
  methods: {
    addList () {
      this.$store.dispatch('addLISTS', { title: 'Roman' })
    }
  }
}
</script>
<style lang="sass" scoped>
$blue: #2b6e6e
$white: #ffffff
.mainButton
  margin-top: 15px
  background-color: $blue
  color: $white
  font-size: 15px
  padding: 5px 10px
  border-radius: 6px
  border: 1px solid black
</style>
