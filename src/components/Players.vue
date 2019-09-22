<template>
  <div>
    <div class="card m-5">
      <div class="card-body">
        <!-- <h5 class="text-color-reverb">O TIME</h5> -->
        <div class="row">
          <div class="col-md-4" v-for="t in team" :key="t.nome">
            <div class="card m-1">
              <div class="card-body row">
                <div class="col-md-4">
                  <img v-if="t.img === null || t.img === undefined" src="../assets/_wave_3.png" class="rounded-circle img-perfil">
                  <img v-if="t.img !== null && t.img !== undefined" :src="t.img" class="rounded-circle img-perfil">
                </div>
                <div class="col-md-8">
                  <h5 class="text-color-reverb mb-0 pb-0">
                    {{t.nick}}
                    <a v-if="t.instagram !== null" :href="'https://www.instagram.com/' + t.instagram" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a v-if="t.twitter !== null" :href="'https://www.twitter.com/' + t.twitter" target="_blank"><i class="fa fa-twitter pl-2" aria-hidden="true"></i></a>
                  </h5>
                  <p class="mt-0 pt-0 mb-0 pb-0">{{t.nome}}</p>
                  <p class="mt-0 pt-0 mb-0 pb-0">{{t.funcao}}</p>
                </div>
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
              this.team.sort((a, b) => (a.nick > b.nick) ? 1 : -1)
              )
      )
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #6B4ABC;
}

.img-perfil {
  max-width: 100%;
}
</style>
