<template>
  <button class="mainButton" @click="addList">
    {{ text }}
  </button>
</template>

<script>

export default {
  name: 'AddList',
  props: {
    text: String
  },
  methods: {
    addList () {
      this.$store.dispatch('addMainForm', { title: 'Roman' })
    }
  }
}
</script>
