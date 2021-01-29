<template>
  <div class="home">
    <Home1 msg="Welcome to Your Vue.js App"/>
    <form  @submit.prevent="ADD">
      <ul>
        <draggable v-model="todoList1" group="people" @start="drag=true" @end="drag=false">
          <div v-for="element in todoList1" :key="element.id">{{element.name}}</div>
        </draggable>
      </ul>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Home1 from '@/components/Home1.vue'
import AddList from '@/components/AddList.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Home',
  components: {
    Home1,
    AddList,
    draggable
  },
  data () {
    return {
      // todoList: [
      //   { name: 'Alex' },
      //   { name: 'Jon' },
      //   { name: 'Valdemar' }
      // ],
      todoList1: []
    }
  },
  methods: {
    ADD () {
      const todoList = {
        name: 'Alex'
      }
      // name: 'Jon',
      // name: 'Valdemar'}
      this.todoList1.push(todoList)
      console.log(this.todoList1)
      // console.log(this.todoList)
      // const todoList1 = this.todoList
      // this.todoList1 = todoList1
      // console.log(this.todoList1, 'ppppppppp')
      // console.log(todoList1, 'khakgaj')
    }
  },
  mounted () {
    this.ADD()
  }
}
// <form  @submit.prevent="ADD">
//   <ul>
//     <li v-for = "nazva in todoList1" :key="nazva._id">
//     {{nazva.name}}
//     </li>
//     |
//   </ul>
//   <button>Add</button>
// </form>
</script>
