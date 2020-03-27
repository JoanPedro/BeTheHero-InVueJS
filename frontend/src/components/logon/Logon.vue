<template>
  <div> 
      <div class="logon-container">
        <section class="form">
          <img :src="logoImg" alt="Be The Hero" />
          <form>
            <h1> Faça seu logon </h1>
            <input placeholder="Sua ID" />
            <button class="button" type="submit"> Entrar </button>
              <router-link to="/register" class="back-link"> <!-- Para evitar reload da paǵina. -->
                <LogInIcon size="16" color="#E02041"/>
                Não tenho cadastro
              </router-link>
          </form>
        </section>
        <img :src="heroesImg" alt="Heroes" />
      </div>
  </div>
</template>

<script>
import LogoImage from '../../assets/logo.svg'
import HeroesImage from '../../assets/heroes.png'
import { LogInIcon } from 'vue-feather-icons'

export default {
    name: 'Logon',
    components: {
      LogInIcon
    },
    data: function(){
      return {
        heroesImg: HeroesImage,
        logoImg: LogoImage
      }
    }

}
</script>

<style>
.logon-container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center; /* Verticalmente */
  justify-content: center; /* Horizontalmente */
}

.logon-container section.form {
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
}

.logon-container section.form form {
  margin-top: 100px;
}

.logon-container section.form form h1 {
  font-size: 32px;
  margin-bottom: 32px;
}

</style>