<template>
<div class="elastigantt__header">
  <div class="elastigantt__header-title">
    <div :style="root.state.title.style" v-if="!root.state.title.html">{{root.state.title.label}}</div>
    <div :style="root.state.title.style" v-if="root.state.title.html" v-html="root.state.title.label"></div>
  </div>
  <div class="elastigantt__header-options">
    <button class="elastigantt__btn-recenter" :style="buttonStyle" @click="recenterPosition">{{root.state.locale.Now}}</button>
    <label>{{root.state.locale['X-Scale']}}
      <div :style="sliderWrapperStyle">
        <vue-slider tooltip="false" tooltip-dir="right" :process-style="processStyle" :slider-style="sliderStyle" v-model="scale" max="24" min="2" width="100px"></vue-slider>
      </div>
    </label>
    <label>{{root.state.locale['Y-Scale']}}
      <div :style="sliderWrapperStyle">
        <vue-slider tooltip="false" tooltip-dir="right" :process-style="processStyle" :slider-style="sliderStyle" v-model="height" max="100" min="6" width="100px"></vue-slider>
      </div>
    </label>
    <label>{{root.state.locale['Before/After']}}
      <div :style="sliderWrapperStyle">
        <vue-slider tooltip="false" tooltip-dir="right" :process-style="processStyle" :slider-style="sliderStyle" v-model="scope" max="31" min="0" width="100px"></vue-slider>
      </div>
    </label>
    <label>{{root.state.locale['Task list width']}}
      <div :style="sliderWrapperStyle">
        <vue-slider tooltip="false" tooltip-dir="right" :process-style="processStyle" :slider-style="sliderStyle" v-model="divider" max="100" min="0" width="100px"></vue-slider>
      </div>
    </label>
    <label class="elastigantt__header-task-list-switch" :style="taskListSwitchStyle">
      <switches class="mr-1" v-model="root.state.taskList.display"></switches> {{root.state.locale['Display task list']}}
    </label>
  </div>
</div>
</template>
<script>
import vueSlider from 'vue-slider-component/src/vue2-slider.vue';
import Switches from 'vue-switches';
export default {
  components: {
    vueSlider,
    Switches
  },
  inject: ['root'],
  data() {
    return {
      scaleTimeoutId: null,
      firstScale: false,
      localScale: this.root.state.times.timeZoom,
      localHeight: this.root.state.row.height,
      localBefore: this.root.state.scope.before,
      localPercent: this.root.state.taskList.percent,
      buttonStyle: {
        background: '#95A5A6',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        color: 'white',
        'border-radius': '6px',
        'margin-right': '27px',
        'font-size': '16px',
        'padding': '6px 12px'
      },
      sliderStyle: {},
      processStyle: {
        background: '#ccc'
      },
      sliderOptions: {
        xScale: {
          value: this.root.state.times.timeZoom
        },

      },
      sliderWrapperStyle: {
        'display': 'inline-block',
        'vertical-align': 'bottom'
      },
      taskListSwitchStyle: {
        'margin-left': '15px',
      }
    };
  },
  created() {
    this.localScale = this.root.state.times.timeZoom;
    this.localHeight = this.root.state.row.height;
    this.localBefore = this.root.state.scope.before;
    this.localPercent = this.root.state.taskList.percent;
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
      console.log('recenter', this)
      this.$root.$emit('elastigantt.recenterPosition');
    },
    setScale(value) {
      if (this.scaleTimeoutId !== null) {
        clearTimeout(this.scaleTimeoutId);
        this.scaleTimeoutId = null;
      }
      // debouncing
      if (this.firstScale) {
        this.scaleTimeoutId = setTimeout(() => {
          this.$root.$emit('elastigantt.times.timeZoom.change', value);
          this.scaleTimeoutId = null;
        }, 75);
      } else {
        this.$root.$emit('elastigantt.times.timeZoom.change', value);
        this.firstScale = true;
      }
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
        return this.localHeight;
      },
      set(value) {
        this.localHeight = Number(value);
        this.$root.$emit('elastigantt.row.height.change', Number(value))
      }
    },
    scope: {
      get() {
        return this.localBefore;
      },
      set(value) {
        this.localBefore = Number(value);
        this.$root.$emit('elastigantt.scope.change', Number(value));
        this.$root.$emit('elastigantt.scope.before.change', Number(value));
        this.$root.$emit('elastigantt.scope.after.change', Number(value));
      }
    },
    divider: {
      get() {
        return this.localPercent;
      },
      set(value) {
        this.localPercent = Number(value);
        this.$root.$emit('elastigantt.taskList.width.change', Number(value));
      }
    }
  },
}
</script>
