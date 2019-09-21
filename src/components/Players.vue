<template>
  <div>
    <div class="card m-5">
      <div class="card-body">
        <!-- <h5 class="text-color-reverb">O TIME</h5> -->
        <div class="row">
          <div class="col-3" v-for="t in team" :key="t.nome">
            <div class="card m-1">
              <div class="card-body">
                <h5 class="text-color-reverb mb-0 pb-0">{{t.nick}}</h5>
                <p class="mt-0 pt-0 mb-0 pb-0">{{t.nome}} - {{t.funcao}}</p>
                <p class="mt-0 pt-0 mb-0 pb-0">
                  <a v-if="t.instagram === null && t.twitter === null">_</a>
                  <a v-if="t.instagram !== null" :href="'https://www.instagram.com/' + t.instagram" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  <a v-if="t.twitter !== null" :href="'https://www.twitter.com/' + t.twitter" target="_blank"><i class="fa fa-twitter pl-2" aria-hidden="true"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {},
  components: {

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
.card {
  border: 1px solid #6B4ABC;
}
</style>
