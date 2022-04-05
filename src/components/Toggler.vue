<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input 
        type="checkbox" 
        :checked="(mode === 'dark') ? true : false"
        @change="toggle"
      >
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script setup>
  import { useTheme } from '../stores/useStore';
  import { storeToRefs } from 'pinia';

  const store = useTheme()
  const {mode} = storeToRefs(store)
  const {toggle} = store

</script>

<style>
  .toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    flex-basis: 10%;
  }
  .toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .toggler {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: .4s;
    cursor: pointer;
    border-radius: 40px;
  }
  .toggler::before {
    background-color: #000;
    border: 2px solid #000;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    top: 2px;
    left: 2px;
    transition: .4s;
    border-radius: 40px;
  }
  input:checked + .toggler {
    background-color: #4cff8e;
  }
  /* input:focus + .toggler {
    box-shadow: 0 0 2px #c2c2c2;
  } */
  input:checked + .toggler::before {
    transform: translateX(26px);
  }
</style>