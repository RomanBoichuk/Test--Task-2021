<template>
  <div>
    <ListsOfTask />
    <AddListButton :text= "AddTODOlist" />
  </div>
</template>

<script>
// @ is an alias to /src

import AddListButton from '@/components/AddListButton.vue'
import ListsOfTask from '@/components/ListsOfTask.vue'
import { mapState } from 'vuex'

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
  },
  computed: mapState([
    'showform'
  ])
}
</script>
