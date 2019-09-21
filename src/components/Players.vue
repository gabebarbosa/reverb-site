<template>
  <div>
    <div class="card m-5">
      <div class="card-body">
        <h5 class="text-color-reverb">O TIME</h5>

        <div class="col-md-3 m-b-5" v-for="t in team" :key="t.nome">
          {{t.nick}}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PlayerCard from '../components/PlayerCard.vue'

export default {
  props: {},
  components: {
    PlayerCard
  },
  data () {
    return {
      team: null
    }
  },
  mounted () {
    axios
      .get('https://5d867f9dcd71160014aae708.mockapi.io/reverb/team')
      .then(response => (
              this.team = response.data,
              console.log(this.team)

              )
      )
  }
}
</script>

<style scoped>
</style>
