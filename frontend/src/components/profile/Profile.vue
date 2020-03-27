<template>
  <div class="profile-container">
      <header> 
          <img :src="logoImg" alt="Be The Hero" />
          <span> Bem vinda, APAD</span>

          <router-link to="/incidents/new" class="button button-link"> <!-- Para evitar reload da paǵina. -->
                Cadastrar Novo Caso.
          </router-link>
          <button type="button"> 
              <PowerIcon size="18" color="#E02041" />
          </button>
      </header>

      <h1> Casos Cadastrados </h1>

      <ul>
          <li>
            <strong> CASOS: </strong>
            <p>Caso Teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p> Descrição Teste </p>

            <strong>Valor:</strong>
            <p> R$: 120,00 </p>

            <button type="button">
                <Trash2Icon size="20" color="#A8A8B3" />
            </button>
          </li>
      </ul>

      <ul>
          <li>
            <strong> CASOS: </strong>
            <p>Caso Teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p> Descrição Teste </p>

            <strong>Valor:</strong>
            <p> R$: 120,00 </p>

            <button type="button">
                <Trash2Icon size="20" color="#A8A8B3" />
            </button>
          </li>
      </ul>

      <ul>
          <li>
            <strong> CASOS: </strong>
            <p>Caso Teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p> Descrição Teste </p>

            <strong>Valor:</strong>
            <p> R$: 120,00 </p>

            <button type="button">
                <Trash2Icon size="20" color="#A8A8B3" />
            </button>
          </li>
      </ul>

      <ul>
          <li>
            <strong> CASOS: </strong>
            <p>Caso Teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p> Descrição Teste </p>

            <strong>Valor:</strong>
            <p> R$: 120,00 </p>

            <button type="button">
                <Trash2Icon size="20" color="#A8A8B3" />
            </button>
          </li>
      </ul>
  </div>
</template>

<script>
import LogoImage from '../../assets/logo.svg'
import { PowerIcon } from 'vue-feather-icons'
import { Trash2Icon } from 'vue-feather-icons'
export default {
    name: 'Profile',
    components: { PowerIcon, Trash2Icon },
    data: function () {
        return {
            logoImg: LogoImage,
        }
    }
}
</script>

<style>
.profile-container {
    width: 100%;
    max-width: 1180px;
    padding: 0px 30px;
    margin: 32px auto;
}

.profile-container header {
    display: flex;
    align-items: center;
}

.profile-container header span {
    font-size: 20px;
    margin-left: 24px;
}

.profile-container header img {
    height: 64px;
}

.profile-container header a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
}

.profile-container header button {
    height: 40px;
    width: 40px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
}

.profile-container header button:hover {
    border-color: #999;
}

.profile-container h1 {
    margin-top: 80px;
    margin-bottom: 24px;
}

.profile-container ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
}

.profile-container ul li {
    background: #FFF;
    padding: 24px;
    border-radius: 8px;
    position: relative;
}

.profile-container ul li button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0psx
}
</style>