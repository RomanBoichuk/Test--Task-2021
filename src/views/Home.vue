<template>
  <div>
    <ListsTask />
    <AddListButton :text= "AddTODOlist" />
  </div>
</template>

<script>
// @ is an alias to /src

import AddListButton from '@/components/AddListButton.vue'
import ListsTask from '@/components/ListsTask.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    AddListButton,
    ListsTask
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
