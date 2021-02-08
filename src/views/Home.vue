<template>
  <div class="home">
    <ListsOfTask />
    <AddListButton :text= "AddTODOlist" />
  </div>
</template>

<script>
// @ is an alias to /src

import AddListButton from '@/components/AddListButton.vue'
import ListsOfTask from '@/components/ListsOfTask.vue'

export default {
  name: 'Home',
  components: {
    AddListButton,
    ListsOfTask
  },
  data () {
    return {
      AddTODOlist: 'ADD TODO LIST'
    }
  }
}
</script>
<style lang="sass">
</style>
