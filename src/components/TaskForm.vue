<template>
  <div class="task--form">
    <div class="form-plus"></div>
    <input type="text" placeholder="введіть завдання">
    <button @click.prevent="addTask">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Add task'
    }
  }
}
</script>
