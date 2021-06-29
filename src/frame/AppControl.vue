<template>
  <div class="controls">
    <div class="item" @click="minimize">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-64"></use>
      </svg>
    </div>
    <div v-show="!isMax" class="item max" @click="maximize">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-65"></use>
      </svg>
    </div>
    <div v-show="isMax" class="item max" @click="unmaximize">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-66"></use>
      </svg>
    </div>
    <div class="item close" @click="close">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-63"></use>
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component";
import "./iconfont";
import { remote, BrowserWindow } from "electron";

export default class AppControl extends Vue {
  isMax = false;
  win!: BrowserWindow;

  created() {
    this.win = remote.getCurrentWindow();
    this.win.on("maximize", () => {
      this.isMax = true;
    });

    this.win.on("unmaximize", () => {
      this.isMax = false;
    });
  }

  maximize() {
    this.isMax = true;
    this.win.maximize();
  }

  unmaximize() {
    this.isMax = false;
    this.win.unmaximize();
  }

  minimize() {
    this.win.minimize();
  }

  close() {
    this.win.close();
  }
}
</script>

<style lang='scss' scoped>
.controls {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  z-index: 1000;
  -webkit-app-region: no-drag;
}

.item {
  padding: 2px 10px;
  &:hover {
    background-color: #ffffff22;
  }
}

.icon {
  width: 20px;
  height: 20px;
  fill: var(--color-text);
  transform: translateY(2px);
}

.max {
  svg {
    transform: translateY(2px) scale(0.8);
  }
}

.close {
  &:hover {
    background-color: #d71526;
  }
}
</style>