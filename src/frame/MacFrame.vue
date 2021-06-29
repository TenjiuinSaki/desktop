<template>
  <div class="main grid" :style="main_style">
    <div class="sider grid">
      <div class="app-bar"></div>
      <div>
        <slot name="side" />
      </div>
    </div>
    <div class="container">
      <div class="bar app-bar header" :style="header_style">
        <slot name="header" />
      </div>
      <div class="content" :style="content_style">
        <slot name="content" />
      </div>
      <div class="bar app-bar footer" :style="footer_style">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class MacFrame extends Vue {
  @Prop({
    default: 53
  }) 
  header!: number;

  @Prop({
    default: 28
  })
  footer!: number;
  @Prop({
    default: 150
  })
  sider!: number;

  get main_style() {
    return {
      "grid-template-columns": `${this.sider}px 1fr`,
    };
  }

  get content_style() {
    return {
      "padding": `${this.header}px 0 ${this.footer}px`,
    };
  }

  get header_style() {
    return {
      height: this.header + 'px',
    }
  }

  get footer_style() {
    return {
      height: this.footer + 'px',
    }
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

.main {
  height: 100vh;
  grid-template-columns: 150px 1fr;
  user-select: none;

  .app-bar {
    -webkit-app-region: drag;
  }

  .container {
    background-color: var(--color-container);
    position: relative;
  }

  .sider {
    grid-template-rows: 44px 1fr;
    border-right: 1px solid var(--color-border);
  }

  .bar {
    position: absolute;
    z-index: 100;
    backdrop-filter: blur(10px);
    right: 0;
    left: 0;

    &.header {
      background-color: var(--color-header);
      border-bottom: 1px solid var(--color-border);
      top: 0;
      height: 50px;
    }

    &.footer {
      background-color: var(--color-footer);
      border-top: 1px solid var(--color-border);
      bottom: 0;
      height: 30px;
    }
  }

  .content {
    height: 100%;
    overflow: auto;
    padding: 50px 0 30px;
  }
}
</style>