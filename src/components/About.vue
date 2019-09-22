<template>
  <div>
    <div class="card m-5">
      <div class="card-body row">
        <div class="col-md-4">
          <h5 class="text-color-reverb">SOBRE A REVERB</h5>
          Organização que preza pelo desenvolvimento profissional dos nossos membros utilizando metodologias ágeis.
          <div class="text-center"> 
            <img src="../assets/_corpo.png" class="img-about">
          </div>
        </div>

        <div class="col-md-4">
          <h5 class="text-color-reverb">AGILIDADE</h5>
          Os métodos ágeis tem sido usados em muitas organizações com o intuito de aumentar a produtividade, gerar resultados mais rapidamente, reduzir os riscos, etc. Na Reverb estamos adaptando a metodologia ágil SCRUM.
          <h5 class="text-color-reverb">SCRUM</h5>
          Scrum é uma metodologia ágil geralmente utilizada para gestão e planejamento de projetos de software. No Scrum, os projetos são dividos em ciclos chamados de Sprints. O Sprint representa um Time Box dentro do qual um conjunto de atividades deve ser executado.
        </div>

        <div class="col-md-4 scroll">
          <twitter>
            <div slot="loading">loading .....</div>
            <a class="twitter-timeline" href="https://twitter.com/reverbesports?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a>
          </twitter>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style scoped>
.scroll {
    max-height: 350px;
    overflow-y: auto;
}

.img-about {
  max-width: 70%;
}
</style>
