<template>
  <button>
    <AddList text= 'AddTODOlist' />
  </button>
</template>

<script>
// @ is an alias to /src

import AddList from '@/components/AddList.vue'

export default {
  name: 'Home',
  components: {
    AddList
  },
  data () {
    return {
      AddTODOlist: 'dsjdgej'
    }
  }
}
</script>
