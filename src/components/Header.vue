<template>
<div class="elastigantt__header">
  <label>X scale:<input type="range" v-model="scale" max="24" min="2"></label>
  <label>Y scale:<input type="range" v-model="height" max="100" min="6"></label>
  <!--<input type="range" v-model="scope" max="100" min="0">-->
  <label>Task list width:<input type="range" v-model="divider" max="100" min="0"></label>
  <label><input type="checkbox" v-model="root.state.taskList.display">Display task list</label>
  <!--<button class="elastigantt__btn-img" @click="getImage">Get image</button>-->
  <button class="elastigantt__btn-recenter" @click="recenterPosition">Recenter</button>
  {{root.state.scroll.tree.dateTime.left}} - {{root.state.scroll.tree.dateTime.right}}
</div>
</template>
<script>
export default {
  inject: ['root'],
  data() {
    return {};
  },
  methods: {
    getImage() {
      const code = this.root.getImage('image/png').then(imgB64 => {
        const link = document.createElement('a');
        link.href = imgB64;
        link.download = 'Elastigantt.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    recenterPosition() {
      this.root.$emit('recenterPosition')
    }
  },
  computed: {
    scale: {
      get() {
        return this.root.state.times.timeZoom;
      },
      set(value) {
        this.root.state.times.timeZoom = Number(value);
      }
    },
    height: {
      get() {
        return this.root.state.row.height;
      },
      set(value) {
        this.root.state.row.height = Number(value);
        this.root.calculateTaskListColumnsWidths();
      }
    },
    scope: {
      get() {
        return this.root.state.scope.before;
      },
      set(value) {
        this.root.state.scope.before = Number(value);
        this.root.state.scope.after = Number(value);
      }
    },
    divider: {
      get() {
        return this.root.state.taskList.percent;
      },
      set(value) {
        this.root.state.taskList.percent = Number(value);
        this.root.calculateTaskListColumnsWidths();
      }
    }
  }
}
</script>
