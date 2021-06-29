<template>
  <win>
    <template #header>
      <div class="bar">
        App.vue
      </div>
    </template>
    <template #side>
      <div>
        side
      </div>
    </template>
    <template #footer>
      <div class="bar">
        footer
      </div>
    </template>
    <template #content>
      <hello-world msg="胡洪亮真帅" />
    </template>
  </win>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import Mac from './frame/MacFrame.vue'
import Win from './frame/WinFrame.vue'

@Options({
  components: {
    HelloWorld,
    Mac,
    Win,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --color-header: #3c3c3caa;
  --color-container: #222223;
  --color-border: #000000;
  --color-footer: #2A2A2Baa;
  --color-sider: #333333;
  --color-text: #D4D4D4; 
  --color-blue: #008EFF;
  --color-cyan: #48C0F4;
  --color-red: #FF5E57;
  --color-orange: #FEBC2E;
  --color-green: #28C740;
}

body {
  background-color: transparent !important;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-text);
  background-color: transparent;
}

.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>
