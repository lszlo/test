<script setup>
import 'terminal.css';
</script>

<template>
  <div class="container mobile-size">
    <div class="terminal-nav">
      <div class="terminal-logo">
        <div class="logo terminal-prompt">
          <a href="./" class="no-style">Aurelio</a>
        </div>
      </div>
      <nav class="terminal-menu">
        <ul>
          <li>
            <router-link to="./" class="menu-item">Icons</router-link>
          </li>
          <li>
            <router-link to="./summoner-emotes" class="menu-item">Emotes</router-link>
          </li>
          <li>
            <router-link to="./Skins" class="menu-item">Skins</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="container">
    <div class="main">
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
    </div>
    <div class="footer">
      <hr />
      <footer>
        <header></header>
        <p>
          Css theme by
          <a href="https://terminalcss.xyz/" target="_blank">Terminal CSS</a>
          <span style="float:right;">
            Project by test/<a href="lszlo" target="_blank">Aurelio</a>
          </span>
        </p>
        <router-link to="./license">License</router-link>
      </footer>
    </div>
  </div>
</template>

<style>
.container {
  grid-template-rows: 1fr 1fr 1fr; /* or whatever you need */
}
</style>
