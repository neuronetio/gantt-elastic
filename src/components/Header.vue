<!--
/**
 * @fileoverview Header component
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
-->
<template>
  <div class="gantt-elastic__header" :style="root.style('header')">
    <div class="gantt-elastic__header-title" :style="root.style('header-title')">
      <div
        class="gantt-elastic__header-title--text"
        :style="root.style('header-title--text')"
        v-if="!root.state.options.title.html"
      >
        {{ root.state.options.title.label }}
      </div>
      <div
        class="gantt-elastic__header-title--html"
        :style="root.style('header-title--html')"
        v-if="root.state.options.title.html"
        v-html="root.state.options.title.label"
      ></div>
    </div>
    <div class="gantt-elastic__header-options" :style="root.style('header-options')">
      <component v-if="beforeOptionsIsComponent" :is="root.state.options.slots.header.beforeOptions"></component>
      <div
        class="gantt-elastic__slot-header-beforeOptions"
        :style="root.style('slot-header-beforeOptions')"
        v-if="beforeOptionsIsHtml"
        v-html="root.state.options.slots.header.beforeOptions"
      ></div>
      <button
        class="gantt-elastic__header-btn-recenter"
        :style="root.style('header-btn-recenter')"
        @click.prevent="recenterPosition"
      >
        {{ root.state.options.locale.Now }}
      </button>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{ root.state.options.locale['X-Scale'] }}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="scale"
            :max="24"
            :min="2"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{ root.state.options.locale['Y-Scale'] }}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="height"
            :max="100"
            :min="7"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{ root.state.options.locale['Before/After'] }}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="scope"
            :max="31"
            :min="0"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label class="gantt-elastic__header-label" :style="root.style('header-label')">
        {{ root.state.options.locale['Task list width'] }}
        <div class="gantt-elastic__header-slider-wrapper" :style="root.style('header-slider-wrapper')">
          <vue-slider
            class="gantt-elastic__header-slider"
            tooltip="false"
            :process-style="root.style('header-slider--process')"
            :slider-style="root.style('header-slider--slider')"
            v-model="divider"
            :max="100"
            :min="0"
            width="100px"
          ></vue-slider>
        </div>
      </label>
      <label
        class="gantt-elastic__header-task-list-switch--wrapper"
        :style="root.style('header-task-list-switch--label')"
      >
        <switches
          class="gantt-elastic__header-task-list-switch"
          :style="root.style('header-task-list-switch')"
          v-model="root.state.options.taskList.display"
        ></switches>
        {{ root.state.options.locale['Display task list'] }}
      </label>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component/src/vue2-slider.vue';
import Switches from 'vue-switches';
export default {
  name: 'GanttHeader',
  components: {
    vueSlider,
    Switches
  },
  inject: ['root'],
  data() {
    return {
      scaleTimeoutId: null,
      firstScale: false,
      localScale: this.root.state.options.times.timeZoom,
      localHeight: this.root.state.options.row.height,
      localBefore: this.root.state.options.scope.before,
      localPercent: this.root.state.options.taskList.percent,
      sliderOptions: {
        xScale: {
          value: this.root.state.options.times.timeZoom
        }
      }
    };
  },
  created() {
    this.localScale = this.root.state.options.times.timeZoom;
    this.localHeight = this.root.state.options.row.height;
    this.localBefore = this.root.state.options.scope.before;
    this.localPercent = this.root.state.options.taskList.percent;
  },
  methods: {
    getImage() {
      this.root.getImage('image/png').then(imgB64 => {
        const link = document.createElement('a');
        link.href = imgB64;
        link.download = 'gantt-elastic.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    recenterPosition() {
      this.root.$emit('recenterPosition');
    },
    setScale(value) {
      if (this.scaleTimeoutId !== null) {
        clearTimeout(this.scaleTimeoutId);
        this.scaleTimeoutId = null;
      }
      // debouncing
      if (this.firstScale) {
        this.scaleTimeoutId = setTimeout(() => {
          this.root.$emit('times-timeZoom-change', value);
          this.scaleTimeoutId = null;
        }, 50);
      } else {
        this.root.$emit('times-timeZoom-change', value);
        this.firstScale = true;
      }
    }
  },
  computed: {
    /**
     * If there is a component slot specified for header
     * @returns {bool}
     */
    beforeOptionsIsComponent() {
      const headerSlot = this.root.state.options.slots.header;
      if (typeof headerSlot.beforeOptions === 'object' && !Array.isArray(headerSlot.beforeOptions)) {
        return true;
      }
      return false;
    },
    /**
     * If there is a slot with beforeOptions html content
     * @returns {bool}
     */
    beforeOptionsIsHtml() {
      if (typeof this.root.state.options.slots.header.beforeOptions === 'string') {
        return true;
      }
      return false;
    },
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
        this.root.$emit('row-height-change', Number(value));
      }
    },
    scope: {
      get() {
        return this.localBefore;
      },
      set(value) {
        this.localBefore = Number(value);
        this.root.$emit('scope-change', Number(value));
      }
    },
    divider: {
      get() {
        return this.localPercent;
      },
      set(value) {
        this.localPercent = Number(value);
        this.root.$emit('taskList-width-change', Number(value));
      }
    }
  }
};
</script>
