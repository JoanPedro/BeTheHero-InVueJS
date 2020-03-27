<template>
  <div id="app" class="">
      <Logon />
  </div>
</template>

<script>
import Logon from '@/components/logon/Logon'
export default {
  name: 'app',
  components: {
    Logon
  }
}
</script>

<style>

input, button, textarea {
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

 input {
  width: 100%;
  height: 60px;
  color: #333;
  background: #ffff;
  border: 1px solid #DCDCE6;
  border-radius: 8px;
  padding: 0 24px;
}

.button {
  width: 100%;
  height: 60px;
  background: #E02041;
  border: 0;
  border-radius: 8px;
  color: #FFF;
  font-weight: bold;
  margin-top: 16px;

  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
    
  transition: filter 0.2s;
}

.button:hover {
  filter: brightness(90%);
}

</style>