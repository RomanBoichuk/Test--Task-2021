<template>
  <div>
    <MainForm />
    <AddList :text= "AddTODOlist" />
  </div>
</template>

<script>
// @ is an alias to /src

import AddList from '@/components/AddList.vue'
import MainForm from '@/components/MainForm.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    AddList,
    MainForm
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
