<template>
<g>
  <defs>
    <pattern id="diagonalHatch" :width="root.state.progress.width" :height="root.state.progress.width" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" :y2="root.state.progress.width" :style="root.state.progress.styles.line" />
    </pattern>
  </defs>
  <!--<rect id="elastigantt__tree-row-progress" x="0" y="0" height="30%" :width="getProgressWidth" style="fill:#00ff92a0"></rect>-->
  <rect :x="getProgressWidth" y="0" :width="100-task.progress+'%'" height="100%" :style="root.state.progress.styles.bar"></rect>
  <path :d="getLinePoints" :style="getLineStyle"></path>
</g>
</template>
<script>
export default {
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    getProgressWidth() {
      return this.task.progress + '%';
    },
    getLinePoints() {
      const start = this.task.width / 100 * this.task.progress;
      return `M ${start} 0 L ${start} ${this.task.height}`;
    },
    getLineStyle() {
      return {
        stroke: this.root.state.row.styles.bar.stroke + 'a0',
        'stroke-width': this.root.state.row.styles.bar['stroke-width'] / 2
      };
    }
  }
}
</script>
