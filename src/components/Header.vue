<template>
<div class="elastigantt__header">
  <div class="elastigantt__header-options">
    <button class="elastigantt__btn-recenter btn btn-primary mr-4" @click="recenterPosition">{{root.state.locale.Now}}</button>
    <label class="mr-2">{{root.state.locale['X-Scale']}}<input type="range" v-model="scale" max="24" min="2"></label>
    <label class="mr-2">{{root.state.locale['Y-Scale']}}<input type="range" v-model="height" max="100" min="6"></label>
    <label class="mr-2">{{root.state.locale['Before/After']}}<input type="range" v-model="scope" max="31" min="0"></label>
    <label class="mr-2">{{root.state.locale['Task list width']}}<input type="range" v-model="divider" max="100" min="0"></label>
    <label class="mr-2"><input type="checkbox" class="mr-1" v-model="root.state.taskList.display">{{root.state.locale['Display task list']}}</label>
  </div>
</div>
</template>
<script>
let scaleTimeoutId = null;
export default {
  inject: ['root'],
  data() {
    return {
      localScale: 0,
    };
  },
  created() {
    this.localScale = this.root.state.times.timeZoom;
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
      this.$root.$emit('elastigantt.recenterPosition');
    },
    setScale(value) {
      if (scaleTimeoutId !== null) {
        clearTimeout(scaleTimeoutId);
        scaleTimeoutId = null;
      }
      // debouncing
      scaleTimeoutId = setTimeout(() => {
        this.$root.$emit('elastigantt.times.timeZoom.change', value);
        scaleTimeoutId = null;
      }, 75);
    },
  },
  computed: {
    scale: {
      get() {
        return this.localScale;
      },
      set(value) {
        this.localScale = Number(value);
        this.setScale(this.localScale);
      }
    },
    height: {
      get() {
        return this.root.state.row.height;
      },
      set(value) {
        this.$root.$emit('elastigantt.row.height.change', Number(value))
      }
    },
    scope: {
      get() {
        return this.root.state.scope.before;
      },
      set(value) {
        this.$root.$emit('elastigantt.scope.change', Number(value));
        this.$root.$emit('elastigantt.scope.before.change', Number(value));
        this.$root.$emit('elastigantt.scope.after.change', Number(value));
      }
    },
    divider: {
      get() {
        return this.root.state.taskList.percent;
      },
      set(value) {
        this.$root.$emit('elastigantt.taskList.width.change', Number(value));
      }
    }
  }
}
</script>
