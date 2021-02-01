<template>
  <button class="mainButton" @click="showform">
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
    showform () {
      this.$store.dispatch('showFORM')
    }
  }
}
</script>
