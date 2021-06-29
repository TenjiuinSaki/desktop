<template>
  <div class="container">
    <div class="bar app-bar header" :style="header_style">
      <app-control /> 
      <slot name="header" />
    </div>
    <div class="main grid" :style="main_style">
      <div class="sider">
        <slot name="side" />
      </div>
      <div class="content" :style="content_style">
        <slot name="content" />
      </div>
    </div>
    <div class="bar footer" :style="footer_style">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import AppControl from './AppControl.vue'

@Options({
  components: {
    AppControl
  }
})
export default class WinFrame extends Vue {
  @Prop({
    default: 30
  }) 
  header!: number;

  @Prop({
    default: 30
  })
  footer!: number;
  @Prop({
    default: 50
  })
  sider!: number;

  get main_style() {
    return {
      "grid-template-columns": `${this.sider}px 1fr`,
      "grid-template-rows": `${this.header}px 1fr ${this.footer}px`
    };
  }

  get content_style() {
    return {
      padding: `${this.header}px 0 ${this.footer}px`,
    };
  }

  get header_style() {
    return {
      height: this.header + "px",
    };
  }

  get footer_style() {
    return {
      height: this.footer + "px",
    };
  }
}
</script>

<style scoped lang='scss'>
*::-webkit-scrollbar {
  display: none;
}

.grid {
  display: grid;

  > div {
    height: 100%;
    overflow: auto;
  }
}

.container {
  position: relative;
  height: 100vh;
  user-select: none;
  background-color: var(--color-container);

  .app-bar {
    -webkit-app-region: drag;
  }

  .bar {
    position: absolute;
    z-index: 100;
    backdrop-filter: blur(10px);
    right: 0;
    left: 0;

    &.header {
      background-color: var(--color-header);
      top: 0;
      height: 30px;
    }

    &.footer {
      background-color: var(--color-footer);
      bottom: 0;
      height: 30px;
    }
  }
}

.main {
  grid-template-columns: 50px 1fr;
  grid-template-rows: 30px 1fr 30px;
  height: 100%;

  .sider {
    background-color: var(--color-sider);
    grid-row-start: 2;
  }

  .content {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 2;
  }
}
</style>