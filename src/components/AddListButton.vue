<template>
  <button class="mainButton" @click="addList">
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
