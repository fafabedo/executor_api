<template>
  <div>
    {{payload}}
  </div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData({params}) {
    const { data: payload } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
    return {
      payload
    }
  }
}
</script>
