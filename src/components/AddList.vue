<template>
  <button class="mainButton" @click="showform">
    {{ text }}
  </button>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'AddList',
  props: {
    text: String
  },
  methods: {
    showform () {
      this.$store.dispatch('showAFORMS')
    }
  }
}
</script>
