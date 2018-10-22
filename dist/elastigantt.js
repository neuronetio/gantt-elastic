var Elastigantt = (function () {
  'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // Unsharp text [#166](https://github.com/NightCatSama/vue-slider-component/issues/166)
  const roundToDPR = (function () {
    const r = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    return value => Math.round(value * r) / r
  })();

  var script = {
    name: 'VueSliderComponent',
    props: {
      width: {
        type: [Number, String],
        default: 'auto'
      },
      height: {
        type: [Number, String],
        default: 6
      },
      data: {
        type: Array,
        default: null
      },
      dotSize: {
        type: Number,
        default: 16
      },
      dotWidth: {
        type: Number,
        required: false
      },
      dotHeight: {
        type: Number,
        required: false
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      interval: {
        type: Number,
        default: 1
      },
      show: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: [Boolean, Array],
        default: false
      },
      piecewise: {
        type: Boolean,
        default: false
      },
      tooltip: {
        type: [String, Boolean],
        default: 'always'
      },
      eventType: {
        type: String,
        default: 'auto'
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      reverse: {
        type: Boolean,
        default: false
      },
      lazy: {
        type: Boolean,
        default: false
      },
      clickable: {
        type: Boolean,
        default: true
      },
      speed: {
        type: Number,
        default: 0.5
      },
      realTime: {
        type: Boolean,
        default: false
      },
      stopPropagation: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number, Array, Object],
        default: 0
      },
      piecewiseLabel: {
        type: Boolean,
        default: false
      },
      debug: {
        type: Boolean,
        default: true
      },
      fixed: {
        type: Boolean,
        default: false
      },
      minRange: {
        type: Number
      },
      maxRange: {
        type: Number
      },
      processDragable: {
        type: Boolean,
        default: false
      },
      useKeyboard: {
        type: Boolean,
        default: false
      },
      actionsKeyboard: {
        type: Array,
        default () {
          return [(i) => i - 1, (i) => i + 1]
        }
      },
      tooltipMerge: {
        type: Boolean,
        default: true
      },
      startAnimation: {
        type: Boolean,
        default: false
      },
      enableCross: {
        type: Boolean,
        default: true
      },
      sliderStyle: [Array, Object, Function],
      focusStyle: [Array, Object, Function],
      tooltipDir: [Array, String],
      formatter: [String, Function],
      mergeFormatter: [String, Function],
      piecewiseStyle: Object,
      disabledStyle: Object,
      piecewiseActiveStyle: Object,
      processStyle: Object,
      bgStyle: Object,
      tooltipStyle: [Array, Object, Function],
      disabledDotStyle: [Array, Object, Function],
      labelStyle: Object,
      labelActiveStyle: Object
    },
    data () {
      return {
        flag: false,
        dragFlag: false,
        crossFlag: false,
        keydownFlag: null,
        focusFlag: false,
        processFlag: false,
        processSign: null,
        size: 0,
        fixedValue: 0,
        focusSlider: 0,
        currentValue: 0,
        currentSlider: 0,
        isComponentExists: true,
        isMounted: false
      }
    },
    computed: {
      dotWidthVal () {
        return typeof this.dotWidth === 'number' ? this.dotWidth : this.dotSize
      },
      dotHeightVal () {
        return typeof this.dotHeight === 'number' ? this.dotHeight : this.dotSize
      },
      flowDirection () {
        return `vue-slider-${this.direction + (this.reverse ? '-reverse' : '')}`
      },
      tooltipMergedPosition () {
        if (!this.isMounted) return {}

        const tooltipDirection = this.tooltipDirection[0];
        const dot0 = this.$refs.dot0;

        if (dot0) {
          if (this.direction === 'vertical') {
            const style = {};
            style[tooltipDirection] = `-${(this.dotHeightVal / 2) - (this.width / 2) + 9}px`;
            return style
          } else {
            const style = {};
            style[tooltipDirection] = `-${(this.dotWidthVal / 2) - (this.height / 2) + 9}px`;
            style['left'] = `50%`;
            return style
          }
        }
      },
      tooltipDirection () {
        const dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top');
        if (Array.isArray(dir)) {
          return this.isRange ? dir : dir[1]
        } else {
          return this.isRange ? [dir, dir] : dir
        }
      },
      tooltipStatus () {
        return this.tooltip === 'hover' && this.flag ? 'vue-slider-always' : this.tooltip ? `vue-slider-${this.tooltip}` : ''
      },
      tooltipClass () {
        return [`vue-slider-tooltip-${this.tooltipDirection}`, 'vue-slider-tooltip']
      },
      disabledArray () {
        return Array.isArray(this.disabled) ? this.disabled : [this.disabled, this.disabled]
      },
      boolDisabled () {
        return this.disabledArray.every(b => b === true)
      },
      isDisabled () {
        return this.eventType === 'none' ? true : this.boolDisabled
      },
      disabledClass () {
        return this.boolDisabled ? 'vue-slider-disabled' : ''
      },
      stateClass () {
        return {
          'vue-slider-state-process-drag': this.processFlag,
          'vue-slider-state-drag': this.flag && !this.processFlag && !this.keydownFlag,
          'vue-slider-state-focus': this.focusFlag
        }
      },
      isRange () {
        return Array.isArray(this.value)
      },
      slider () {
        return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot
      },
      minimum () {
        return this.data ? 0 : this.min
      },
      val: {
        get () {
          return this.data ? (this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue]) : this.currentValue
        },
        set (val) {
          if (this.data) {
            if (this.isRange) {
              const index0 = this.data.indexOf(val[0]);
              const index1 = this.data.indexOf(val[1]);
              if (index0 > -1 && index1 > -1) {
                this.currentValue = [index0, index1];
              }
            } else {
              const index = this.data.indexOf(val);
              if (index > -1) {
                this.currentValue = index;
              }
            }
          } else {
            this.currentValue = val;
          }
        }
      },
      currentIndex () {
        if (this.isRange) {
          return this.data ? this.currentValue : [this.getIndexByValue(this.currentValue[0]), this.getIndexByValue(this.currentValue[1])]
        } else {
          return this.getIndexByValue(this.currentValue)
        }
      },
      indexRange () {
        if (this.isRange) {
          return this.currentIndex
        } else {
          return [0, this.currentIndex]
        }
      },
      maximum () {
        return this.data ? (this.data.length - 1) : this.max
      },
      multiple () {
        const decimals = `${this.interval}`.split('.')[1];
        return decimals ? Math.pow(10, decimals.length) : 1
      },
      spacing () {
        return this.data ? 1 : this.interval
      },
      total () {
        if (this.data) {
          return this.data.length - 1
        } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
          this.printError('Prop[interval] is illegal, Please make sure that the interval can be divisible');
        }
        return (this.maximum - this.minimum) / this.interval
      },
      gap () {
        return this.size / this.total
      },
      position () {
        return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : ((this.currentValue - this.minimum) / this.spacing * this.gap)
      },
      isFixed () {
        return this.fixed || this.minRange
      },
      limit () {
        return this.isRange ? this.isFixed ? [[0, (this.total - this.fixedValue) * this.gap], [this.fixedValue * this.gap, this.size]] : [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size]
      },
      valueLimit () {
        return this.isRange ? this.isFixed ? [[this.minimum, this.maximum - (this.fixedValue * (this.spacing * this.multiple)) / this.multiple], [this.minimum + (this.fixedValue * (this.spacing * this.multiple)) / this.multiple, this.maximum]] : [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum]
      },
      idleSlider () {
        return this.currentSlider === 0 ? 1 : 0
      },
      wrapStyles () {
        return this.direction === 'vertical' ? {
          height: typeof this.height === 'number' ? `${this.height}px` : this.height,
          padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`
        } : {
          width: typeof this.width === 'number' ? `${this.width}px` : this.width,
          padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`
        }
      },
      sliderStyles () {
        if (Array.isArray(this.sliderStyle)) {
          return this.isRange ? this.sliderStyle : this.sliderStyle[1]
        } else if (typeof this.sliderStyle === 'function') {
          return this.sliderStyle(this.val, this.currentIndex)
        } else {
          return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle
        }
      },
      focusStyles () {
        if (Array.isArray(this.focusStyle)) {
          return this.isRange ? this.focusStyle : this.focusStyle[1]
        } else if (typeof this.focusStyle === 'function') {
          return this.focusStyle(this.val, this.currentIndex)
        } else {
          return this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle
        }
      },
      disabledDotStyles () {
        const disabledStyle = this.disabledDotStyle;
        if (Array.isArray(disabledStyle)) {
          return disabledStyle
        } else if (typeof disabledStyle === 'function') {
          const style = disabledStyle(this.val, this.currentIndex);
          return Array.isArray(style) ? style : [style, style]
        } else if (disabledStyle) {
          return [disabledStyle, disabledStyle]
        } else {
          return [{
            backgroundColor: '#ccc'
          }, {
            backgroundColor: '#ccc'
          }]
        }
      },
      tooltipStyles () {
        if (Array.isArray(this.tooltipStyle)) {
          return this.isRange ? this.tooltipStyle : this.tooltipStyle[1]
        } else if (typeof this.tooltipStyle === 'function') {
          return this.tooltipStyle(this.val, this.currentIndex)
        } else {
          return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle
        }
      },
      elemStyles () {
        return this.direction === 'vertical' ? {
          width: `${this.width}px`,
          height: '100%'
        } : {
          height: `${this.height}px`
        }
      },
      dotStyles () {
        return this.direction === 'vertical' ? {
          width: `${this.dotWidthVal}px`,
          height: `${this.dotHeightVal}px`,
          left: `${(-(this.dotWidthVal - this.width) / 2)}px`
        } : {
          width: `${this.dotWidthVal}px`,
          height: `${this.dotHeightVal}px`,
          top: `${(-(this.dotHeightVal - this.height) / 2)}px`
        }
      },
      piecewiseDotStyle () {
        return this.direction === 'vertical' ? {
          width: `${this.width}px`,
          height: `${this.width}px`
        } : {
          width: `${this.height}px`,
          height: `${this.height}px`
        }
      },
      piecewiseDotWrap () {
        if (!this.piecewise && !this.piecewiseLabel) {
          return false
        }

        let arr = [];
        for (let i = 0; i <= this.total; i++) {
          const style = this.direction === 'vertical' ? {
            bottom: `${this.gap * i - this.width / 2}px`,
            left: 0
          } : {
            left: `${this.gap * i - this.height / 2}px`,
            top: 0
          };
          const index = this.reverse ? (this.total - i) : i;
          const label = this.data ? this.data[index] : (this.spacing * index) + this.min;
          arr.push({
            style,
            label: this.formatter ? this.formatting(label) : label,
            inRange: index >= this.indexRange[0] && index <= this.indexRange[1]
          });
        }
        return arr
      }
    },
    watch: {
      value (val) {
        this.flag || this.setValue(val, true);
      },
      max (val) {
        if (val < this.min) {
          return this.printError('The maximum value can not be less than the minimum value.')
        }

        const resetVal = this.limitValue(this.val);
        this.setValue(resetVal);
        this.refresh();
      },
      min (val) {
        if (val > this.max) {
          return this.printError('The minimum value can not be greater than the maximum value.')
        }

        const resetVal = this.limitValue(this.val);
        this.setValue(resetVal);
        this.refresh();
      },
      show (bool) {
        if (bool && !this.size) {
          this.$nextTick(() => {
            this.refresh();
          });
        }
      },
      fixed () {
        this.computedFixedValue();
      },
      minRange () {
        this.computedFixedValue();
      }
    },
    methods: {
      bindEvents () {
        document.addEventListener('touchmove', this.moving, {passive: false});
        document.addEventListener('touchend', this.moveEnd, {passive: false});
        document.addEventListener('mousedown', this.blurSlider);
        document.addEventListener('mousemove', this.moving);
        document.addEventListener('mouseup', this.moveEnd);
        document.addEventListener('mouseleave', this.moveEnd);
        document.addEventListener('keydown', this.handleKeydown);
        document.addEventListener('keyup', this.handleKeyup);
        window.addEventListener('resize', this.refresh);

        if (this.isRange && this.tooltipMerge) {
          this.$refs.dot0.addEventListener('transitionend', this.handleOverlapTooltip);
          this.$refs.dot1.addEventListener('transitionend', this.handleOverlapTooltip);
        }
      },
      unbindEvents () {
        document.removeEventListener('touchmove', this.moving);
        document.removeEventListener('touchend', this.moveEnd);
        document.removeEventListener('mousedown', this.blurSlider);
        document.removeEventListener('mousemove', this.moving);
        document.removeEventListener('mouseup', this.moveEnd);
        document.removeEventListener('mouseleave', this.moveEnd);
        document.removeEventListener('keydown', this.handleKeydown);
        document.removeEventListener('keyup', this.handleKeyup);
        window.removeEventListener('resize', this.refresh);

        if (this.isRange && this.tooltipMerge) {
          this.$refs.dot0.removeEventListener('transitionend', this.handleOverlapTooltip);
          this.$refs.dot1.removeEventListener('transitionend', this.handleOverlapTooltip);
        }
      },
      handleKeydown (e) {
        if (!this.useKeyboard || !this.focusFlag) {
          return false
        }
        switch (e.keyCode) {
        case 37:
        case 40:
          e.preventDefault();
          this.keydownFlag = true;
          this.flag = true;
          this.changeFocusSlider(this.actionsKeyboard[0]);
          break
        case 38:
        case 39:
          e.preventDefault();
          this.keydownFlag = true;
          this.flag = true;
          this.changeFocusSlider(this.actionsKeyboard[1]);
          break
        }
      },
      handleKeyup () {
        if (this.keydownFlag) {
          this.keydownFlag = false;
          this.flag = false;
        }
      },
      changeFocusSlider (fn) {
        if (this.isRange) {
          let arr = this.currentIndex.map((index, i) => {
            if (i === this.focusSlider || this.fixed) {
              const val = fn(index);
              const range = this.fixed ? this.valueLimit[i] : [0, this.total];
              if (val <= range[1] && val >= range[0]) {
                return val
              }
            }
            return index
          });
          if (arr[0] > arr[1]) {
            this.focusSlider = this.focusSlider === 0 ? 1 : 0;
            arr = arr.reverse();
          }
          this.setIndex(arr);
        } else {
          this.setIndex(fn(this.currentIndex));
        }
      },
      blurSlider (e) {
        const dot = this.isRange ? this.$refs[`dot${this.focusSlider}`] : this.$refs.dot;
        if (!dot || dot === e.target) {
          return false
        }
        this.focusFlag = false;
      },
      formatting (value) {
        return typeof this.formatter === 'string' ? this.formatter.replace(/\{value\}/, value) : this.formatter(value)
      },
      mergeFormatting (value1, value2) {
        return typeof this.mergeFormatter === 'string' ? this.mergeFormatter.replace(/\{(value1|value2)\}/g, (_, key) => key === 'value1' ? value1 : value2) : this.mergeFormatter(value1, value2)
      },
      getPos (e) {
        this.realTime && this.getStaticData();
        return this.direction === 'vertical' ? (this.reverse ? (e.pageY - this.offset) : (this.size - (e.pageY - this.offset))) : (this.reverse ? (this.size - (e.clientX - this.offset)) : (e.clientX - this.offset))
      },
      processClick (e) {
        if (this.fixed) {
          e.stopPropagation();
        }
      },
      wrapClick (e) {
        if (this.isDisabled || !this.clickable || this.processFlag || this.dragFlag) return false
        const pos = this.getPos(e);
        if (this.isRange) {
          if (this.disabledArray.every(b => b === false)) {
            this.currentSlider = pos > ((this.position[1] - this.position[0]) / 2 + this.position[0]) ? 1 : 0;
          } else if (this.disabledArray[0]) {
            if (pos < this.position[0]) return false
            this.currentSlider = 1;
          } else if (this.disabledArray[1]) {
            if (pos > this.position[1]) return false
            this.currentSlider = 0;
          }
        }
        if (this.disabledArray[this.currentSlider]) {
          return false
        }
        this.setValueOnPos(pos);

        if (this.isRange && this.tooltipMerge) {
          const timer = setInterval(() => this.handleOverlapTooltip(), 16.7);
          setTimeout(() => window.clearInterval(timer), this.speed * 1000);
        }
      },
      moveStart (e, index = 0, isProcess) {
        if (this.disabledArray[index]) {
          return false
        }
        if (this.stopPropagation) {
          e.stopPropagation();
        }
        if (this.isRange) {
          this.currentSlider = index;

          if (isProcess) {
            if (!this.processDragable) {
              return false
            }
            this.processFlag = true;
            this.processSign = {
              pos: this.position,
              start: this.getPos((e.targetTouches && e.targetTouches[0]) ? e.targetTouches[0] : e)
            };
          }

          if (!this.enableCross && this.val[0] === this.val[1]) {
            this.crossFlag = true;
          }
        }
        if (!isProcess && this.useKeyboard) {
          this.focusFlag = true;
          this.focusSlider = index;
        }
        this.flag = true;
        this.$emit('drag-start', this);
      },
      moving (e) {
        if (this.stopPropagation) {
          e.stopPropagation();
        }

        if (!this.flag) return false
        e.preventDefault();

        if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
        if (this.processFlag) {
          this.currentSlider = 0;
          this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, true);
          this.currentSlider = 1;
          this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, true);
        } else {
          this.dragFlag = true;
          this.setValueOnPos(this.getPos(e), true);
        }

        if (this.isRange && this.tooltipMerge) {
          this.handleOverlapTooltip();
        }
      },
      moveEnd (e) {
        if (this.stopPropagation) {
          e.stopPropagation();
        }
        if (this.flag) {
          this.$emit('drag-end', this);
          if (this.lazy && this.isDiff(this.val, this.value)) {
            this.syncValue();
          }
        } else {
          return false
        }
        this.flag = false;
        window.setTimeout(() => {
          this.crossFlag = false;
          this.dragFlag = false;
          this.processFlag = false;
        }, 0);
        this.setPosition();
      },
      setValueOnPos (pos, isDrag) {
        const range = this.isRange ? this.limit[this.currentSlider] : this.limit;
        const valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;
        const index = Math.round(pos / this.gap);
        if (pos >= range[0] && pos <= range[1]) {
          const v = this.getValueByIndex(index);
          this.setTransform(pos);
          this.setCurrentValue(v, isDrag);
          if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
            this.setTransform(pos + ((this.fixedValue * this.gap) * (this.currentSlider === 0 ? 1 : -1)), true);
            this.setCurrentValue((v * this.multiple + (this.fixedValue * this.spacing * this.multiple * (this.currentSlider === 0 ? 1 : -1))) / this.multiple, isDrag, true);
          }
        } else {
          const anotherSlider = pos < range[0] ? 0 : 1;
          const currentSlider = anotherSlider === 0 ? 1 : 0;
          this.setTransform(range[anotherSlider]);
          this.setCurrentValue(valueRange[anotherSlider]);
          if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
            this.setTransform(this.limit[this.idleSlider][anotherSlider], true);
            this.setCurrentValue(this.valueLimit[this.idleSlider][anotherSlider], isDrag, true);
          } else if (this.isRange && (this.enableCross || this.crossFlag) && !this.isFixed && !this.disabledArray[anotherSlider] && this.currentSlider === currentSlider) {
            this.focusSlider = anotherSlider;
            this.currentSlider = anotherSlider;
          }
        }
        this.crossFlag = false;
      },
      isLessRange (pos, index) {
        if (!this.isRange || (!this.minRange && !this.maxRange)) {
          return false
        }

        const diff = this.currentSlider === 0 ? this.currentIndex[1] - index : index - this.currentIndex[0];
        if (this.minRange && diff <= this.minRange) {
          this.fixedValue = this.minRange;
          return true
        }
        if (this.maxRange && diff >= this.maxRange) {
          this.fixedValue = this.maxRange;
          return true
        }
        this.computedFixedValue();
        return false
      },
      isDiff (a, b) {
        if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
          return true
        } else if (Array.isArray(a) && a.length === b.length) {
          return a.some((v, i) => v !== b[i])
        }
        return a !== b
      },
      setCurrentValue (val, isDrag, isIdleSlider) {
        const slider = isIdleSlider ? this.idleSlider : this.currentSlider;
        if (val < this.minimum || val > this.maximum) return false
        if (this.isRange) {
          if (this.isDiff(this.currentValue[slider], val)) {
            this.currentValue.splice(slider, 1, val);
            if (!this.lazy || !this.flag) {
              this.syncValue();
            }
          }
        } else if (this.isDiff(this.currentValue, val)) {
          this.currentValue = val;
          if (!this.lazy || !this.flag) {
            this.syncValue();
          }
        }
        isDrag || this.setPosition();
      },
      getValueByIndex (index) {
        return ((this.spacing * this.multiple) * index + (this.minimum * this.multiple)) / this.multiple
      },
      getIndexByValue (value) {
        return Math.round((value - this.minimum) * this.multiple) / (this.spacing * this.multiple)
      },
      setIndex (val) {
        if (Array.isArray(val) && this.isRange) {
          let value;
          if (this.data) {
            value = [this.data[val[0]], this.data[val[1]]];
          } else {
            value = [this.getValueByIndex(val[0]), this.getValueByIndex(val[1])];
          }
          this.setValue(value);
        } else {
          val = this.getValueByIndex(val);
          if (this.isRange) {
            this.currentSlider = val > ((this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0]) ? 1 : 0;
          }
          this.setCurrentValue(val);
        }
      },
      setValue (val, noCb, speed) {
        if (this.isDiff(this.val, val)) {
          const resetVal = this.limitValue(val);
          this.val = this.isRange ? resetVal.concat() : resetVal;
          this.computedFixedValue();
          this.syncValue(noCb);
        }

        this.$nextTick(() => this.setPosition(speed));
      },
      computedFixedValue () {
        if (!this.isFixed) {
          this.fixedValue = 0;
          return false
        }

        this.fixedValue = Math.max(this.fixed ? this.currentIndex[1] - this.currentIndex[0] : 0, this.minRange || 0);
      },
      setPosition (speed) {
        this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed);
        if (this.isRange) {
          this.setTransform(this.position[0], this.currentSlider === 1);
          this.setTransform(this.position[1], this.currentSlider === 0);
        } else {
          this.setTransform(this.position);
        }
        this.flag || this.setTransitionTime(0);
      },
      setTransform (val, isIdleSlider) {
        const slider = isIdleSlider ? this.idleSlider : this.currentSlider;
        const value = roundToDPR((this.direction === 'vertical' ? ((this.dotHeightVal / 2) - val) : (val - (this.dotWidthVal / 2))) * (this.reverse ? -1 : 1));
        const translateValue = this.direction === 'vertical' ? `translateY(${value}px)` : `translateX(${value}px)`;
        const processSize = this.fixed ? `${this.fixedValue * this.gap}px` : `${slider === 0 ? this.position[1] - val : val - this.position[0]}px`;
        const processPos = this.fixed ? `${slider === 0 ? val : (val - this.fixedValue * this.gap)}px` : `${slider === 0 ? val : this.position[0]}px`;
        if (this.isRange) {
          this.slider[slider].style.transform = translateValue;
          this.slider[slider].style.WebkitTransform = translateValue;
          this.slider[slider].style.msTransform = translateValue;
          if (this.direction === 'vertical') {
            this.$refs.process.style.height = processSize;
            this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos;
          } else {
            this.$refs.process.style.width = processSize;
            this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos;
          }
        } else {
          this.slider.style.transform = translateValue;
          this.slider.style.WebkitTransform = translateValue;
          this.slider.style.msTransform = translateValue;
          if (this.direction === 'vertical') {
            this.$refs.process.style.height = `${val}px`;
            this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0;
          } else {
            this.$refs.process.style.width = `${val}px`;
            this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0;
          }
        }
      },
      setTransitionTime (time) {
        // In order to avoid browser merge style and modify together
        time || this.$refs.process.offsetWidth;

        if (this.isRange) {
          for (let i = 0; i < this.slider.length; i++) {
            this.slider[i].style.transitionDuration = `${time}s`;
            this.slider[i].style.WebkitTransitionDuration = `${time}s`;
          }
          this.$refs.process.style.transitionDuration = `${time}s`;
          this.$refs.process.style.WebkitTransitionDuration = `${time}s`;
        } else {
          this.slider.style.transitionDuration = `${time}s`;
          this.slider.style.WebkitTransitionDuration = `${time}s`;
          this.$refs.process.style.transitionDuration = `${time}s`;
          this.$refs.process.style.WebkitTransitionDuration = `${time}s`;
        }
      },
      limitValue (val) {
        if (this.data) {
          return val
        }

        const inRange = (v) => {
          if (v < this.min) {
            this.printError(`The value of the slider is ${val}, the minimum value is ${this.min}, the value of this slider can not be less than the minimum value`);
            return this.min
          } else if (v > this.max) {
            this.printError(`The value of the slider is ${val}, the maximum value is ${this.max}, the value of this slider can not be greater than the maximum value`);
            return this.max
          }
          return v
        };

        if (this.isRange) {
          return val.map((v) => inRange(v))
        } else {
          return inRange(val)
        }
      },
      syncValue (noCb) {
        let val = this.isRange ? this.val.concat() : this.val;
        this.$emit('input', val);
        this.keydownFlag && this.$emit('on-keypress', val);
        noCb || this.$emit('callback', val);
      },
      getValue () {
        return this.val
      },
      getIndex () {
        return this.currentIndex
      },
      getStaticData () {
        if (this.$refs.elem) {
          this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth;
          this.offset = this.direction === 'vertical' ? (this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop) : this.$refs.elem.getBoundingClientRect().left;
        }
      },
      refresh () {
        if (this.$refs.elem) {
          this.getStaticData();
          this.computedFixedValue();
          this.setPosition();
        }
      },
      printError (msg) {
        if (this.debug) {
          console.error(`[VueSlider error]: ${msg}`);
        }
      },
      handleOverlapTooltip () {
        const isDirectionSame = this.tooltipDirection[0] === this.tooltipDirection[1];

        if (this.isRange && isDirectionSame) {
          const tooltip0 = this.reverse ? this.$refs.tooltip1 : this.$refs.tooltip0;
          const tooltip1 = this.reverse ? this.$refs.tooltip0 : this.$refs.tooltip1;
          const tooltip0Rect = tooltip0.getBoundingClientRect();
          const tooltip1Rect = tooltip1.getBoundingClientRect();

          const tooltip0Right = tooltip0Rect.right;
          const tooltip1Left = tooltip1Rect.left;

          const tooltip0Y = tooltip0Rect.top;
          const tooltip1Y = tooltip1Rect.top + tooltip1Rect.height;

          const horizontalOverlap = this.direction === 'horizontal' && tooltip0Right > tooltip1Left;
          const verticalOverlap = this.direction === 'vertical' && tooltip1Y > tooltip0Y;

          if (horizontalOverlap || verticalOverlap) {
            this.handleDisplayMergedTooltip(true);
          } else {
            this.handleDisplayMergedTooltip(false);
          }
        }
      },
      handleDisplayMergedTooltip (show) {
        const tooltip0 = this.$refs.tooltip0;
        const tooltip1 = this.$refs.tooltip1;
        const mergedTooltip = this.$refs.process.getElementsByClassName('vue-merged-tooltip')[0];

        if (show) {
          tooltip0.style.visibility = 'hidden';
          tooltip1.style.visibility = 'hidden';
          mergedTooltip.style.visibility = 'visible';
        } else {
          tooltip0.style.visibility = 'visible';
          tooltip1.style.visibility = 'visible';
          mergedTooltip.style.visibility = 'hidden';
        }
      }
    },
    mounted () {
      this.isComponentExists = true;

      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return this.printError('window or document is undefined, can not be initialization.')
      }

      this.$nextTick(() => {
        if (this.isComponentExists) {
          this.getStaticData();
          this.setValue(this.limitValue(this.value), true, this.startAnimation ? this.speed : 0);
          this.bindEvents();

          if (this.isRange && this.tooltipMerge && !this.startAnimation) {
            this.$nextTick(() => {
              this.handleOverlapTooltip();
            });
          }
        }
      });

      this.isMounted = true;
    },
    beforeDestroy () {
      this.isComponentExists = false;
      this.unbindEvents();
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        directives: [
          { name: "show", rawName: "v-show", value: _vm.show, expression: "show" }
        ],
        ref: "wrap",
        class: [
          "vue-slider-component",
          _vm.flowDirection,
          _vm.disabledClass,
          _vm.stateClass,
          { "vue-slider-has-label": _vm.piecewiseLabel }
        ],
        style: [_vm.wrapStyles, _vm.boolDisabled ? _vm.disabledStyle : null],
        on: { click: _vm.wrapClick }
      },
      [
        _c(
          "div",
          {
            ref: "elem",
            staticClass: "vue-slider",
            style: [_vm.elemStyles, _vm.bgStyle],
            attrs: { "aria-hidden": "true" }
          },
          [
            _vm.isRange
              ? [
                  _c(
                    "div",
                    {
                      key: "dot0",
                      ref: "dot0",
                      class: [
                        _vm.tooltipStatus,
                        "vue-slider-dot",
                        {
                          "vue-slider-dot-focus":
                            _vm.focusFlag && _vm.focusSlider === 0,
                          "vue-slider-dot-dragging":
                            _vm.flag && _vm.currentSlider === 0,
                          "vue-slider-dot-disabled":
                            !_vm.boolDisabled && _vm.disabledArray[0]
                        }
                      ],
                      style: [
                        _vm.dotStyles,
                        !_vm.boolDisabled && _vm.disabledArray[0]
                          ? _vm.disabledDotStyles[0]
                          : null,
                        _vm.sliderStyles[0],
                        _vm.focusFlag && _vm.focusSlider === 0
                          ? _vm.focusStyles[0]
                          : null
                      ],
                      on: {
                        mousedown: function($event) {
                          _vm.moveStart($event, 0);
                        },
                        touchstart: function($event) {
                          _vm.moveStart($event, 0);
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          ref: "tooltip0",
                          class: [
                            "vue-slider-tooltip-" + _vm.tooltipDirection[0],
                            "vue-slider-tooltip-wrap"
                          ]
                        },
                        [
                          _vm._t(
                            "tooltip",
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "vue-slider-tooltip",
                                  style: _vm.tooltipStyles[0]
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.formatter
                                        ? _vm.formatting(_vm.val[0])
                                        : _vm.val[0]
                                    )
                                  )
                                ]
                              )
                            ],
                            {
                              value: _vm.val[0],
                              index: 0,
                              disabled: !_vm.boolDisabled && _vm.disabledArray[0]
                            }
                          )
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      key: "dot1",
                      ref: "dot1",
                      class: [
                        _vm.tooltipStatus,
                        "vue-slider-dot",
                        {
                          "vue-slider-dot-focus":
                            _vm.focusFlag && _vm.focusSlider === 1,
                          "vue-slider-dot-dragging":
                            _vm.flag && _vm.currentSlider === 1,
                          "vue-slider-dot-disabled":
                            !_vm.boolDisabled && _vm.disabledArray[1]
                        }
                      ],
                      style: [
                        _vm.dotStyles,
                        !_vm.boolDisabled && _vm.disabledArray[1]
                          ? _vm.disabledDotStyles[1]
                          : null,
                        _vm.sliderStyles[1],
                        _vm.focusFlag && _vm.focusSlider === 1
                          ? _vm.focusStyles[1]
                          : null
                      ],
                      on: {
                        mousedown: function($event) {
                          _vm.moveStart($event, 1);
                        },
                        touchstart: function($event) {
                          _vm.moveStart($event, 1);
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          ref: "tooltip1",
                          class: [
                            "vue-slider-tooltip-" + _vm.tooltipDirection[1],
                            "vue-slider-tooltip-wrap"
                          ]
                        },
                        [
                          _vm._t(
                            "tooltip",
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "vue-slider-tooltip",
                                  style: _vm.tooltipStyles[1]
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.formatter
                                        ? _vm.formatting(_vm.val[1])
                                        : _vm.val[1]
                                    )
                                  )
                                ]
                              )
                            ],
                            {
                              value: _vm.val[1],
                              index: 1,
                              disabled: !_vm.boolDisabled && _vm.disabledArray[1]
                            }
                          )
                        ],
                        2
                      )
                    ]
                  )
                ]
              : [
                  _c(
                    "div",
                    {
                      key: "dot",
                      ref: "dot",
                      class: [
                        _vm.tooltipStatus,
                        "vue-slider-dot",
                        {
                          "vue-slider-dot-focus":
                            _vm.focusFlag && _vm.focusSlider === 0,
                          "vue-slider-dot-dragging":
                            _vm.flag && _vm.currentSlider === 0
                        }
                      ],
                      style: [
                        _vm.dotStyles,
                        _vm.sliderStyles,
                        _vm.focusFlag && _vm.focusSlider === 0
                          ? _vm.focusStyles
                          : null
                      ],
                      on: { mousedown: _vm.moveStart, touchstart: _vm.moveStart }
                    },
                    [
                      _c(
                        "div",
                        {
                          class: [
                            "vue-slider-tooltip-" + _vm.tooltipDirection,
                            "vue-slider-tooltip-wrap"
                          ]
                        },
                        [
                          _vm._t(
                            "tooltip",
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "vue-slider-tooltip",
                                  style: _vm.tooltipStyles
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.formatter
                                        ? _vm.formatting(_vm.val)
                                        : _vm.val
                                    )
                                  )
                                ]
                              )
                            ],
                            { value: _vm.val }
                          )
                        ],
                        2
                      )
                    ]
                  )
                ],
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "vue-slider-piecewise" },
              _vm._l(_vm.piecewiseDotWrap, function(piecewiseObj, index) {
                return _c(
                  "li",
                  {
                    key: index,
                    staticClass: "vue-slider-piecewise-item",
                    style: [_vm.piecewiseDotStyle, piecewiseObj.style]
                  },
                  [
                    _vm._t(
                      "piecewise",
                      [
                        _vm.piecewise
                          ? _c("span", {
                              staticClass: "vue-slider-piecewise-dot",
                              style: [
                                _vm.piecewiseStyle,
                                piecewiseObj.inRange
                                  ? _vm.piecewiseActiveStyle
                                  : null
                              ]
                            })
                          : _vm._e()
                      ],
                      {
                        label: piecewiseObj.label,
                        index: index,
                        first: index === 0,
                        last: index === _vm.piecewiseDotWrap.length - 1,
                        active: piecewiseObj.inRange
                      }
                    ),
                    _vm._v(" "),
                    _vm._t(
                      "label",
                      [
                        _vm.piecewiseLabel
                          ? _c(
                              "span",
                              {
                                staticClass: "vue-slider-piecewise-label",
                                style: [
                                  _vm.labelStyle,
                                  piecewiseObj.inRange
                                    ? _vm.labelActiveStyle
                                    : null
                                ]
                              },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(piecewiseObj.label) +
                                    "\n          "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      {
                        label: piecewiseObj.label,
                        index: index,
                        first: index === 0,
                        last: index === _vm.piecewiseDotWrap.length - 1,
                        active: piecewiseObj.inRange
                      }
                    )
                  ],
                  2
                )
              })
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                ref: "process",
                class: [
                  "vue-slider-process",
                  {
                    "vue-slider-process-dragable":
                      _vm.isRange && _vm.processDragable
                  }
                ],
                style: _vm.processStyle,
                on: {
                  click: _vm.processClick,
                  mousedown: function($event) {
                    _vm.moveStart($event, 0, true);
                  },
                  touchstart: function($event) {
                    _vm.moveStart($event, 0, true);
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    ref: "mergedTooltip",
                    class: [
                      "vue-merged-tooltip",
                      "vue-slider-tooltip-" + _vm.tooltipDirection[0],
                      "vue-slider-tooltip-wrap"
                    ],
                    style: _vm.tooltipMergedPosition
                  },
                  [
                    _vm._t(
                      "tooltip",
                      [
                        _c(
                          "span",
                          {
                            staticClass: "vue-slider-tooltip",
                            style: _vm.tooltipStyles
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.mergeFormatter
                                    ? _vm.mergeFormatting(_vm.val[0], _vm.val[1])
                                    : _vm.formatter
                                      ? _vm.val[0] === _vm.val[1]
                                        ? _vm.formatting(_vm.val[0])
                                        : _vm.formatting(_vm.val[0]) +
                                          " - " +
                                          _vm.formatting(_vm.val[1])
                                      : _vm.val[0] === _vm.val[1]
                                        ? _vm.val[0]
                                        : _vm.val[0] + " - " + _vm.val[1]
                                ) +
                                "\n          "
                            )
                          ]
                        )
                      ],
                      { value: _vm.val, merge: true }
                    )
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            !_vm.isRange && !_vm.data
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.val,
                      expression: "val"
                    }
                  ],
                  staticClass: "vue-slider-sr-only",
                  attrs: { type: "range", min: _vm.min, max: _vm.max },
                  domProps: { value: _vm.val },
                  on: {
                    __r: function($event) {
                      _vm.val = $event.target.value;
                    }
                  }
                })
              : _vm._e()
          ],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-1aa2bd92_0", { source: "\n.vue-slider-component {\n  position: relative;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -o-user-select:none;\n}\n.vue-slider-component.vue-slider-disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.vue-slider-component.vue-slider-has-label {\n  margin-bottom: 15px;\n}\n.vue-slider-component.vue-slider-disabled .vue-slider-dot {\n  cursor: not-allowed;\n}\n.vue-slider-component .vue-slider {\n  position: relative;\n  display: block;\n  border-radius: 15px;\n  background-color: #ccc;\n}\n.vue-slider-component .vue-slider::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.vue-slider-component .vue-slider-process {\n  position: absolute;\n  border-radius: 15px;\n  background-color: #3498db;\n  transition: all 0s;\n  z-index: 1;\n}\n.vue-slider-component .vue-slider-process.vue-slider-process-dragable {\n  cursor: pointer;\n  z-index: 3;\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-process {\n  width: 0;\n  height: 100%;\n  top: 0;\n  left: 0;\n  will-change: width;\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-process {\n  width: 100%;\n  height: 0;\n  bottom: 0;\n  left: 0;\n  will-change: height;\n}\n.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process {\n  width: 0;\n  height: 100%;\n  top: 0;\n  right: 0;\n}\n.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process {\n  width: 100%;\n  height: 0;\n  top: 0;\n  left: 0;\n}\n.vue-slider-component .vue-slider-dot {\n  position: absolute;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n  transition: all 0s;\n  will-change: transform;\n  cursor: pointer;\n  z-index: 5;\n}\n.vue-slider-component .vue-slider-dot.vue-slider-dot-focus {\n  box-shadow: 0 0 2px 1px #3498db;\n}\n.vue-slider-component .vue-slider-dot.vue-slider-dot-dragging {\n  z-index: 5;\n}\n.vue-slider-component .vue-slider-dot.vue-slider-dot-disabled {\n  z-index: 4;\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-dot {\n  left: 0;\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-dot {\n  bottom: 0;\n}\n.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot {\n  right: 0;\n}\n.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot {\n  top: 0;\n}\n.vue-slider-component .vue-slider-tooltip-wrap {\n  display: none;\n  position: absolute;\n  z-index: 9;\n}\n.vue-slider-component .vue-slider-tooltip {\n  display: block;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 2px 5px;\n  min-width: 20px;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  border: 1px solid #3498db;\n  background-color: #3498db;\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top {\n  top: -9px;\n  left: 50%;\n  transform: translate(-50%, -100%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom {\n  bottom: -9px;\n  left: 50%;\n  transform: translate(-50%, 100%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left {\n  top: 50%;\n  left: -9px;\n  transform: translate(-100%, -50%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right {\n  top: 50%;\n  right: -9px;\n  transform: translate(100%, -50%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip::before,\n.vue-slider-component .vue-slider-tooltip-top .vue-merged-tooltip .vue-slider-tooltip::before {\n  content: '';\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border: 6px solid transparent\\0;\n  border-top-color: inherit;\n  transform: translate(-50%, 0);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-merged-tooltip {\n  display: block;\n  visibility: hidden;\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip::before,\n.vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip::before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border: 6px solid transparent\\0;\n  border-bottom-color: inherit;\n  transform: translate(-50%, 0);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip::before,\n.vue-slider-component .vue-slider-tooltip-left .vue-merged-tooltip .vue-slider-tooltip::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: -10px;\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border: 6px solid transparent\\0;\n  border-left-color: inherit;\n  transform: translate(0, -50%);\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip::before,\n.vue-slider-component .vue-slider-tooltip-right .vue-merged-tooltip .vue-slider-tooltip::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: -10px;\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border: 6px solid transparent\\0;\n  border-right-color: inherit;\n  transform: translate(0, -50%);\n}\n.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap {\n  display: block;\n}\n.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap {\n  display: block!important;\n}\n.vue-slider-component .vue-slider-piecewise {\n  position: absolute;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  left: 0;\n  top: 0;\n  height: 100%;\n  list-style: none;\n}\n.vue-slider-component .vue-slider-piecewise-item {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n}\n.vue-slider-component .vue-slider-piecewise-dot {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.16);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  transition: all .3s;\n}\n.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot, .vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot {\n  visibility: hidden;\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label, .vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label {\n  position: absolute;\n  display: inline-block;\n  top: 100%;\n  left: 50%;\n  white-space: nowrap;\n  font-size: 12px;\n  color: #333;\n  transform: translate(-50%, 8px);\n  visibility: visible;\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label, .vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label {\n  position: absolute;\n  display: inline-block;\n  top: 50%;\n  left: 100%;\n  white-space: nowrap;\n  font-size: 12px;\n  color: #333;\n  transform: translate(8px, -50%);\n  visibility: visible;\n}\n.vue-slider-component .vue-slider-sr-only {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  position: absolute !important;\n}\n", map: {"version":3,"sources":["F:\\elastigantt/F:\\elastigantt\\node_modules\\vue-slider-component\\src\\vue2-slider.vue"],"names":[],"mappings":";AAilCA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,oBAAA;CACA;AACA;EACA,YAAA;EACA,oBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,uBAAA;CACA;AACA;EACA,YAAA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,0BAAA;EACA,mBAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,WAAA;CACA;AACA;EACA,SAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,QAAA;EACA,oBAAA;CACA;AACA;EACA,SAAA;EACA,aAAA;EACA,OAAA;EACA,SAAA;CACA;AACA;EACA,YAAA;EACA,UAAA;EACA,OAAA;EACA,QAAA;CACA;AACA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oDAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,WAAA;CACA;AACA;EACA,gCAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,QAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,SAAA;CACA;AACA;EACA,OAAA;CACA;AACA;EACA,cAAA;EACA,mBAAA;EACA,WAAA;CACA;AACA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EACA,0BAAA;CACA;AACA;EACA,UAAA;EACA,UAAA;EACA,kCAAA;CACA;AACA;EACA,aAAA;EACA,UAAA;EACA,iCAAA;CACA;AACA;EACA,SAAA;EACA,WAAA;EACA,kCAAA;CACA;AACA;EACA,SAAA;EACA,YAAA;EACA,iCAAA;CACA;AACA;;EAEA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;EACA,gCAAA;EACA,0BAAA;EACA,8BAAA;CACA;AACA;EACA,eAAA;EACA,mBAAA;CACA;AACA;;EAEA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;EACA,gCAAA;EACA,6BAAA;EACA,8BAAA;CACA;AACA;;EAEA,YAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;EACA,gCAAA;EACA,2BAAA;EACA,8BAAA;CACA;AACA;;EAEA,YAAA;EACA,mBAAA;EACA,SAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;EACA,gCAAA;EACA,4BAAA;EACA,8BAAA;CACA;AACA;EACA,eAAA;CACA;AACA;EACA,yBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,QAAA;EACA,OAAA;EACA,aAAA;EACA,iBAAA;CACA;AACA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,sCAAA;EACA,mBAAA;EACA,iCAAA;EACA,WAAA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,sBAAA;EACA,UAAA;EACA,UAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;EACA,gCAAA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;EACA,gCAAA;EACA,oBAAA;CACA;AACA;EACA,+BAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,8BAAA;CACA","file":"vue2-slider.vue","sourcesContent":["<template>\n  <div\n    ref=\"wrap\"\n    :class=\"['vue-slider-component', flowDirection, disabledClass, stateClass, { 'vue-slider-has-label': piecewiseLabel }]\"\n    v-show=\"show\"\n    :style=\"[wrapStyles, boolDisabled ? disabledStyle : null]\"\n    @click=\"wrapClick\"\n  >\n    <div ref=\"elem\" aria-hidden=\"true\" class=\"vue-slider\" :style=\"[elemStyles, bgStyle]\">\n      <template v-if=\"isRange\">\n        <div\n          ref=\"dot0\"\n          key=\"dot0\"\n          :class=\"[\n            tooltipStatus,\n            'vue-slider-dot',\n            {\n              'vue-slider-dot-focus': focusFlag && focusSlider === 0,\n              'vue-slider-dot-dragging': flag && currentSlider === 0,\n              'vue-slider-dot-disabled': !boolDisabled && disabledArray[0]\n            }\n          ]\"\n          :style=\"[\n            dotStyles,\n            (!boolDisabled && disabledArray[0]) ? disabledDotStyles[0] : null,\n            sliderStyles[0], focusFlag && focusSlider === 0 ? focusStyles[0]\n          : null]\"\n          @mousedown=\"moveStart($event, 0)\"\n          @touchstart=\"moveStart($event, 0)\"\n        >\n          <div ref=\"tooltip0\" :class=\"['vue-slider-tooltip-' + tooltipDirection[0], 'vue-slider-tooltip-wrap']\">\n            <slot name=\"tooltip\" :value=\"val[0]\" :index=\"0\" :disabled=\"!boolDisabled && disabledArray[0]\">\n              <span class=\"vue-slider-tooltip\" :style=\"tooltipStyles[0]\">{{ formatter ? formatting(val[0]) : val[0] }}</span>\n            </slot>\n          </div>\n        </div>\n        <div\n          ref=\"dot1\"\n          key=\"dot1\"\n          :class=\"[\n            tooltipStatus,\n            'vue-slider-dot',\n            {\n              'vue-slider-dot-focus': focusFlag && focusSlider === 1,\n              'vue-slider-dot-dragging': flag && currentSlider === 1,\n              'vue-slider-dot-disabled': !boolDisabled && disabledArray[1]\n            }\n          ]\"\n          :style=\"[\n            dotStyles,\n            (!boolDisabled && disabledArray[1]) ? disabledDotStyles[1] : null,\n            sliderStyles[1], focusFlag && focusSlider === 1 ? focusStyles[1]\n          : null]\"\n          @mousedown=\"moveStart($event, 1)\"\n          @touchstart=\"moveStart($event, 1)\"\n        >\n          <div ref=\"tooltip1\" :class=\"['vue-slider-tooltip-' + tooltipDirection[1], 'vue-slider-tooltip-wrap']\">\n            <slot name=\"tooltip\" :value=\"val[1]\" :index=\"1\" :disabled=\"!boolDisabled && disabledArray[1]\">\n              <span class=\"vue-slider-tooltip\" :style=\"tooltipStyles[1]\">{{ formatter ? formatting(val[1]) : val[1] }}</span>\n            </slot>\n          </div>\n        </div>\n      </template>\n      <template v-else>\n        <div\n          ref=\"dot\"\n          key=\"dot\"\n          :class=\"[\n            tooltipStatus,\n            'vue-slider-dot',\n            {\n              'vue-slider-dot-focus': focusFlag && focusSlider === 0,\n              'vue-slider-dot-dragging': flag && currentSlider === 0\n            }\n          ]\"\n          :style=\"[\n            dotStyles,\n            sliderStyles,\n            focusFlag && focusSlider === 0 ? focusStyles : null\n          ]\"\n          @mousedown=\"moveStart\"\n          @touchstart=\"moveStart\"\n        >\n          <div :class=\"['vue-slider-tooltip-' + tooltipDirection, 'vue-slider-tooltip-wrap']\">\n            <slot name=\"tooltip\" :value=\"val\">\n              <span class=\"vue-slider-tooltip\" :style=\"tooltipStyles\">{{ formatter ? formatting(val) : val }}</span>\n            </slot>\n          </div>\n        </div>\n      </template>\n      <ul class=\"vue-slider-piecewise\">\n        <li v-for=\"(piecewiseObj, index) in piecewiseDotWrap\" class=\"vue-slider-piecewise-item\" :style=\"[piecewiseDotStyle, piecewiseObj.style]\" :key=\"index\">\n          <slot\n            name=\"piecewise\"\n            :label=\"piecewiseObj.label\"\n            :index=\"index\"\n            :first=\"index === 0\"\n            :last=\"index === piecewiseDotWrap.length - 1\"\n            :active=\"piecewiseObj.inRange\"\n          >\n            <span\n              v-if=\"piecewise\"\n              class=\"vue-slider-piecewise-dot\"\n              :style=\"[ piecewiseStyle, piecewiseObj.inRange ? piecewiseActiveStyle : null ]\"\n            ></span>\n          </slot>\n\n          <slot\n            name=\"label\"\n            :label=\"piecewiseObj.label\"\n            :index=\"index\"\n            :first=\"index === 0\"\n            :last=\"index === piecewiseDotWrap.length - 1\"\n            :active=\"piecewiseObj.inRange\"\n          >\n            <span\n              v-if=\"piecewiseLabel\"\n              class=\"vue-slider-piecewise-label\"\n              :style=\"[ labelStyle, piecewiseObj.inRange ? labelActiveStyle : null ]\"\n            >\n              {{ piecewiseObj.label }}\n            </span>\n          </slot>\n        </li>\n      </ul>\n      <div\n        ref=\"process\"\n        :class=\"['vue-slider-process', { 'vue-slider-process-dragable': isRange && processDragable }]\"\n        :style=\"processStyle\"\n        @click=\"processClick\"\n        @mousedown=\"moveStart($event, 0, true)\"\n        @touchstart=\"moveStart($event, 0, true)\"\n      >\n      <div\n        ref=\"mergedTooltip\"\n        :class=\"['vue-merged-tooltip', 'vue-slider-tooltip-' + tooltipDirection[0], 'vue-slider-tooltip-wrap']\"\n        :style=\"tooltipMergedPosition\"\n      >\n          <slot name=\"tooltip\" :value=\"val\" :merge=\"true\">\n            <span class=\"vue-slider-tooltip\" :style=\"tooltipStyles\">\n              {{ mergeFormatter ? mergeFormatting(val[0], val[1]) : (formatter ? (val[0] === val[1] ? formatting(val[0]) : `${formatting(val[0])} - ${formatting(val[1])}`) : (val[0] === val[1] ? val[0] : `${val[0]} - ${val[1]}`)) }}\n            </span>\n          </slot>\n      </div>\n    </div>\n    <input v-if=\"!isRange && !data\" class=\"vue-slider-sr-only\" type=\"range\" v-model=\"val\" :min=\"min\" :max=\"max\" />\n    </div>\n  </div>\n</template>\n<script>\n  // Unsharp text [#166](https://github.com/NightCatSama/vue-slider-component/issues/166)\n  const roundToDPR = (function () {\n    const r = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1\n    return value => Math.round(value * r) / r\n  })()\n\n  export default {\n    name: 'VueSliderComponent',\n    props: {\n      width: {\n        type: [Number, String],\n        default: 'auto'\n      },\n      height: {\n        type: [Number, String],\n        default: 6\n      },\n      data: {\n        type: Array,\n        default: null\n      },\n      dotSize: {\n        type: Number,\n        default: 16\n      },\n      dotWidth: {\n        type: Number,\n        required: false\n      },\n      dotHeight: {\n        type: Number,\n        required: false\n      },\n      min: {\n        type: Number,\n        default: 0\n      },\n      max: {\n        type: Number,\n        default: 100\n      },\n      interval: {\n        type: Number,\n        default: 1\n      },\n      show: {\n        type: Boolean,\n        default: true\n      },\n      disabled: {\n        type: [Boolean, Array],\n        default: false\n      },\n      piecewise: {\n        type: Boolean,\n        default: false\n      },\n      tooltip: {\n        type: [String, Boolean],\n        default: 'always'\n      },\n      eventType: {\n        type: String,\n        default: 'auto'\n      },\n      direction: {\n        type: String,\n        default: 'horizontal'\n      },\n      reverse: {\n        type: Boolean,\n        default: false\n      },\n      lazy: {\n        type: Boolean,\n        default: false\n      },\n      clickable: {\n        type: Boolean,\n        default: true\n      },\n      speed: {\n        type: Number,\n        default: 0.5\n      },\n      realTime: {\n        type: Boolean,\n        default: false\n      },\n      stopPropagation: {\n        type: Boolean,\n        default: false\n      },\n      value: {\n        type: [String, Number, Array, Object],\n        default: 0\n      },\n      piecewiseLabel: {\n        type: Boolean,\n        default: false\n      },\n      debug: {\n        type: Boolean,\n        default: true\n      },\n      fixed: {\n        type: Boolean,\n        default: false\n      },\n      minRange: {\n        type: Number\n      },\n      maxRange: {\n        type: Number\n      },\n      processDragable: {\n        type: Boolean,\n        default: false\n      },\n      useKeyboard: {\n        type: Boolean,\n        default: false\n      },\n      actionsKeyboard: {\n        type: Array,\n        default () {\n          return [(i) => i - 1, (i) => i + 1]\n        }\n      },\n      tooltipMerge: {\n        type: Boolean,\n        default: true\n      },\n      startAnimation: {\n        type: Boolean,\n        default: false\n      },\n      enableCross: {\n        type: Boolean,\n        default: true\n      },\n      sliderStyle: [Array, Object, Function],\n      focusStyle: [Array, Object, Function],\n      tooltipDir: [Array, String],\n      formatter: [String, Function],\n      mergeFormatter: [String, Function],\n      piecewiseStyle: Object,\n      disabledStyle: Object,\n      piecewiseActiveStyle: Object,\n      processStyle: Object,\n      bgStyle: Object,\n      tooltipStyle: [Array, Object, Function],\n      disabledDotStyle: [Array, Object, Function],\n      labelStyle: Object,\n      labelActiveStyle: Object\n    },\n    data () {\n      return {\n        flag: false,\n        dragFlag: false,\n        crossFlag: false,\n        keydownFlag: null,\n        focusFlag: false,\n        processFlag: false,\n        processSign: null,\n        size: 0,\n        fixedValue: 0,\n        focusSlider: 0,\n        currentValue: 0,\n        currentSlider: 0,\n        isComponentExists: true,\n        isMounted: false\n      }\n    },\n    computed: {\n      dotWidthVal () {\n        return typeof this.dotWidth === 'number' ? this.dotWidth : this.dotSize\n      },\n      dotHeightVal () {\n        return typeof this.dotHeight === 'number' ? this.dotHeight : this.dotSize\n      },\n      flowDirection () {\n        return `vue-slider-${this.direction + (this.reverse ? '-reverse' : '')}`\n      },\n      tooltipMergedPosition () {\n        if (!this.isMounted) return {}\n\n        const tooltipDirection = this.tooltipDirection[0]\n        const dot0 = this.$refs.dot0\n\n        if (dot0) {\n          if (this.direction === 'vertical') {\n            const style = {}\n            style[tooltipDirection] = `-${(this.dotHeightVal / 2) - (this.width / 2) + 9}px`\n            return style\n          } else {\n            const style = {}\n            style[tooltipDirection] = `-${(this.dotWidthVal / 2) - (this.height / 2) + 9}px`\n            style['left'] = `50%`\n            return style\n          }\n        }\n      },\n      tooltipDirection () {\n        const dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top')\n        if (Array.isArray(dir)) {\n          return this.isRange ? dir : dir[1]\n        } else {\n          return this.isRange ? [dir, dir] : dir\n        }\n      },\n      tooltipStatus () {\n        return this.tooltip === 'hover' && this.flag ? 'vue-slider-always' : this.tooltip ? `vue-slider-${this.tooltip}` : ''\n      },\n      tooltipClass () {\n        return [`vue-slider-tooltip-${this.tooltipDirection}`, 'vue-slider-tooltip']\n      },\n      disabledArray () {\n        return Array.isArray(this.disabled) ? this.disabled : [this.disabled, this.disabled]\n      },\n      boolDisabled () {\n        return this.disabledArray.every(b => b === true)\n      },\n      isDisabled () {\n        return this.eventType === 'none' ? true : this.boolDisabled\n      },\n      disabledClass () {\n        return this.boolDisabled ? 'vue-slider-disabled' : ''\n      },\n      stateClass () {\n        return {\n          'vue-slider-state-process-drag': this.processFlag,\n          'vue-slider-state-drag': this.flag && !this.processFlag && !this.keydownFlag,\n          'vue-slider-state-focus': this.focusFlag\n        }\n      },\n      isRange () {\n        return Array.isArray(this.value)\n      },\n      slider () {\n        return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot\n      },\n      minimum () {\n        return this.data ? 0 : this.min\n      },\n      val: {\n        get () {\n          return this.data ? (this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue]) : this.currentValue\n        },\n        set (val) {\n          if (this.data) {\n            if (this.isRange) {\n              const index0 = this.data.indexOf(val[0])\n              const index1 = this.data.indexOf(val[1])\n              if (index0 > -1 && index1 > -1) {\n                this.currentValue = [index0, index1]\n              }\n            } else {\n              const index = this.data.indexOf(val)\n              if (index > -1) {\n                this.currentValue = index\n              }\n            }\n          } else {\n            this.currentValue = val\n          }\n        }\n      },\n      currentIndex () {\n        if (this.isRange) {\n          return this.data ? this.currentValue : [this.getIndexByValue(this.currentValue[0]), this.getIndexByValue(this.currentValue[1])]\n        } else {\n          return this.getIndexByValue(this.currentValue)\n        }\n      },\n      indexRange () {\n        if (this.isRange) {\n          return this.currentIndex\n        } else {\n          return [0, this.currentIndex]\n        }\n      },\n      maximum () {\n        return this.data ? (this.data.length - 1) : this.max\n      },\n      multiple () {\n        const decimals = `${this.interval}`.split('.')[1]\n        return decimals ? Math.pow(10, decimals.length) : 1\n      },\n      spacing () {\n        return this.data ? 1 : this.interval\n      },\n      total () {\n        if (this.data) {\n          return this.data.length - 1\n        } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {\n          this.printError('Prop[interval] is illegal, Please make sure that the interval can be divisible')\n        }\n        return (this.maximum - this.minimum) / this.interval\n      },\n      gap () {\n        return this.size / this.total\n      },\n      position () {\n        return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : ((this.currentValue - this.minimum) / this.spacing * this.gap)\n      },\n      isFixed () {\n        return this.fixed || this.minRange\n      },\n      limit () {\n        return this.isRange ? this.isFixed ? [[0, (this.total - this.fixedValue) * this.gap], [this.fixedValue * this.gap, this.size]] : [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size]\n      },\n      valueLimit () {\n        return this.isRange ? this.isFixed ? [[this.minimum, this.maximum - (this.fixedValue * (this.spacing * this.multiple)) / this.multiple], [this.minimum + (this.fixedValue * (this.spacing * this.multiple)) / this.multiple, this.maximum]] : [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum]\n      },\n      idleSlider () {\n        return this.currentSlider === 0 ? 1 : 0\n      },\n      wrapStyles () {\n        return this.direction === 'vertical' ? {\n          height: typeof this.height === 'number' ? `${this.height}px` : this.height,\n          padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`\n        } : {\n          width: typeof this.width === 'number' ? `${this.width}px` : this.width,\n          padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`\n        }\n      },\n      sliderStyles () {\n        if (Array.isArray(this.sliderStyle)) {\n          return this.isRange ? this.sliderStyle : this.sliderStyle[1]\n        } else if (typeof this.sliderStyle === 'function') {\n          return this.sliderStyle(this.val, this.currentIndex)\n        } else {\n          return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle\n        }\n      },\n      focusStyles () {\n        if (Array.isArray(this.focusStyle)) {\n          return this.isRange ? this.focusStyle : this.focusStyle[1]\n        } else if (typeof this.focusStyle === 'function') {\n          return this.focusStyle(this.val, this.currentIndex)\n        } else {\n          return this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle\n        }\n      },\n      disabledDotStyles () {\n        const disabledStyle = this.disabledDotStyle\n        if (Array.isArray(disabledStyle)) {\n          return disabledStyle\n        } else if (typeof disabledStyle === 'function') {\n          const style = disabledStyle(this.val, this.currentIndex)\n          return Array.isArray(style) ? style : [style, style]\n        } else if (disabledStyle) {\n          return [disabledStyle, disabledStyle]\n        } else {\n          return [{\n            backgroundColor: '#ccc'\n          }, {\n            backgroundColor: '#ccc'\n          }]\n        }\n      },\n      tooltipStyles () {\n        if (Array.isArray(this.tooltipStyle)) {\n          return this.isRange ? this.tooltipStyle : this.tooltipStyle[1]\n        } else if (typeof this.tooltipStyle === 'function') {\n          return this.tooltipStyle(this.val, this.currentIndex)\n        } else {\n          return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle\n        }\n      },\n      elemStyles () {\n        return this.direction === 'vertical' ? {\n          width: `${this.width}px`,\n          height: '100%'\n        } : {\n          height: `${this.height}px`\n        }\n      },\n      dotStyles () {\n        return this.direction === 'vertical' ? {\n          width: `${this.dotWidthVal}px`,\n          height: `${this.dotHeightVal}px`,\n          left: `${(-(this.dotWidthVal - this.width) / 2)}px`\n        } : {\n          width: `${this.dotWidthVal}px`,\n          height: `${this.dotHeightVal}px`,\n          top: `${(-(this.dotHeightVal - this.height) / 2)}px`\n        }\n      },\n      piecewiseDotStyle () {\n        return this.direction === 'vertical' ? {\n          width: `${this.width}px`,\n          height: `${this.width}px`\n        } : {\n          width: `${this.height}px`,\n          height: `${this.height}px`\n        }\n      },\n      piecewiseDotWrap () {\n        if (!this.piecewise && !this.piecewiseLabel) {\n          return false\n        }\n\n        let arr = []\n        for (let i = 0; i <= this.total; i++) {\n          const style = this.direction === 'vertical' ? {\n            bottom: `${this.gap * i - this.width / 2}px`,\n            left: 0\n          } : {\n            left: `${this.gap * i - this.height / 2}px`,\n            top: 0\n          }\n          const index = this.reverse ? (this.total - i) : i\n          const label = this.data ? this.data[index] : (this.spacing * index) + this.min\n          arr.push({\n            style,\n            label: this.formatter ? this.formatting(label) : label,\n            inRange: index >= this.indexRange[0] && index <= this.indexRange[1]\n          })\n        }\n        return arr\n      }\n    },\n    watch: {\n      value (val) {\n        this.flag || this.setValue(val, true)\n      },\n      max (val) {\n        if (val < this.min) {\n          return this.printError('The maximum value can not be less than the minimum value.')\n        }\n\n        const resetVal = this.limitValue(this.val)\n        this.setValue(resetVal)\n        this.refresh()\n      },\n      min (val) {\n        if (val > this.max) {\n          return this.printError('The minimum value can not be greater than the maximum value.')\n        }\n\n        const resetVal = this.limitValue(this.val)\n        this.setValue(resetVal)\n        this.refresh()\n      },\n      show (bool) {\n        if (bool && !this.size) {\n          this.$nextTick(() => {\n            this.refresh()\n          })\n        }\n      },\n      fixed () {\n        this.computedFixedValue()\n      },\n      minRange () {\n        this.computedFixedValue()\n      }\n    },\n    methods: {\n      bindEvents () {\n        document.addEventListener('touchmove', this.moving, {passive: false})\n        document.addEventListener('touchend', this.moveEnd, {passive: false})\n        document.addEventListener('mousedown', this.blurSlider)\n        document.addEventListener('mousemove', this.moving)\n        document.addEventListener('mouseup', this.moveEnd)\n        document.addEventListener('mouseleave', this.moveEnd)\n        document.addEventListener('keydown', this.handleKeydown)\n        document.addEventListener('keyup', this.handleKeyup)\n        window.addEventListener('resize', this.refresh)\n\n        if (this.isRange && this.tooltipMerge) {\n          this.$refs.dot0.addEventListener('transitionend', this.handleOverlapTooltip)\n          this.$refs.dot1.addEventListener('transitionend', this.handleOverlapTooltip)\n        }\n      },\n      unbindEvents () {\n        document.removeEventListener('touchmove', this.moving)\n        document.removeEventListener('touchend', this.moveEnd)\n        document.removeEventListener('mousedown', this.blurSlider)\n        document.removeEventListener('mousemove', this.moving)\n        document.removeEventListener('mouseup', this.moveEnd)\n        document.removeEventListener('mouseleave', this.moveEnd)\n        document.removeEventListener('keydown', this.handleKeydown)\n        document.removeEventListener('keyup', this.handleKeyup)\n        window.removeEventListener('resize', this.refresh)\n\n        if (this.isRange && this.tooltipMerge) {\n          this.$refs.dot0.removeEventListener('transitionend', this.handleOverlapTooltip)\n          this.$refs.dot1.removeEventListener('transitionend', this.handleOverlapTooltip)\n        }\n      },\n      handleKeydown (e) {\n        if (!this.useKeyboard || !this.focusFlag) {\n          return false\n        }\n        switch (e.keyCode) {\n        case 37:\n        case 40:\n          e.preventDefault()\n          this.keydownFlag = true\n          this.flag = true\n          this.changeFocusSlider(this.actionsKeyboard[0])\n          break\n        case 38:\n        case 39:\n          e.preventDefault()\n          this.keydownFlag = true\n          this.flag = true\n          this.changeFocusSlider(this.actionsKeyboard[1])\n          break\n        }\n      },\n      handleKeyup () {\n        if (this.keydownFlag) {\n          this.keydownFlag = false\n          this.flag = false\n        }\n      },\n      changeFocusSlider (fn) {\n        if (this.isRange) {\n          let arr = this.currentIndex.map((index, i) => {\n            if (i === this.focusSlider || this.fixed) {\n              const val = fn(index)\n              const range = this.fixed ? this.valueLimit[i] : [0, this.total]\n              if (val <= range[1] && val >= range[0]) {\n                return val\n              }\n            }\n            return index\n          })\n          if (arr[0] > arr[1]) {\n            this.focusSlider = this.focusSlider === 0 ? 1 : 0\n            arr = arr.reverse()\n          }\n          this.setIndex(arr)\n        } else {\n          this.setIndex(fn(this.currentIndex))\n        }\n      },\n      blurSlider (e) {\n        const dot = this.isRange ? this.$refs[`dot${this.focusSlider}`] : this.$refs.dot\n        if (!dot || dot === e.target) {\n          return false\n        }\n        this.focusFlag = false\n      },\n      formatting (value) {\n        return typeof this.formatter === 'string' ? this.formatter.replace(/\\{value\\}/, value) : this.formatter(value)\n      },\n      mergeFormatting (value1, value2) {\n        return typeof this.mergeFormatter === 'string' ? this.mergeFormatter.replace(/\\{(value1|value2)\\}/g, (_, key) => key === 'value1' ? value1 : value2) : this.mergeFormatter(value1, value2)\n      },\n      getPos (e) {\n        this.realTime && this.getStaticData()\n        return this.direction === 'vertical' ? (this.reverse ? (e.pageY - this.offset) : (this.size - (e.pageY - this.offset))) : (this.reverse ? (this.size - (e.clientX - this.offset)) : (e.clientX - this.offset))\n      },\n      processClick (e) {\n        if (this.fixed) {\n          e.stopPropagation()\n        }\n      },\n      wrapClick (e) {\n        if (this.isDisabled || !this.clickable || this.processFlag || this.dragFlag) return false\n        const pos = this.getPos(e)\n        if (this.isRange) {\n          if (this.disabledArray.every(b => b === false)) {\n            this.currentSlider = pos > ((this.position[1] - this.position[0]) / 2 + this.position[0]) ? 1 : 0\n          } else if (this.disabledArray[0]) {\n            if (pos < this.position[0]) return false\n            this.currentSlider = 1\n          } else if (this.disabledArray[1]) {\n            if (pos > this.position[1]) return false\n            this.currentSlider = 0\n          }\n        }\n        if (this.disabledArray[this.currentSlider]) {\n          return false\n        }\n        this.setValueOnPos(pos)\n\n        if (this.isRange && this.tooltipMerge) {\n          const timer = setInterval(() => this.handleOverlapTooltip(), 16.7)\n          setTimeout(() => window.clearInterval(timer), this.speed * 1000)\n        }\n      },\n      moveStart (e, index = 0, isProcess) {\n        if (this.disabledArray[index]) {\n          return false\n        }\n        if (this.stopPropagation) {\n          e.stopPropagation()\n        }\n        if (this.isRange) {\n          this.currentSlider = index\n\n          if (isProcess) {\n            if (!this.processDragable) {\n              return false\n            }\n            this.processFlag = true\n            this.processSign = {\n              pos: this.position,\n              start: this.getPos((e.targetTouches && e.targetTouches[0]) ? e.targetTouches[0] : e)\n            }\n          }\n\n          if (!this.enableCross && this.val[0] === this.val[1]) {\n            this.crossFlag = true\n          }\n        }\n        if (!isProcess && this.useKeyboard) {\n          this.focusFlag = true\n          this.focusSlider = index\n        }\n        this.flag = true\n        this.$emit('drag-start', this)\n      },\n      moving (e) {\n        if (this.stopPropagation) {\n          e.stopPropagation()\n        }\n\n        if (!this.flag) return false\n        e.preventDefault()\n\n        if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0]\n        if (this.processFlag) {\n          this.currentSlider = 0\n          this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, true)\n          this.currentSlider = 1\n          this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, true)\n        } else {\n          this.dragFlag = true\n          this.setValueOnPos(this.getPos(e), true)\n        }\n\n        if (this.isRange && this.tooltipMerge) {\n          this.handleOverlapTooltip()\n        }\n      },\n      moveEnd (e) {\n        if (this.stopPropagation) {\n          e.stopPropagation()\n        }\n        if (this.flag) {\n          this.$emit('drag-end', this)\n          if (this.lazy && this.isDiff(this.val, this.value)) {\n            this.syncValue()\n          }\n        } else {\n          return false\n        }\n        this.flag = false\n        window.setTimeout(() => {\n          this.crossFlag = false\n          this.dragFlag = false\n          this.processFlag = false\n        }, 0)\n        this.setPosition()\n      },\n      setValueOnPos (pos, isDrag) {\n        const range = this.isRange ? this.limit[this.currentSlider] : this.limit\n        const valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit\n        const index = Math.round(pos / this.gap)\n        if (pos >= range[0] && pos <= range[1]) {\n          const v = this.getValueByIndex(index)\n          this.setTransform(pos)\n          this.setCurrentValue(v, isDrag)\n          if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {\n            this.setTransform(pos + ((this.fixedValue * this.gap) * (this.currentSlider === 0 ? 1 : -1)), true)\n            this.setCurrentValue((v * this.multiple + (this.fixedValue * this.spacing * this.multiple * (this.currentSlider === 0 ? 1 : -1))) / this.multiple, isDrag, true)\n          }\n        } else {\n          const anotherSlider = pos < range[0] ? 0 : 1\n          const currentSlider = anotherSlider === 0 ? 1 : 0\n          this.setTransform(range[anotherSlider])\n          this.setCurrentValue(valueRange[anotherSlider])\n          if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {\n            this.setTransform(this.limit[this.idleSlider][anotherSlider], true)\n            this.setCurrentValue(this.valueLimit[this.idleSlider][anotherSlider], isDrag, true)\n          } else if (this.isRange && (this.enableCross || this.crossFlag) && !this.isFixed && !this.disabledArray[anotherSlider] && this.currentSlider === currentSlider) {\n            this.focusSlider = anotherSlider\n            this.currentSlider = anotherSlider\n          }\n        }\n        this.crossFlag = false\n      },\n      isLessRange (pos, index) {\n        if (!this.isRange || (!this.minRange && !this.maxRange)) {\n          return false\n        }\n\n        const diff = this.currentSlider === 0 ? this.currentIndex[1] - index : index - this.currentIndex[0]\n        if (this.minRange && diff <= this.minRange) {\n          this.fixedValue = this.minRange\n          return true\n        }\n        if (this.maxRange && diff >= this.maxRange) {\n          this.fixedValue = this.maxRange\n          return true\n        }\n        this.computedFixedValue()\n        return false\n      },\n      isDiff (a, b) {\n        if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {\n          return true\n        } else if (Array.isArray(a) && a.length === b.length) {\n          return a.some((v, i) => v !== b[i])\n        }\n        return a !== b\n      },\n      setCurrentValue (val, isDrag, isIdleSlider) {\n        const slider = isIdleSlider ? this.idleSlider : this.currentSlider\n        if (val < this.minimum || val > this.maximum) return false\n        if (this.isRange) {\n          if (this.isDiff(this.currentValue[slider], val)) {\n            this.currentValue.splice(slider, 1, val)\n            if (!this.lazy || !this.flag) {\n              this.syncValue()\n            }\n          }\n        } else if (this.isDiff(this.currentValue, val)) {\n          this.currentValue = val\n          if (!this.lazy || !this.flag) {\n            this.syncValue()\n          }\n        }\n        isDrag || this.setPosition()\n      },\n      getValueByIndex (index) {\n        return ((this.spacing * this.multiple) * index + (this.minimum * this.multiple)) / this.multiple\n      },\n      getIndexByValue (value) {\n        return Math.round((value - this.minimum) * this.multiple) / (this.spacing * this.multiple)\n      },\n      setIndex (val) {\n        if (Array.isArray(val) && this.isRange) {\n          let value\n          if (this.data) {\n            value = [this.data[val[0]], this.data[val[1]]]\n          } else {\n            value = [this.getValueByIndex(val[0]), this.getValueByIndex(val[1])]\n          }\n          this.setValue(value)\n        } else {\n          val = this.getValueByIndex(val)\n          if (this.isRange) {\n            this.currentSlider = val > ((this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0]) ? 1 : 0\n          }\n          this.setCurrentValue(val)\n        }\n      },\n      setValue (val, noCb, speed) {\n        if (this.isDiff(this.val, val)) {\n          const resetVal = this.limitValue(val)\n          this.val = this.isRange ? resetVal.concat() : resetVal\n          this.computedFixedValue()\n          this.syncValue(noCb)\n        }\n\n        this.$nextTick(() => this.setPosition(speed))\n      },\n      computedFixedValue () {\n        if (!this.isFixed) {\n          this.fixedValue = 0\n          return false\n        }\n\n        this.fixedValue = Math.max(this.fixed ? this.currentIndex[1] - this.currentIndex[0] : 0, this.minRange || 0)\n      },\n      setPosition (speed) {\n        this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed)\n        if (this.isRange) {\n          this.setTransform(this.position[0], this.currentSlider === 1)\n          this.setTransform(this.position[1], this.currentSlider === 0)\n        } else {\n          this.setTransform(this.position)\n        }\n        this.flag || this.setTransitionTime(0)\n      },\n      setTransform (val, isIdleSlider) {\n        const slider = isIdleSlider ? this.idleSlider : this.currentSlider\n        const value = roundToDPR((this.direction === 'vertical' ? ((this.dotHeightVal / 2) - val) : (val - (this.dotWidthVal / 2))) * (this.reverse ? -1 : 1))\n        const translateValue = this.direction === 'vertical' ? `translateY(${value}px)` : `translateX(${value}px)`\n        const processSize = this.fixed ? `${this.fixedValue * this.gap}px` : `${slider === 0 ? this.position[1] - val : val - this.position[0]}px`\n        const processPos = this.fixed ? `${slider === 0 ? val : (val - this.fixedValue * this.gap)}px` : `${slider === 0 ? val : this.position[0]}px`\n        if (this.isRange) {\n          this.slider[slider].style.transform = translateValue\n          this.slider[slider].style.WebkitTransform = translateValue\n          this.slider[slider].style.msTransform = translateValue\n          if (this.direction === 'vertical') {\n            this.$refs.process.style.height = processSize\n            this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos\n          } else {\n            this.$refs.process.style.width = processSize\n            this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos\n          }\n        } else {\n          this.slider.style.transform = translateValue\n          this.slider.style.WebkitTransform = translateValue\n          this.slider.style.msTransform = translateValue\n          if (this.direction === 'vertical') {\n            this.$refs.process.style.height = `${val}px`\n            this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0\n          } else {\n            this.$refs.process.style.width = `${val}px`\n            this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0\n          }\n        }\n      },\n      setTransitionTime (time) {\n        // In order to avoid browser merge style and modify together\n        time || this.$refs.process.offsetWidth\n\n        if (this.isRange) {\n          for (let i = 0; i < this.slider.length; i++) {\n            this.slider[i].style.transitionDuration = `${time}s`\n            this.slider[i].style.WebkitTransitionDuration = `${time}s`\n          }\n          this.$refs.process.style.transitionDuration = `${time}s`\n          this.$refs.process.style.WebkitTransitionDuration = `${time}s`\n        } else {\n          this.slider.style.transitionDuration = `${time}s`\n          this.slider.style.WebkitTransitionDuration = `${time}s`\n          this.$refs.process.style.transitionDuration = `${time}s`\n          this.$refs.process.style.WebkitTransitionDuration = `${time}s`\n        }\n      },\n      limitValue (val) {\n        if (this.data) {\n          return val\n        }\n\n        const inRange = (v) => {\n          if (v < this.min) {\n            this.printError(`The value of the slider is ${val}, the minimum value is ${this.min}, the value of this slider can not be less than the minimum value`)\n            return this.min\n          } else if (v > this.max) {\n            this.printError(`The value of the slider is ${val}, the maximum value is ${this.max}, the value of this slider can not be greater than the maximum value`)\n            return this.max\n          }\n          return v\n        }\n\n        if (this.isRange) {\n          return val.map((v) => inRange(v))\n        } else {\n          return inRange(val)\n        }\n      },\n      syncValue (noCb) {\n        let val = this.isRange ? this.val.concat() : this.val\n        this.$emit('input', val)\n        this.keydownFlag && this.$emit('on-keypress', val)\n        noCb || this.$emit('callback', val)\n      },\n      getValue () {\n        return this.val\n      },\n      getIndex () {\n        return this.currentIndex\n      },\n      getStaticData () {\n        if (this.$refs.elem) {\n          this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth\n          this.offset = this.direction === 'vertical' ? (this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop) : this.$refs.elem.getBoundingClientRect().left\n        }\n      },\n      refresh () {\n        if (this.$refs.elem) {\n          this.getStaticData()\n          this.computedFixedValue()\n          this.setPosition()\n        }\n      },\n      printError (msg) {\n        if (this.debug) {\n          console.error(`[VueSlider error]: ${msg}`)\n        }\n      },\n      handleOverlapTooltip () {\n        const isDirectionSame = this.tooltipDirection[0] === this.tooltipDirection[1]\n\n        if (this.isRange && isDirectionSame) {\n          const tooltip0 = this.reverse ? this.$refs.tooltip1 : this.$refs.tooltip0\n          const tooltip1 = this.reverse ? this.$refs.tooltip0 : this.$refs.tooltip1\n          const tooltip0Rect = tooltip0.getBoundingClientRect()\n          const tooltip1Rect = tooltip1.getBoundingClientRect()\n\n          const tooltip0Right = tooltip0Rect.right\n          const tooltip1Left = tooltip1Rect.left\n\n          const tooltip0Y = tooltip0Rect.top\n          const tooltip1Y = tooltip1Rect.top + tooltip1Rect.height\n\n          const horizontalOverlap = this.direction === 'horizontal' && tooltip0Right > tooltip1Left\n          const verticalOverlap = this.direction === 'vertical' && tooltip1Y > tooltip0Y\n\n          if (horizontalOverlap || verticalOverlap) {\n            this.handleDisplayMergedTooltip(true)\n          } else {\n            this.handleDisplayMergedTooltip(false)\n          }\n        }\n      },\n      handleDisplayMergedTooltip (show) {\n        const tooltip0 = this.$refs.tooltip0\n        const tooltip1 = this.$refs.tooltip1\n        const mergedTooltip = this.$refs.process.getElementsByClassName('vue-merged-tooltip')[0]\n\n        if (show) {\n          tooltip0.style.visibility = 'hidden'\n          tooltip1.style.visibility = 'hidden'\n          mergedTooltip.style.visibility = 'visible'\n        } else {\n          tooltip0.style.visibility = 'visible'\n          tooltip1.style.visibility = 'visible'\n          mergedTooltip.style.visibility = 'hidden'\n        }\n      }\n    },\n    mounted () {\n      this.isComponentExists = true\n\n      if (typeof window === 'undefined' || typeof document === 'undefined') {\n        return this.printError('window or document is undefined, can not be initialization.')\n      }\n\n      this.$nextTick(() => {\n        if (this.isComponentExists) {\n          this.getStaticData()\n          this.setValue(this.limitValue(this.value), true, this.startAnimation ? this.speed : 0)\n          this.bindEvents()\n\n          if (this.isRange && this.tooltipMerge && !this.startAnimation) {\n            this.$nextTick(() => {\n              this.handleOverlapTooltip()\n            })\n          }\n        }\n      })\n\n      this.isMounted = true\n    },\n    beforeDestroy () {\n      this.isComponentExists = false\n      this.unbindEvents()\n    }\n  }\n</script>\n\n<style>\n  .vue-slider-component {\n    position: relative;\n    box-sizing: border-box;\n    user-select: none;\n    -webkit-user-select:none;\n    -moz-user-select:none;\n    -o-user-select:none;\n  }\n  .vue-slider-component.vue-slider-disabled {\n    opacity: .5;\n    cursor: not-allowed;\n  }\n  .vue-slider-component.vue-slider-has-label {\n    margin-bottom: 15px;\n  }\n  .vue-slider-component.vue-slider-disabled .vue-slider-dot {\n    cursor: not-allowed;\n  }\n  .vue-slider-component .vue-slider {\n    position: relative;\n    display: block;\n    border-radius: 15px;\n    background-color: #ccc;\n  }\n  .vue-slider-component .vue-slider::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n  .vue-slider-component .vue-slider-process {\n    position: absolute;\n    border-radius: 15px;\n    background-color: #3498db;\n    transition: all 0s;\n    z-index: 1;\n  }\n  .vue-slider-component .vue-slider-process.vue-slider-process-dragable {\n    cursor: pointer;\n    z-index: 3;\n  }\n  .vue-slider-component.vue-slider-horizontal .vue-slider-process {\n    width: 0;\n    height: 100%;\n    top: 0;\n    left: 0;\n    will-change: width;\n  }\n  .vue-slider-component.vue-slider-vertical .vue-slider-process {\n    width: 100%;\n    height: 0;\n    bottom: 0;\n    left: 0;\n    will-change: height;\n  }\n  .vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process {\n    width: 0;\n    height: 100%;\n    top: 0;\n    right: 0;\n  }\n  .vue-slider-component.vue-slider-vertical-reverse .vue-slider-process {\n    width: 100%;\n    height: 0;\n    top: 0;\n    left: 0;\n  }\n  .vue-slider-component .vue-slider-dot {\n    position: absolute;\n    border-radius: 50%;\n    background-color: #fff;\n    box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n    transition: all 0s;\n    will-change: transform;\n    cursor: pointer;\n    z-index: 5;\n  }\n  .vue-slider-component .vue-slider-dot.vue-slider-dot-focus {\n    box-shadow: 0 0 2px 1px #3498db;\n  }\n  .vue-slider-component .vue-slider-dot.vue-slider-dot-dragging {\n    z-index: 5;\n  }\n  .vue-slider-component .vue-slider-dot.vue-slider-dot-disabled {\n    z-index: 4;\n  }\n  .vue-slider-component.vue-slider-horizontal .vue-slider-dot {\n    left: 0;\n  }\n  .vue-slider-component.vue-slider-vertical .vue-slider-dot {\n    bottom: 0;\n  }\n  .vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot {\n    right: 0;\n  }\n  .vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot {\n    top: 0;\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap {\n    display: none;\n    position: absolute;\n    z-index: 9;\n  }\n  .vue-slider-component .vue-slider-tooltip {\n    display: block;\n    font-size: 14px;\n    white-space: nowrap;\n    padding: 2px 5px;\n    min-width: 20px;\n    text-align: center;\n    color: #fff;\n    border-radius: 5px;\n    border: 1px solid #3498db;\n    background-color: #3498db;\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top {\n    top: -9px;\n    left: 50%;\n    transform: translate(-50%, -100%);\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom {\n    bottom: -9px;\n    left: 50%;\n    transform: translate(-50%, 100%);\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left {\n    top: 50%;\n    left: -9px;\n    transform: translate(-100%, -50%);\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right {\n    top: 50%;\n    right: -9px;\n    transform: translate(100%, -50%);\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip::before,\n  .vue-slider-component .vue-slider-tooltip-top .vue-merged-tooltip .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent\\0;\n    border-top-color: inherit;\n    transform: translate(-50%, 0);\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-merged-tooltip {\n    display: block;\n    visibility: hidden;\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip::before,\n  .vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent\\0;\n    border-bottom-color: inherit;\n    transform: translate(-50%, 0);\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip::before,\n  .vue-slider-component .vue-slider-tooltip-left .vue-merged-tooltip .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: -10px;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent\\0;\n    border-left-color: inherit;\n    transform: translate(0, -50%);\n  }\n  .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip::before,\n  .vue-slider-component .vue-slider-tooltip-right .vue-merged-tooltip .vue-slider-tooltip::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: -10px;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border: 6px solid transparent\\0;\n    border-right-color: inherit;\n    transform: translate(0, -50%);\n  }\n  .vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap {\n    display: block;\n  }\n  .vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap {\n    display: block!important;\n  }\n  .vue-slider-component .vue-slider-piecewise {\n    position: absolute;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    left: 0;\n    top: 0;\n    height: 100%;\n    list-style: none;\n  }\n  .vue-slider-component .vue-slider-piecewise-item {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n  }\n  .vue-slider-component .vue-slider-piecewise-dot {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.16);\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    transition: all .3s;\n  }\n  .vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot, .vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot {\n    visibility: hidden;\n  }\n  .vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label, .vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label {\n    position: absolute;\n    display: inline-block;\n    top: 100%;\n    left: 50%;\n    white-space: nowrap;\n    font-size: 12px;\n    color: #333;\n    transform: translate(-50%, 8px);\n    visibility: visible;\n  }\n  .vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label, .vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label {\n    position: absolute;\n    display: inline-block;\n    top: 50%;\n    left: 100%;\n    white-space: nowrap;\n    font-size: 12px;\n    color: #333;\n    transform: translate(8px, -50%);\n    visibility: visible;\n  }\n  .vue-slider-component .vue-slider-sr-only {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    position: absolute !important;\n  }\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\node_modules\\vue-slider-component\\src\\vue2-slider.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      {
        let hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            const originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      const isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          let code = css.source;
          let index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            const el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
            else style.element.appendChild(textNode);
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var vueSlider = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //


  var script$1 = {
      name: 'switches',

      props: {
          typeBold: {
              default: false
          },

          value: {
              default: false
          },

          disabled: {
              default: false
          },

          label: {
              default: ''
          },

          textEnabled: {
              default: ''
          },

          textDisabled: {
              default: ''
          },

          color: {
              default: 'default'
          },

          theme: {
              default: 'default'
          },

          emitOnMount: {
              default: true
          }
      },

      mounted () {
          if(this.emitOnMount) {
              this.$emit('input', this.value);
          }
      },

      methods: {
          trigger (e) {
              this.$emit('input', e.target.checked);
          }
      },

      computed: {
          classObject () {

              const { color, value, theme, typeBold, disabled } = this;

              return {
                  'vue-switcher' : true,
                  ['vue-switcher--unchecked'] : !value,
                  ['vue-switcher--disabled'] : disabled,
                  ['vue-switcher--bold']: typeBold,
                  ['vue-switcher--bold--unchecked']: typeBold && !value,
                  [`vue-switcher-theme--${theme}`] : color,
                  [`vue-switcher-color--${color}`] : color,
              };

          },

          shouldShowLabel () {
              return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
          }
      }
  };

  /* script */
              const __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("label", { class: _vm.classObject }, [
      _vm.shouldShowLabel
        ? _c("span", { staticClass: "vue-switcher__label" }, [
            _vm.label
              ? _c("span", { domProps: { textContent: _vm._s(_vm.label) } })
              : _vm._e(),
            _vm._v(" "),
            !_vm.label && _vm.value
              ? _c("span", { domProps: { textContent: _vm._s(_vm.textEnabled) } })
              : _vm._e(),
            _vm._v(" "),
            !_vm.label && !_vm.value
              ? _c("span", {
                  domProps: { textContent: _vm._s(_vm.textDisabled) }
                })
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "checkbox", disabled: _vm.disabled },
        domProps: { checked: _vm.value },
        on: { change: _vm.trigger }
      }),
      _vm._v(" "),
      _c("div")
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-58eaef95_0", { source: "/**\n * Default\n */\n/**\n * Bulma\n */\n/**\n * Bootstrap\n */\n.vue-switcher {\n  position: relative;\n  display: inline-block;\n}\n.vue-switcher__label {\n    display: block;\n    font-size: 10px;\n    margin-bottom: 5px;\n}\n.vue-switcher input {\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer;\n}\n.vue-switcher div {\n    height: 15px;\n    width: 36px;\n    position: relative;\n    border-radius: 30px;\n    display: -webkit-flex;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    cursor: pointer;\n    transition: linear .2s, background-color linear .2s;\n}\n.vue-switcher div:after {\n      content: '';\n      height: 20px;\n      width: 20px;\n      border-radius: 100px;\n      display: block;\n      transition: linear .15s, background-color linear .15s;\n      position: absolute;\n      left: 100%;\n      margin-left: -18px;\n      cursor: pointer;\n      top: -3px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.vue-switcher--unchecked div {\n    justify-content: flex-end;\n}\n.vue-switcher--unchecked div:after {\n      left: 15px;\n}\n.vue-switcher--disabled div {\n    opacity: .3;\n}\n.vue-switcher--disabled input {\n    cursor: not-allowed;\n}\n.vue-switcher--bold div {\n    top: -8px;\n    height: 26px;\n    width: 51px;\n}\n.vue-switcher--bold div:after {\n      margin-left: -24px;\n      top: 3px;\n}\n.vue-switcher--bold--unchecked div:after {\n    left: 28px;\n}\n.vue-switcher--bold .vue-switcher__label span {\n    padding-bottom: 7px;\n    display: inline-block;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div {\n    background-color: #b7b7b7;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div:after {\n      background-color: #9d9d9d;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #aaa;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #c4c4c4;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div {\n    background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div:after {\n      background-color: #539bb9;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #c0dae5;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div {\n    background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div:after {\n      background-color: #b95353;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #e5c0c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div {\n    background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div:after {\n      background-color: #bab353;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #e6e3c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div {\n    background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div:after {\n      background-color: #b97953;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div {\n    background-color: #e5cec0;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after {\n      background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div {\n    background-color: #77c88d;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div:after {\n      background-color: #53b96e;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #c0e5ca;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #77c88d;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div {\n    background-color: gainsboro;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #e8e8e8;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div {\n    background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div:after {\n      background-color: #00d1b2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #6bffe9;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div {\n    background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div:after {\n      background-color: #3273dc;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #b5ccf2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div {\n    background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div:after {\n      background-color: #ff3860;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #ffd1da;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div {\n    background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after {\n      background-color: #ffdd57;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #fffcf0;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div {\n    background-color: #3dde75;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div:after {\n      background-color: #22c65b;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #94edb3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #3dde75;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div {\n    background-color: #e6e6e6;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: whitesmoke;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div {\n    background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after {\n      background-color: #337ab7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #9fc4e4;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div {\n    background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after {\n      background-color: #5cb85c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div {\n    background-color: #c7e6c7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after {\n      background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div {\n    background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after {\n      background-color: #5bc0de;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div {\n    background-color: #daf1f8;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after {\n      background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div {\n    background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after {\n      background-color: #f0ad4e;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div {\n    background-color: #fceedb;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after {\n      background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div {\n    background-color: #d9534f;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after {\n      background-color: #c9302c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div {\n    background-color: #eba5a3;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after {\n      background-color: #d9534f;\n}\n", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\node_modules\\vue-switches\\src\\switches.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      {
        let hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            const originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$1() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
      const isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          let code = css.source;
          let index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            const el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
            else style.element.appendChild(textNode);
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var Switches = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      __vue_create_injector__$1,
      undefined
    );

  //
  let scaleTimeoutId = null;
  var script$2 = {
    components: {
      vueSlider,
      Switches
    },
    inject: ['root'],
    data() {
      return {
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
      // slider bugfix
      setTimeout(() => {
        this.recenterPosition();
      }, 75 * 3);
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
          return this.localHeight;
        },
        set(value) {
          this.localHeight = Number(value);
          this.$root.$emit('elastigantt.row.height.change', Number(value));
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
  };

  /* script */
              const __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "elastigantt__header" }, [
      _c("div", { staticClass: "elastigantt__header-title" }, [
        !_vm.root.state.title.html
          ? _c("div", { style: _vm.root.state.title.style }, [
              _vm._v(_vm._s(_vm.root.state.title.label))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.root.state.title.html
          ? _c("div", {
              style: _vm.root.state.title.style,
              domProps: { innerHTML: _vm._s(_vm.root.state.title.label) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "elastigantt__header-options" }, [
        _c(
          "button",
          {
            staticClass: "elastigantt__btn-recenter",
            style: _vm.buttonStyle,
            on: { click: _vm.recenterPosition }
          },
          [_vm._v(_vm._s(_vm.root.state.locale.Now))]
        ),
        _vm._v(" "),
        _c("label", [
          _vm._v(_vm._s(_vm.root.state.locale["X-Scale"]) + "\r\n      "),
          _c(
            "div",
            { style: _vm.sliderWrapperStyle },
            [
              _c("vue-slider", {
                attrs: {
                  tooltip: "false",
                  "tooltip-dir": "right",
                  "process-style": _vm.processStyle,
                  "slider-style": _vm.sliderStyle,
                  max: "24",
                  min: "2",
                  width: "100px"
                },
                model: {
                  value: _vm.scale,
                  callback: function($$v) {
                    _vm.scale = $$v;
                  },
                  expression: "scale"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("label", [
          _vm._v(_vm._s(_vm.root.state.locale["Y-Scale"]) + "\r\n      "),
          _c(
            "div",
            { style: _vm.sliderWrapperStyle },
            [
              _c("vue-slider", {
                attrs: {
                  tooltip: "false",
                  "tooltip-dir": "right",
                  "process-style": _vm.processStyle,
                  "slider-style": _vm.sliderStyle,
                  max: "100",
                  min: "6",
                  width: "100px"
                },
                model: {
                  value: _vm.height,
                  callback: function($$v) {
                    _vm.height = $$v;
                  },
                  expression: "height"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("label", [
          _vm._v(_vm._s(_vm.root.state.locale["Before/After"]) + "\r\n      "),
          _c(
            "div",
            { style: _vm.sliderWrapperStyle },
            [
              _c("vue-slider", {
                attrs: {
                  tooltip: "false",
                  "tooltip-dir": "right",
                  "process-style": _vm.processStyle,
                  "slider-style": _vm.sliderStyle,
                  max: "31",
                  min: "0",
                  width: "100px"
                },
                model: {
                  value: _vm.scope,
                  callback: function($$v) {
                    _vm.scope = $$v;
                  },
                  expression: "scope"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("label", [
          _vm._v(_vm._s(_vm.root.state.locale["Task list width"]) + "\r\n      "),
          _c(
            "div",
            { style: _vm.sliderWrapperStyle },
            [
              _c("vue-slider", {
                attrs: {
                  tooltip: "false",
                  "tooltip-dir": "right",
                  "process-style": _vm.processStyle,
                  "slider-style": _vm.sliderStyle,
                  max: "100",
                  min: "0",
                  width: "100px"
                },
                model: {
                  value: _vm.divider,
                  callback: function($$v) {
                    _vm.divider = $$v;
                  },
                  expression: "divider"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "elastigantt__header-task-list-switch",
            style: _vm.taskListSwitchStyle
          },
          [
            _c("switches", {
              staticClass: "mr-1",
              model: {
                value: _vm.root.state.taskList.display,
                callback: function($$v) {
                  _vm.$set(_vm.root.state.taskList, "display", $$v);
                },
                expression: "root.state.taskList.display"
              }
            }),
            _vm._v(
              " " +
                _vm._s(_vm.root.state.locale["Display task list"]) +
                "\r\n    "
            )
          ],
          1
        )
      ])
    ])
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Header.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Header = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  //
  //
  //

  var script$3 = {
    inject: ['root'],
    props: ['column'],
    data() {
      return {};
    },
    computed: {
      getStyle() {
        const state = this.root.state;
        return {
          height: '100%',
          width: root.state.taskList.resizerWidth + 'px'
        };
      }
    }
  };

  /* script */
              const __vue_script__$3 = script$3;
              
  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "elastigantt__task-list-resizer",
      staticStyle: {}
    })
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\Resizer.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListResizer = __vue_normalize__$3(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$4 = {
    inject: ['root'],
    props: ['tasks'],
    data() {
      const border = 0.5;
      return {
        border,
        borderStyle: {
          'fill': '#ffffffa0',
          'stroke': '#000000',
          'stroke-width': border
        },
        lineOffset: 5,
        lineStyle: {
          'fill': 'transparent',
          'stroke': '#000000',
          'stroke-width': 1,
          'stroke-linecap': 'round'
        }
      };
    },
    computed: {
      allChildren() {
        const children = [];
        this.tasks.forEach(task => {
          task.allChildren.forEach(child => {
            children.push(child);
          });
        });
        return children;
      },
      collapsed() {
        if (this.tasks.length === 0) {
          return false;
        }
        let collapsed = 0;
        for (let i = 0, len = this.tasks.length; i < len; i++) {
          if (this.tasks[i].collapsed) {
            collapsed++;
          }
        }
        return collapsed === this.tasks.length;
      },
    },
    methods: {
      toggle() {
        if (this.allChildren.length === 0) {
          return;
        }
        const collapsed = !this.collapsed;
        this.tasks.forEach(task => {
          task.collapsed = collapsed;
          task.allChildren.forEach(child => {
            child.visible = !collapsed && !child.parent.collapsed;
          });
        });
      }
    }
  };

  /* script */
              const __vue_script__$4 = script$4;
              
  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "elastigantt__task-list-column-expander",
        style: _vm.root.state.taskList.styles.expander.wrapper
      },
      [
        _c(
          "svg",
          {
            style: _vm.root.state.taskList.styles.expander.content,
            attrs: {
              width: _vm.root.state.taskList.expander.size,
              height: _vm.root.state.taskList.expander.size
            }
          },
          [
            _vm.allChildren.length
              ? _c("rect", {
                  style: _vm.root.state.taskList.styles.expander,
                  attrs: {
                    x: _vm.border,
                    y: _vm.border,
                    width: _vm.root.state.taskList.expander.size - _vm.border * 2,
                    height:
                      _vm.root.state.taskList.expander.size - _vm.border * 2,
                    rx: "2",
                    ry: "2"
                  },
                  on: { click: _vm.toggle }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.allChildren.length
              ? _c("line", {
                  style: _vm.lineStyle,
                  attrs: {
                    x1: _vm.lineOffset,
                    y1: _vm.root.state.taskList.expander.size / 2,
                    x2: _vm.root.state.taskList.expander.size - _vm.lineOffset,
                    y2: _vm.root.state.taskList.expander.size / 2
                  },
                  on: { click: _vm.toggle }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.collapsed
              ? _c("line", {
                  style: _vm.lineStyle,
                  attrs: {
                    x1: _vm.root.state.taskList.expander.size / 2,
                    y1: _vm.lineOffset,
                    x2: _vm.root.state.taskList.expander.size / 2,
                    y2: _vm.root.state.taskList.expander.size - _vm.lineOffset
                  },
                  on: { click: _vm.toggle }
                })
              : _vm._e()
          ]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* component normalizer */
    function __vue_normalize__$4(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\Expander.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListExpander = __vue_normalize__$4(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  //

  var script$5 = {
    components: {
      TaskListExpander,
    },
    inject: ['root'],
    props: ['expanderStyle'],
    data() {
      return {
        resizer: {
          moving: false,
          x: 0
        }
      };
    },
    computed: {
      getStyle() {
        return column => {
          const state = this.root.state;
          return Object.assign({
            'height': (state.calendar.height + state.calendar.styles.column['stroke-width']) + 'px',
            'margin-bottom': state.calendar.gap + 'px',
            'width': column.finalWidth + 'px'
          }, state.taskList.styles.header);
        }
      },
      collapsible() {
        return this.root.state.tasks.filter(task => task.allChildren.length > 0);
      }
    },
    methods: {
      resizerMouseDown(event, column) {
        if (!this.resizerMoving) {
          this.resizer.moving = column;
          this.resizer.x = event.clientX;
          this.resizer.initialWidth = column.width;
          this.$root.$emit('elastigantt.taskList.column.width.change.start', this.resizer.moving.width);
        }
      },
      resizerMouseMove(event) {
        if (this.resizer.moving) {
          this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
          this.$root.$emit('elastigantt.taskList.column.width.change', this.resizer.moving.width);
        }
      },
      resizerMouseUp(event) {
        if (this.resizer.moving) {
          this.$root.$emit('elastigantt.taskList.column.width.change', this.resizer.moving.width);
          this.$root.$emit('elastigantt.taskList.column.width.change.stop', this.resizer.moving.width);
          this.resizer.moving = false;
        }
      }
    },
    created() {
      this.$root.$on('elastigantt.main.mousemove', this.resizerMouseMove);
      this.$root.$on('elastigantt.main.mouseup', this.resizerMouseUp);
    }
  };

  /* script */
              const __vue_script__$5 = script$5;
              
  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "elastigantt__task-list-header" },
      _vm._l(_vm.root.state.taskList.columns, function(column) {
        return _c(
          "div",
          {
            key: column._id,
            staticClass: "elastigantt__task-list-header-column",
            style: _vm.getStyle(column)
          },
          [
            column.expander
              ? _c("task-list-expander", {
                  style: _vm.expanderStyle,
                  attrs: { tasks: _vm.collapsible }
                })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "elastigantt__task-list-header-label",
                style: column.styles.label,
                attrs: { column: column },
                on: {
                  mouseup: function($event) {
                    _vm.resizerMouseUp($event, column);
                  }
                }
              },
              [_vm._v(_vm._s(column.label))]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "elastigantt__task-list-header-resizer",
              attrs: { column: column },
              on: {
                mousedown: function($event) {
                  _vm.resizerMouseDown($event, column);
                }
              }
            })
          ],
          1
        )
      })
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* component normalizer */
    function __vue_normalize__$5(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\TaskListHeader.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListHeader = __vue_normalize__$5(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$6 = {
    inject: ['root'],
    props: ['column', 'task'],
    data() {
      return {};
    },
    computed: {
      html() {
        if (typeof this.column.html !== 'undefined' && this.column.html === true) {
          return true;
        }
        return false;
      },
      value() {
        if (typeof this.column.value === 'function') {
          return this.column.value(this.task);
        }
        return this.task[this.column.value];
      }
    }
  };

  /* script */
              const __vue_script__$6 = script$6;
              
  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "elastigantt__task-list-item-column",
        style: _vm.column.style
      },
      [
        _c(
          "div",
          { staticClass: "elastigantt__task-list-item-value--wrapper" },
          [
            _vm._t("default"),
            _vm._v(" "),
            !_vm.html
              ? _c(
                  "div",
                  {
                    staticClass: "elastigantt__task-list-item-value",
                    style: _vm.column.styles.value
                  },
                  [_vm._v(_vm._s(_vm.value))]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.html
              ? _c("div", {
                  staticClass: "elastigantt__task-list-item-value",
                  style: _vm.column.styles.value,
                  domProps: { innerHTML: _vm._s(_vm.value) }
                })
              : _vm._e()
          ],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = undefined;
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* component normalizer */
    function __vue_normalize__$6(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\ItemColumn.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var ItemColumn = __vue_normalize__$6(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      undefined,
      undefined
    );

  //

  var script$7 = {
    components: {
      TaskListExpander,
      ItemColumn
    },
    inject: ['root'],
    props: ['task', 'expanderStyle'],
    data() {
      return {};
    },
  };

  /* script */
              const __vue_script__$7 = script$7;
              
  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "elastigantt__task-list-item",
        style: _vm.root.state.taskList.styles.row
      },
      _vm._l(_vm.root.state.taskList.columns, function(column) {
        return _c(
          "item-column",
          { key: column._id, attrs: { column: column, task: _vm.task } },
          [
            column.expander
              ? _c("task-list-expander", {
                  style: _vm.expanderStyle,
                  attrs: { tasks: [_vm.task] }
                })
              : _vm._e()
          ],
          1
        )
      })
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* component normalizer */
    function __vue_normalize__$7(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\TaskListItem.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskListItem = __vue_normalize__$7(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      undefined,
      undefined
    );

  //

  var script$8 = {
    components: {
      TaskListResizer,
      TaskListHeader,
      TaskListItem,
    },
    inject: ['root'],
    data() {
      return {};
    },
    computed: {
      getHeaderExpanderStyle() {
        const state = this.root.state;
        const padding = this.root.getMaximalLevel() * state.taskList.expander.padding;
        return Object.assign({}, state.taskList.styles.header, {
          'width': (state.taskList.expander.width + state.calendar.styles.column['stroke-width'] + state.taskList.expander.margin) / 100 * state.taskList.percent + 'px',
          'height': state.calendar.height + state.calendar.styles.column['stroke-width'] + 'px',
          'margin-bottom': state.calendar.gap + 'px',
          'padding-right': state.taskList.expander.margin + 'px',
          'padding-left': state.taskList.expander.margin + 'px',
          'margin': 'auto 0px',
          'display': 'inline-flex'
        });
      },
      getListExpanderStyle() {
        return task => {
          const state = this.root.state;
          const padding = (task.parents.length - 1) * state.taskList.expander.padding;
          const maxLevel = this.root.getMaximalLevel();
          const fullPadding = maxLevel * state.taskList.expander.padding;
          let height = state.row.height + (state.grid.horizontal.gap * 2) - state.grid.horizontal.style.strokeWidth;
          let width = (state.taskList.expander.size + state.calendar.styles.column['stroke-width'] + padding + state.taskList.expander.margin) / 100 * state.taskList.percent;
          if (state.taskList.expander.straight) {
            width = (maxLevel - 1) * state.taskList.expander.size + state.taskList.expander.padding * 2;
          }
          const style = {
            'width': width + 'px',
            'height': height + 'px',
            'border-color': '#00000010',
            'padding-left': padding + state.taskList.expander.margin + 'px',
            'margin': 'auto 0px',
          };
          return style;
        }
      }
    }
  };

  /* script */
              const __vue_script__$8 = script$8;
              
  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.root.state.taskList.display
      ? _c(
          "foreignObject",
          {
            staticClass: "elastigantt__task-list-object",
            attrs: { x: "0", y: "0", width: "100%", height: "100%" }
          },
          [
            _c(
              "div",
              {
                staticClass: "elastigantt__task-list-container",
                attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
              },
              [
                _c("div", {
                  domProps: { innerHTML: _vm._s(_vm.root.state.defs.join("")) }
                }),
                _vm._v(" "),
                _c("task-list-resizer"),
                _vm._v(" "),
                _c("task-list-header", {
                  attrs: { "expander-style": _vm.getHeaderExpanderStyle }
                }),
                _vm._v(" "),
                _vm._l(_vm.root.visibleTasks, function(task) {
                  return _c("task-list-item", {
                    key: task.id,
                    attrs: {
                      task: task,
                      "expander-style": _vm.getListExpanderStyle(task)
                    }
                  })
                })
              ],
              2
            )
          ]
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* component normalizer */
    function __vue_normalize__$8(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\TaskList\\TaskList.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TaskList = __vue_normalize__$8(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //

  var script$9 = {
    inject: ['root'],
    data() {
      return {
        verticalLines: [],
        horizontalLines: [],
      };
    },
    created() {
      this.$root.$on('elastigantt.recenterPosition', this.recenterPosition);
      this.$root.$on('elastigantt.scope.change', this.regenerate);
      this.$root.$on('elastigantt.times.timeZoom.change', this.regenerate);
      this.$root.$on('elastigantt.row.height.change', this.regenerate);
      this.$root.$on('elastigantt.tree.scroll', this.regenerate);
      this.regenerate();
    },
    methods: {
      recenterPosition() {
        this.root.scrollToTime(this.timeLinePosition.time);
      },
      generateVerticalLines() {
        let lines = [];
        const state = this.root.state;
        state.times.steps.forEach((step) => {
          lines.push({
            key: step.date.valueOf(),
            x1: step.offset.px,
            y1: state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap,
            x2: step.offset.px,
            y2: state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + (state.tasks.length * (state.row.height + state.grid.horizontal.gap * 2)) + state.grid.horizontal.style.strokeWidth,
            inViewPort: this.root.isInsideViewPort(step.offset.px, 1)
          });
        });
        return this.verticalLines = lines;
      },
      generateHorizontalLines() {
        let lines = [];
        const state = this.root.state;
        let tasks = this.root.visibleTasks;
        for (let index = 0, len = tasks.length; index <= len; index++) {
          lines.push({
            key: 'hl' + index,
            x1: 0,
            y1: index * (state.row.height + state.grid.horizontal.gap * 2) + state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + state.grid.horizontal.style.strokeWidth / 2,
            x2: '100%',
            y2: index * (state.row.height + state.grid.horizontal.gap * 2) + state.calendar.height + state.calendar.styles.column['stroke-width'] + state.calendar.gap + state.grid.horizontal.style.strokeWidth / 2
          });
        }
        return this.horizontalLines = lines;
      },
      regenerate() {
        this.$nextTick(() => {
          this.generateVerticalLines();
          this.generateHorizontalLines();
        });
      }
    },
    computed: {
      inViewPort() {
        return (line) => {
          const state = this.root.state;
          return line.x1 >= state.scroll.tree.left && line.x1 <= state.scroll.tree.right;
        }
      },
      timeLinePosition() {
        const state = this.root.state;
        const d = new Date();
        const current = d.getTime();
        const currentOffset = this.root.timeToPixelOffsetX(current);
        const timeLine = {
          x: 0,
          y1: state.calendar.height + state.calendar.gap,
          y2: '100%',
          dateTime: '',
          time: current
        };
        timeLine.x = currentOffset;
        timeLine.dateTime = d.toLocaleDateString();
        return timeLine;
      },
      getVStyle() {
        return this.root.state.grid.vertical.style;
      },
      getHStyle() {
        return this.root.state.grid.horizontal.style;
      },
    },
  };

  /* script */
              const __vue_script__$9 = script$9;
              
  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      [
        _vm._l(_vm.horizontalLines, function(line, index) {
          return _c("line", {
            key: line.key,
            staticClass: "elastigantt__grid-horizontal-line",
            style: _vm.getHStyle,
            attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
          })
        }),
        _vm._v(" "),
        _vm._l(_vm.verticalLines, function(line, index) {
          return line.inViewPort
            ? _c("line", {
                key: line.key,
                staticClass: "elastigantt__grid-vertical-line",
                style: _vm.getVStyle,
                attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
              })
            : _vm._e()
        }),
        _vm._v(" "),
        _c("line", {
          staticClass: "elastigantt__grid-time-line",
          style: _vm.root.state.grid.timeLine.style,
          attrs: {
            x1: _vm.timeLinePosition.x,
            y1: _vm.timeLinePosition.y1,
            x2: _vm.timeLinePosition.x,
            y2: _vm.timeLinePosition.y2
          }
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = undefined;
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* component normalizer */
    function __vue_normalize__$9(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Grid\\Grid.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Grid = __vue_normalize__$9(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //

  var script$a = {
    inject: ['root'],
    props: ['item'],
    data() {
      return {};
    },
    computed: {
      getTextX() {
        return this.item.x + this.item.width / 2;
      },
      getTextY() {
        return this.item.y + this.item.height / 2;
      }
    }
  };

  /* script */
              const __vue_script__$a = script$a;
              
  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("g", { staticClass: "elastigantt__calendar-row-group" }, [
      _c("rect", {
        staticClass: "elastigantt__calendar-row",
        style: _vm.root.state.calendar.styles.row,
        attrs: {
          x: _vm.item.x,
          y: _vm.item.y,
          width: _vm.item.width,
          height: _vm.item.height
        }
      }),
      _vm._v(" "),
      _c(
        "text",
        {
          style: _vm.root.state.calendar.styles.text,
          attrs: {
            x: _vm.getTextX,
            y: _vm.getTextY,
            "alignment-baseline": "middle",
            "text-anchor": "middle"
          }
        },
        [_vm._v(_vm._s(_vm.item.label))]
      )
    ])
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = undefined;
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* component normalizer */
    function __vue_normalize__$a(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Calendar\\CalendarRow.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var CalendarRow = __vue_normalize__$a(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      undefined,
      undefined
    );

  //
  var script$b = {
    components: {
      CalendarRow
    },
    inject: ['root'],
    data() {
      return {
        hours: [],
        days: [],
        months: [],
      };
    },
    created() {
      this.$root.$on('elastigantt.scope.change', this.regenerate);
      this.$root.$on('elastigantt.times.timeZoom.change', this.regenerate);
      this.regenerate();
    },
    methods: {
      howManyHoursFit(dayIndex) {
        let firstDate = dayjs(this.root.state.times.steps[dayIndex].date);
        const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 2;
        let fullCellWidth = this.root.state.times.steps[dayIndex].width.px;
        let formatNames = Object.keys(this.root.state.calendar.hour.format);
        for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
          for (let formatName of formatNames) {
            if ((this.root.state.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <= fullCellWidth && hours > 1) {
              return {
                count: hours,
                type: formatName
              };
            }
          }
        }
        return {
          count: 0,
          type: ''
        };
      },
      howManyDaysFit() {
        let firstDate = dayjs(this.root.state.times.steps[0].date);
        const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 2;
        let fullWidth = this.root.state.width;
        let formatNames = Object.keys(this.root.state.calendar.day.format);
        for (let days = this.root.state.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
          for (let formatName of formatNames) {
            if ((this.root.state.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth && days > 1) {
              return {
                count: days,
                type: formatName
              };
            }
          }
        }
        return {
          count: 0,
          type: ''
        };
      },
      howManyMonthsFit() {
        let firstDate = dayjs(this.root.state.times.firstDate);
        const additionalSpace = this.root.state.calendar.styles.column['stroke-width'] + 2;
        let fullWidth = this.root.state.width;
        let formatNames = Object.keys(this.root.state.calendar.month.format);
        const startMonth = this.root.state.times.firstDate.month();
        let currentMonth = dayjs(this.root.state.times.firstDate);
        let previousMonth = currentMonth.clone();
        const lastTime = this.root.state.times.lastTime;
        let monthsCount = 1;
        while (currentMonth.valueOf() <= lastTime) {
          currentMonth = currentMonth.add(1, 'day');
          if (previousMonth.month() != currentMonth.month()) {
            monthsCount++;
          }
          previousMonth = currentMonth.clone();
        }
        for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
          for (let formatName of formatNames) {
            if ((this.root.state.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth && months > 1) {
              return {
                count: months,
                type: formatName
              };
            }
          }
        }
        return {
          count: 1,
          type: formatNames[0]
        };
      },
      hourTextStyle() {
        return 'font-family:' + this.root.state.calendar.hour.fontFamily + ';font-size:' + this.root.state.calendar.hour.fontSize;
      },
      dayTextStyle() {
        return 'font-family:' + this.root.state.calendar.day.fontFamily + ';font-size:' + this.root.state.calendar.day.fontSize;
      },
      generateHours() {
        let hours = [];
        for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex++) {
          const hoursCount = this.howManyHoursFit(dayIndex);
          const hourStep = 24 / hoursCount.count;
          const hourWidthPx = this.root.state.times.steps[dayIndex].width.px / hoursCount.count;
          for (let i = 0, len = hoursCount.count; i < len; i++) {
            const date = dayjs(this.root.state.times.steps[dayIndex].date).add(i * hourStep, 'hour');
            hours.push({
              key: this.root.state.times.steps[dayIndex].date.valueOf() + 'h' + i,
              x: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.times.steps[dayIndex].offset.px + hourWidthPx * i,
              y: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.calendar.day.height + this.root.state.calendar.month.height,
              width: hourWidthPx,
              height: this.root.state.calendar.hour.height,
              label: this.root.state.calendar.hour.format[hoursCount.type](date)
            });
          }
        }
        return this.hours = hours;
      },
      generateDays() {
        let days = [];
        const daysCount = this.howManyDaysFit();
        const dayStep = Math.ceil(this.root.state.times.steps.length / daysCount.count);
        for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex += dayStep) {
          let dayWidthPx = 0;
          // day could be shorter (daylight saving time) so join widths and divide
          for (let currentStep = 0; currentStep < dayStep; currentStep++) {
            if (typeof this.root.state.times.steps[dayIndex + currentStep] !== 'undefined') {
              dayWidthPx += this.root.state.times.steps[dayIndex + currentStep].width.px;
            }
          }
          const date = dayjs(this.root.state.times.steps[dayIndex].date);
          days.push({
            key: this.root.state.times.steps[dayIndex].date.valueOf() + 'd',
            x: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.times.steps[dayIndex].offset.px,
            y: this.root.state.calendar.styles.column['stroke-width'] / 2 + this.root.state.calendar.month.height,
            width: dayWidthPx,
            height: this.root.state.calendar.day.height,
            label: this.root.state.calendar.day.format[daysCount.type](date)
          });
        }
        return this.days = days;
      },
      generateMonths() {
        let months = [];
        const monthsCount = this.howManyMonthsFit();
        let formatNames = Object.keys(this.root.state.calendar.month.format);
        let currentDate = dayjs(this.root.state.times.firstDate);
        for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
          let monthWidth = 0;
          let monthOffset = Number.MAX_SAFE_INTEGER;
          let finalDate = dayjs(currentDate).add(1, 'month').startOf('month');
          if (finalDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
            finalDate = dayjs(this.root.state.times.lastDate);
          }
          // we must find first and last step to get the offsets / widths
          for (let step = 0, len = this.root.state.times.steps.length; step < len; step++) {
            let currentStep = this.root.state.times.steps[step];
            if (currentStep.date.valueOf() >= currentDate.valueOf() && currentStep.date.valueOf() < finalDate.valueOf()) {
              monthWidth += currentStep.width.px;
              if (currentStep.offset.px < monthOffset) {
                monthOffset = currentStep.offset.px;
              }
            }
          }
          let label = '';
          for (let formatName of formatNames) {
            if ((this.root.state.calendar.month.maxWidths[formatName] + 2) <= monthWidth) {
              label = this.root.state.calendar.month.format[formatName](currentDate);
            }
          }
          months.push({
            key: monthIndex + 'm',
            x: this.root.state.calendar.styles.column['stroke-width'] / 2 + monthOffset,
            y: this.root.state.calendar.styles.column['stroke-width'] / 2,
            width: monthWidth,
            height: this.root.state.calendar.month.height,
            label: label
          });

          currentDate = currentDate.add(1, 'month').startOf('month');
          if (currentDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
            currentDate = dayjs(this.root.state.times.lastDate);
          }
        }
        return this.months = months;
      },
      regenerate() {
        this.$nextTick(() => {
          this.generateHours();
          this.generateDays();
          this.generateMonths();
        });
      }
    },
    computed: {
      getX() {
        return this.root.state.calendar.styles.column['stroke-width'] / 2;
      },
      getY() {
        return this.root.state.calendar.styles.column['stroke-width'] / 2;
      },
      getWidth() {
        let width = this.root.state.width - this.root.state.calendar.styles.column['stroke-width'];
        return width;
      },
    }
  };

  /* script */
              const __vue_script__$b = script$b;
              
  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      { staticClass: "elastigantt__calendar-group" },
      [
        _c(
          "foreignObject",
          {
            attrs: {
              x: _vm.getX,
              y: _vm.getY,
              width: _vm.getWidth,
              height: _vm.root.state.calendar.height
            }
          },
          [
            _c("div", {
              staticClass: "elastigantt__calendar",
              style: _vm.root.state.calendar.styles.wrapper,
              attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
            })
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.months, function(month, index) {
          return _c("calendar-row", { key: month.key, attrs: { item: month } })
        }),
        _vm._v(" "),
        _vm._l(_vm.days, function(day, index) {
          return _vm.root.isInsideViewPort(day.x, day.width)
            ? _c("calendar-row", { key: day.key, attrs: { item: day } })
            : _vm._e()
        }),
        _vm._v(" "),
        _vm._l(_vm.hours, function(hour, index) {
          return _vm.root.isInsideViewPort(hour.x, hour.width)
            ? _c("calendar-row", { key: hour.key, attrs: { item: hour } })
            : _vm._e()
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = undefined;
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* component normalizer */
    function __vue_normalize__$b(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Calendar\\Calendar.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Calendar = __vue_normalize__$b(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //

  var script$c = {
    inject: ['root'],
    props: ['tasks'],
    data() {
      return {};
    },
    methods: {
      getPoints(fromTaskId, toTaskId) {
        const state = this.root.state;
        const fromTask = this.root.getTask(fromTaskId);
        const toTask = this.root.getTask(toTaskId);
        if (!toTask.visible || !fromTask.visible) {
          return '';
        }
        const startX = fromTask.x + fromTask.width;
        const startY = fromTask.y + fromTask.height / 2;
        const stopX = toTask.x;
        const stopY = toTask.y + toTask.height / 2;
        const distanceX = stopX - startX;
        let distanceY;
        let yMultiplier = 1;
        if (stopY >= startY) {
          distanceY = stopY - startY;
        } else {
          distanceY = startY - stopY;
          yMultiplier = -1;
        }
        const offset = 10;
        const roundness = 4;
        const isBefore = distanceX <= offset + roundness;
        let points = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
        if (isBefore) {
          points +=
            `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY + roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - (roundness * yMultiplier)}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY + (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2 + (roundness * yMultiplier)}
            L ${startX - offset + distanceX - roundness},${stopY - roundness * yMultiplier}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
        } else {
          points +=
            `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness * yMultiplier}
            L ${startX + distanceX / 2},${stopY - roundness * yMultiplier}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
        }
        return points;
      }
    },
    computed: {
      dependencyTasks() {
        return this.tasks.filter(task => typeof task.dependentOn !== 'undefined').map(task => {
          task.dependencyLines = task.dependentOn.map(id => {
            return {
              points: this.getPoints(id, task.id)
            };
          });
          return task;
        });
      }
    }
  };

  /* script */
              const __vue_script__$c = script$c;
              
  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      { staticClass: "elastigantt__tree-dependency-lines-container" },
      _vm._l(_vm.dependencyTasks, function(task) {
        return _c(
          "g",
          { key: task.id, attrs: { task: task } },
          _vm._l(task.dependencyLines, function(dependencyLine) {
            return _c("path", {
              key: dependencyLine.id,
              style: _vm.root.state.dependencyLines.style,
              attrs: { task: task, d: dependencyLine.points }
            })
          })
        )
      })
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$c = undefined;
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = false;
    /* component normalizer */
    function __vue_normalize__$c(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\DependencyLines.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var DependencyLines = __vue_normalize__$c(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //

  var script$d = {
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getWidth() {
        const textStyle = this.root.state.treeText.styles.text;
        this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
        const textWidth = this.root.state.ctx.measureText(this.task.label).width;
        return textWidth + this.root.state.treeText.xPadding * 2;
      }
    }
  };

  /* script */
              const __vue_script__$d = script$d;
              
  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        attrs: {
          x: _vm.task.x + _vm.task.width + _vm.root.state.treeText.offset,
          y: _vm.task.y,
          width: _vm.getWidth,
          height: _vm.task.height
        }
      },
      [
        _c("rect", {
          style: _vm.root.state.treeText.styles.background,
          attrs: { x: "0", y: "0", width: "100%", height: "100%" }
        }),
        _vm._v(" "),
        _c(
          "text",
          {
            style: _vm.root.state.treeText.styles.text,
            attrs: {
              x: _vm.root.state.treeText.xPadding,
              y: "50%",
              "alignment-baseline": "middle"
            }
          },
          [_vm._v(_vm._s(_vm.task.label))]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = undefined;
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* component normalizer */
    function __vue_normalize__$d(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Text.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var TreeText = __vue_normalize__$d(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$e = {
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      getX() {
        const state = this.root.state;
        this.root.state.ctx.font = `${root.state.info.fontWeight} ${root.state.info.fontSize} ${root.state.info.fontFamily}`;
        const textWidth = this.root.state.ctx.measureText(this.task.label).width / 2 + 10;
        return this.task.x + this.task.width / 2 - textWidth;
      },
      getWidth() {
        return this.root.state.ctx.measureText(this.task.label).width + 20;
      },
      getTextStyle() {
        let state = this.root.state;
        return `${root.state.info.textStyle};font-family:${root.state.info.fontFamily};font-size:${
            root.state.info.fontSize};font-weight:${root.state.info.fontWeight};`;
      }
    }
  };

  /* script */
              const __vue_script__$e = script$e;
              
  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        staticClass: "elastigantt__info",
        attrs: {
          x: _vm.getX,
          y: _vm.task.y,
          width: _vm.getWidth,
          height: _vm.root.state.row.height,
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      [
        _c("rect", {
          style: _vm.root.state.info.style,
          attrs: { x: "0", y: "0", width: "100%", height: "100%" }
        }),
        _vm._v(" "),
        _c(
          "text",
          {
            style: _vm.getTextStyle,
            attrs: {
              x: "50%",
              y: "50%",
              "text-anchor": "middle",
              "alignment-baseline": "middle"
            }
          },
          [_vm._v(_vm._s(_vm.task.label))]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    const __vue_inject_styles__$e = undefined;
    /* scoped */
    const __vue_scope_id__$e = undefined;
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = false;
    /* component normalizer */
    function __vue_normalize__$e(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Info.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Info = __vue_normalize__$e(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$f = {
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
      getSolidStyle() {
        return Object.assign({}, this.root.state.progress.styles.bar.solid, this.task.progressBarStyle.bar);
      },
      getLineStyle() {
        return Object.assign({}, {
          stroke: this.root.state.row.styles.bar.stroke + 'a0',
          'stroke-width': this.root.state.row.styles.bar['stroke-width'] / 2
        }, this.task.style);
      }
    }
  };

  /* script */
              const __vue_script__$f = script$f;
              
  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("g", { staticClass: "elastigantt__tree-row-progress-bar" }, [
      _c("defs", [
        _c(
          "pattern",
          {
            attrs: {
              id: "diagonalHatch",
              width: _vm.root.state.progress.width,
              height: _vm.root.state.progress.width,
              patternTransform: "rotate(45 0 0)",
              patternUnits: "userSpaceOnUse"
            }
          },
          [
            _c("line", {
              style: _vm.root.state.progress.styles.line,
              attrs: {
                x1: "0",
                y1: "0",
                x2: "0",
                y2: _vm.root.state.progress.width
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _vm.root.state.progress.bar
        ? _c("rect", {
            style: _vm.getSolidStyle,
            attrs: {
              id: "elastigantt__tree-row-progress",
              x: "0",
              y: "0",
              width: _vm.getProgressWidth
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.root.state.progress.pattern
        ? _c("g", [
            _c("rect", {
              style: _vm.root.state.progress.styles.bar.pattern,
              attrs: {
                x: _vm.getProgressWidth,
                y: "0",
                width: 100 - _vm.task.progress + "%",
                height: "100%"
              }
            }),
            _vm._v(" "),
            _c("path", {
              style: _vm.getLineStyle,
              attrs: { d: _vm.getLinePoints }
            })
          ])
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = undefined;
    /* scoped */
    const __vue_scope_id__$f = undefined;
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* component normalizer */
    function __vue_normalize__$f(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\ProgressBar.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var ProgressBar = __vue_normalize__$f(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      undefined,
      undefined
    );

  //

  var script$g = {
    components: {
      TreeText,
      Info,
      ProgressBar
    },
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      clipPathId() {
        return 'elastigantt__task-clip-path-' + this.task.id;
      },
      getViewBox() {
        const task = this.task;
        return `0 0 ${task.width} ${task.height}`;
      },
      getGroupTransform() {
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getPoints() {
        const task = this.task;
        const fifty = this.task.height - this.task.height / 4;
        const full = this.task.height;
        return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
      },
      getStyle() {
        return Object.assign({}, this.root.state.row.styles.bar, this.task.style);
      }
    },
    methods: {
      treeRowClick() {
        this.task.tooltip.visible = !this.task.tooltip.visible;
      },
      treeRowMouseOver() {
        this.task.mouseOver = true;
      },
      treeRowMouseOut() {
        this.task.mouseOver = false;
      }
    }
  };

  /* script */
              const __vue_script__$g = script$g;
              
  /* template */
  var __vue_render__$g = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      {
        staticClass: "elastigantt__tree-row-task-group",
        on: { mouseover: _vm.treeRowMouseOver, mouseout: _vm.treeRowMouseOut }
      },
      [
        _c(
          "svg",
          {
            staticClass: "elastigantt__tree-row-task",
            attrs: {
              x: _vm.task.x,
              y: _vm.task.y,
              width: _vm.task.width,
              height: _vm.task.height,
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: { click: _vm.treeRowClick }
          },
          [
            _c("defs", [
              _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
                _c("polygon", { attrs: { points: _vm.getPoints } })
              ])
            ]),
            _vm._v(" "),
            _c("polygon", {
              style: _vm.getStyle,
              attrs: { points: _vm.getPoints }
            }),
            _vm._v(" "),
            _c("progress-bar", {
              attrs: {
                task: _vm.task,
                "clip-path": "url(#" + _vm.clipPathId + ")"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.root.state.row.showText
          ? _c("tree-text", { attrs: { task: _vm.task } })
          : _vm._e(),
        _vm._v(" "),
        _vm.root.state.info.display && _vm.task.mouseOver
          ? _c("info", { attrs: { task: _vm.task } })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

    /* style */
    const __vue_inject_styles__$g = undefined;
    /* scoped */
    const __vue_scope_id__$g = undefined;
    /* module identifier */
    const __vue_module_identifier__$g = undefined;
    /* functional template */
    const __vue_is_functional_template__$g = false;
    /* component normalizer */
    function __vue_normalize__$g(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Row\\Task.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Task = __vue_normalize__$g(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$g,
      __vue_script__$g,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      undefined,
      undefined
    );

  //

  var script$h = {
    components: {
      TreeText,
      Info,
      ProgressBar
    },
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      clipPathId() {
        return 'elastigantt__milestone-clip-path-' + this.task.id;
      },
      getViewBox() {
        return `0 0 ${this.task.width} ${this.task.height}`;
      },
      getGroupTransform() {
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getPoints() {
        const task = this.task;
        const fifty = task.height / 2;
        let offset = fifty;
        if (task.width / 2 - offset < 0) {
          offset = task.width / 2;
        }
        return `0,${fifty}
        ${offset},0
        ${task.width - offset},0
        ${task.width},${fifty}
        ${task.width - offset},${task.height}
        ${offset},${task.height}`;
      },
      getStyle() {
        return Object.assign({}, this.root.state.row.styles.bar, this.task.style);
      }
    },
    methods: {
      treeRowClick() {
        this.task.tooltip.visible = !this.task.tooltip.visible;
      },
      treeRowMouseOver() {
        this.task.mouseOver = true;
      },
      treeRowMouseOut() {
        this.task.mouseOver = false;
      }
    }
  };

  /* script */
              const __vue_script__$h = script$h;
              
  /* template */
  var __vue_render__$h = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      {
        staticClass: "elastigantt__tree-row-milestone-group",
        on: { mouseover: _vm.treeRowMouseOver, mouseout: _vm.treeRowMouseOut }
      },
      [
        _c(
          "svg",
          {
            staticClass: "elastigantt__tree-row-milestone",
            attrs: {
              x: _vm.task.x,
              y: _vm.task.y,
              width: _vm.task.width,
              height: _vm.task.height,
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: { click: _vm.treeRowClick }
          },
          [
            _c("defs", [
              _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
                _c("polygon", { attrs: { points: _vm.getPoints } })
              ])
            ]),
            _vm._v(" "),
            _c("polygon", {
              style: _vm.getStyle,
              attrs: { points: _vm.getPoints }
            }),
            _vm._v(" "),
            _c("progress-bar", {
              attrs: {
                task: _vm.task,
                "clip-path": "url(#" + _vm.clipPathId + ")"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.root.state.row.showText
          ? _c("tree-text", { attrs: { task: _vm.task } })
          : _vm._e(),
        _vm._v(" "),
        _vm.root.state.info.display && _vm.task.mouseOver
          ? _c("info", { attrs: { task: _vm.task } })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$h = undefined;
    /* scoped */
    const __vue_scope_id__$h = undefined;
    /* module identifier */
    const __vue_module_identifier__$h = undefined;
    /* functional template */
    const __vue_is_functional_template__$h = false;
    /* component normalizer */
    function __vue_normalize__$h(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Row\\Milestone.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Milestone = __vue_normalize__$h(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$h,
      __vue_script__$h,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      undefined,
      undefined
    );

  //

  var script$i = {
    components: {
      TreeText,
      Info,
      ProgressBar
    },
    inject: ['root'],
    props: ['task'],
    data() {
      return {};
    },
    computed: {
      clipPathId() {
        return 'elastigantt__project-clip-path-' + this.task.id;
      },
      getViewBox() {
        return `0 0 ${this.task.width} ${this.task.height}`;
      },
      getGroupTransform() {
        return `translate(${this.task.x} ${this.task.y})`;
      },
      getPoints() {
        const task = this.task;
        const fifty = task.height / 2;
        let offset = fifty;
        if (task.width / 2 - offset < 0) {
          offset = task.width / 2;
        }
        const bottom = task.height - task.height / 4;
        const corner = task.height / 6;
        const smallCorner = task.height / 8;
        return `M ${smallCorner},0
                L ${task.width - smallCorner} 0
                L ${task.width} ${smallCorner}
                L ${task.width} ${bottom}
                L ${task.width - corner} ${task.height}
                L ${task.width - corner * 2} ${bottom}
                L ${corner * 2} ${bottom}
                L ${corner} ${task.height}
                L 0 ${bottom}
                L 0 ${smallCorner}
                Z
        `;
      },
      getStyle() {
        return Object.assign({}, this.root.state.row.styles.bar, this.task.style);
      }
    },
    methods: {
      treeRowClick() {
        this.task.tooltip.visible = !this.task.tooltip.visible;
      },
      treeRowMouseOver() {
        this.task.mouseOver = true;
      },
      treeRowMouseOut() {
        this.task.mouseOver = false;
      }
    }
  };

  /* script */
              const __vue_script__$i = script$i;
              
  /* template */
  var __vue_render__$i = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "g",
      {
        staticClass: "elastigantt__tree-row-project-group",
        on: { mouseover: _vm.treeRowMouseOver, mouseout: _vm.treeRowMouseOut }
      },
      [
        _c(
          "svg",
          {
            staticClass: "elastigantt__tree-row",
            attrs: {
              x: _vm.task.x,
              y: _vm.task.y,
              width: _vm.task.width,
              height: _vm.task.height,
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: { click: _vm.treeRowClick }
          },
          [
            _c("defs", [
              _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
                _c("path", {
                  style: _vm.root.state.row.styles.bar,
                  attrs: { d: _vm.getPoints }
                })
              ])
            ]),
            _vm._v(" "),
            _c("path", { style: _vm.getStyle, attrs: { d: _vm.getPoints } }),
            _vm._v(" "),
            _c("progress-bar", {
              attrs: {
                task: _vm.task,
                "clip-path": "url(#" + _vm.clipPathId + ")"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.root.state.row.showText
          ? _c("tree-text", { attrs: { task: _vm.task } })
          : _vm._e(),
        _vm._v(" "),
        _vm.root.state.info.display && _vm.task.mouseOver
          ? _c("info", { attrs: { task: _vm.task } })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$i = undefined;
    /* scoped */
    const __vue_scope_id__$i = undefined;
    /* module identifier */
    const __vue_module_identifier__$i = undefined;
    /* functional template */
    const __vue_is_functional_template__$i = false;
    /* component normalizer */
    function __vue_normalize__$i(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Row\\Project.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Project = __vue_normalize__$i(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
      __vue_inject_styles__$i,
      __vue_script__$i,
      __vue_scope_id__$i,
      __vue_is_functional_template__$i,
      __vue_module_identifier__$i,
      undefined,
      undefined
    );

  //

  var script$j = {
    components: {
      Grid,
      DependencyLines,
      Calendar,
      Task,
      Milestone,
      Project
    },
    inject: ['root'],
    data() {
      return {};
    },
    computed: {
      getWidth() {
        const state = this.root.state;
        return state.width;
      },
      getHeight() {
        const state = this.root.state;
        return state.height;
      }
    }
  };

  /* script */
              const __vue_script__$j = script$j;
              
  /* template */
  var __vue_render__$j = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        staticClass: "elastigantt_tree-object",
        attrs: {
          x: "0",
          y: "0",
          width: _vm.getWidth,
          height: _vm.getHeight,
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      [
        _c("calendar"),
        _vm._v(" "),
        _c("grid"),
        _vm._v(" "),
        _c("dependency-lines", { attrs: { tasks: _vm.root.visibleTasks } }),
        _vm._v(" "),
        _vm._l(_vm.root.visibleTasks, function(task) {
          return _c(
            "g",
            { attrs: { task: task } },
            [_c(task.type, { tag: "component", attrs: { task: task } })],
            1
          )
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$j = undefined;
    /* scoped */
    const __vue_scope_id__$j = undefined;
    /* module identifier */
    const __vue_module_identifier__$j = undefined;
    /* functional template */
    const __vue_is_functional_template__$j = false;
    /* component normalizer */
    function __vue_normalize__$j(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Tree\\Tree.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Tree = __vue_normalize__$j(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
      __vue_inject_styles__$j,
      __vue_script__$j,
      __vue_scope_id__$j,
      __vue_is_functional_template__$j,
      __vue_module_identifier__$j,
      undefined,
      undefined
    );

  //

  var script$k = {
    components: {
      'TopHeader': Header,
      'TaskList': TaskList,
      'Tree': Tree
    },
    inject: ['root'],
    props: ['tasks', 'options'],
    data() {
      return {
        defs: ''
      };
    },
    created() {
      let css = '';
      try {
        for (let i = 0, len = document.styleSheets.length; i < len; i++) {
          let styleSheet = document.styleSheets[i];
          if (styleSheet.title === 'elastigantt__style') {
            for (let r = 0, rules = styleSheet.rules.length; r < rules; r++) {
              let rule = styleSheet.rules[r];
              css += rule.cssText + "\n";
            }
            break;
          }
        }
        // css       = "<![CDATA[\n" + css + "]]>";
        this.defs = `<style type="text/css">${css}</style>`;
        this.root.state.defs.push(this.defs);
      } catch (e) {
        console.log("Cannot add stylesheet to SVG. You must run this app from server.");
      }
      // this.root.state.defs.forEach((def) => { this.defs += def; });
    },
    mounted() {
      this.root.state.svgMain = this.$refs.svgMain;
      this.root.state.svgTree = this.$refs.svgTree;
      this.root.state.svgTreeContainer = this.$refs.svgTreeContainer;
      this.root.state.svgTaskList = this.$refs.svgTaskList;
      this.root.state.treeScrollContainer = this.$refs.treeScrollContainer;
    },
    computed: {
      getWidth() {
        return this.root.state.width + this.root.state.taskList.finalWidth;
      },
      getMainStyle() {
        const state = this.root.state;
        return {
          width: state.width + 'px'
        };
      },
      getMarginLeft() {
        if (!this.root.state.taskList.display) {
          return '0px';
        }
        return this.root.state.taskList.finalWidth + 'px';
      }
    },
    methods: {
      mouseMove(event) {
        this.$root.$emit('elastigantt.main.mousemove', event);
      },
      mouseUp(event) {
        this.$root.$emit('elastigantt.main.mouseup', event);
      },
      onScroll(ev) {
        this.$root.$emit('elastigantt.tree.scroll', ev);
      },
      onWheel(ev) {
        this.$root.$emit('elastigantt.tree.wheel', ev);
      }
    }
  };

  /* script */
              const __vue_script__$k = script$k;
              
  /* template */
  var __vue_render__$k = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "elastigantt__main" },
      [
        _c("top-header"),
        _vm._v(" "),
        _c(
          "svg",
          {
            ref: "svgMain",
            staticClass: "elastigantt__svg-container",
            attrs: {
              width: _vm.getWidth,
              height: _vm.root.state.height,
              xmlns: "http://www.w3.org/2000/svg"
            }
          },
          [
            _c(
              "foreignObject",
              { attrs: { x: "0", y: "0", width: "100%", height: "100%" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "elastigantt__container",
                    attrs: { xmlns: "http://www.w3.org/1999/xhtml" },
                    on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "elastigantt__task-list-container" },
                      [
                        _vm.root.state.taskList.display
                          ? _c(
                              "svg",
                              {
                                ref: "svgTaskList",
                                staticClass: "elastigantt__task-list-svg",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: _vm.root.state.taskList.finalWidth,
                                  height: _vm.root.state.height
                                }
                              },
                              [
                                _c("defs", {
                                  domProps: { innerHTML: _vm._s(_vm.defs) }
                                }),
                                _vm._v(" "),
                                _c("task-list")
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        ref: "svgTreeContainer",
                        staticClass: "elastigantt__main-container"
                      },
                      [
                        _c(
                          "svg",
                          {
                            ref: "svgTree",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: _vm.root.state.width,
                              height: _vm.root.state.height
                            }
                          },
                          [
                            _c("defs", {
                              domProps: { innerHTML: _vm._s(_vm.defs) }
                            }),
                            _vm._v(" "),
                            _c("tree", { on: { wheel: _vm.onWheel } })
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "treeScrollContainer",
            staticClass: "elastigantt__tree-scroll-container",
            style: { marginLeft: _vm.getMarginLeft },
            on: { scroll: _vm.onScroll }
          },
          [
            _c("div", {
              staticClass: "elastigantt__tree-scroll",
              style: { height: "1px", width: _vm.root.state.width + "px" }
            })
          ]
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;

    /* style */
    const __vue_inject_styles__$k = undefined;
    /* scoped */
    const __vue_scope_id__$k = undefined;
    /* module identifier */
    const __vue_module_identifier__$k = undefined;
    /* functional template */
    const __vue_is_functional_template__$k = false;
    /* component normalizer */
    function __vue_normalize__$k(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\components\\Main.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Main = __vue_normalize__$k(
      { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
      __vue_inject_styles__$k,
      __vue_script__$k,
      __vue_scope_id__$k,
      __vue_is_functional_template__$k,
      __vue_module_identifier__$k,
      undefined,
      undefined
    );

  //
  //
  //
  //

  function getOptions(userOptions) {
    return {
      title: {
        label: 'Elastigantt',
        html: false,
        style: {
          'font-size': '20px',
          'vertical-align': 'middle',
          'font-weight': '400',
          'line-height': '35px',
          'padding-left': '22px',
          'letter-spacing': '1px',
        }
      },
      debug: false,
      width: 0,
      height: 0,
      scroll: {
        taskList: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        tree: {
          left: 0,
          right: 0,
          percent: 0,
          timePercent: 0,
          top: 0,
          bottom: 0,
          time: 0,
          dateTime: {
            left: '',
            right: ''
          }
        }
      },
      svgElement: null,
      scope: {
        before: 1,
        after: 1
      },
      times: {
        timeScale: 60 * 1000,
        timeZoom: 17,
        timePerPixel: 0,
        fistDate: null,
        firstTime: null, // firstDate getTime()
        lastDate: null,
        lastTime: null, // last date getTime()
        firstTaskDate: null,
        firstTaskTime: 0,
        lastTaskDate: null,
        lastTaskTime: 0,
        totalViewDurationMs: 0,
        totalViewDurationPx: 0,
        stepDuration: 'day', // hour, month
        steps: []
      },
      row: {
        height: 24,
        styles: {
          bar: {
            'fill': '#F75C4C',
            'stroke': '#E74C3C',
            'stroke-width': '1'
          },
          text: {
            'fill': '#ffffff',
            'font-family': 'sans-serif',
            'font-size': '12px'
          }
        },
        showText: true
      },
      treeText: {
        offset: 0,
        styles: {
          text: {
            'font-family': 'sans-serif',
            'font-size': '12px',
            'font-weight': 'normal',
            'fill': '#000000a0'
          },
          background: {
            fill: '#ffffffb0'
          }
        },
        xPadding: 10
      },
      dependencyLines: {
        style: {
          'fill': 'transparent',
          'stroke': '#FFa00090',
          'stroke-width': 2
        }
      },
      progress: {
        width: 20,
        height: 6,
        pattern: true,
        bar: true,
        styles: {
          line: {
            'stroke': '#ffffff25',
            'stroke-width': 20
          },
          bar: {
            pattern: {
              'fill': "url(#diagonalHatch)",
              'transform': 'translateY(0.1) scaleY(0.8)'
            },
            solid: {
              fill: '#E74C3C',
              height: '20%'
            }
          }
        }
      },
      grid: {
        horizontal: {
          gap: 6,
          style: {
            stroke: '#00000010',
            strokeWidth: 1
          },
          lines: []
        },
        vertical: {
          strokeWidth: 1,
          style: {
            stroke: '#00000010',
            strokeWidth: 1
          },
          lines: []
        },
        timeLine: {
          style: {
            stroke: '#FF000080',
            strokeWidth: 1
          }
        }
      },
      info: {
        style: 'fill:#000000a0',
        textStyle: 'fill:#fff',
        fontFamily: 'sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        display: false
      },
      taskList: {
        display: true,
        styles: {
          row: {
            'background': 'transparent',
            'border-color': '#ECF0F1'
          },
          column: {
            'border-color': '#ECF0F1',
            'height': 0,
            'width': 0,
            'line-height': 0
          },
          header: {
            'background': '#ECF0F1',
            'border-color': '#ECF0F1'
          },
          label: {
            'display': 'inline-flex',
            'margin': 'auto 6px',
            'color': '#404040'
          },
          value: {
            'margin': 'auto 6px',
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
            'line-height': '1.5em',
            'word-break': 'keep-all',
            'font-family': 'sans-serif',
            'font-size': '12px',
            'white-space': 'nowrap',
            'color': '#606060'
          },
          expander: {
            wrapper: {
              stroke: '#909090',
              strokeWidth: 1,
              fill: '#ffffffa0',
              display: 'inline-flex',
              'flex-shrink': 0,
            },
            content: {
              display: 'inline-flex',
              cursor: 'pointer',
              margin: 'auto 0px'
            }
          }
        },
        columns: [{
          id: 0,
          label: 'ID',
          value: 'id',
          width: 40,
          styles: {
            label: {}
          }
        }],
        resizerWidth: 0,
        percent: 100,
        width: 0,
        finalWidth: 0,
        expander: {
          size: 16,
          columnWidth: 24,
          padding: 16,
          margin: 10,
          straight: true
        }
      },
      calendar: {
        hours: [],
        days: [],
        months: [],
        gap: 6,
        height: 0,
        styles: {
          wrapper: {
            'width': '100%',
            'height': '100%',
            'background': '#ECF0F1',
            'border-color': '#ECF0F1'
          },
          row: {
            fill: 'transparent',
            stroke: '#ECF0F1'
          },
          column: {
            'stroke': '#ECF0F1',
            'stroke-width': 1,
            'fill': 'transparent'
          },
          text: {
            fontFamily: 'sans-serif',
            'fill': '#404040'
          }
        },
        hour: {
          height: 20,
          display: true,
          fontSize: '12px',
          widths: [],
          maxWidths: {},
          format: {
            long(date) {
              return dayjs(date).locale(userOptions.locale.code).format('HH:mm');
            },
            medium(date) {
              return dayjs(date).locale(userOptions.locale.code).format('HH:mm');
            },
            short(date) {
              return dayjs(date).locale(userOptions.locale.code).format('HH');
            },
          }
        },
        day: {
          height: 20,
          display: true,
          fontSize: '12px',
          widths: [],
          maxWidths: {},
          format: {
            long(date) {
              return dayjs(date).locale(userOptions.locale.code).format('DD dddd');
            },
            medium(date) {
              return dayjs(date).locale(userOptions.locale.code).format('DD ddd');
            },
            short(date) {
              return dayjs(date).locale(userOptions.locale.code).format('DD');
            },
          }
        },
        month: {
          height: 20,
          display: true,
          fontSize: '12px',
          widths: [],
          maxWidths: {},
          format: {
            short(date) {
              return dayjs(date).locale(userOptions.locale.code).format('MM');
            },
            medium(date) {
              return dayjs(date).locale(userOptions.locale.code).format('\'YY MMM');
            },
            long(date) {
              return dayjs(date).locale(userOptions.locale.code).format('YYYY MMMM (MM)');
            }
          }
        }
      },
      defs: [],
      locale: {
        code: 'en',
        'Now': 'Now',
        'X-Scale': 'Zoom-X',
        'Y-Scale': 'Zoom-Y',
        'Task list width': 'Task list',
        'Before/After': 'Expand',
        'Display task list': 'Show task list',
      },
    };
  }

  var script$l = {
    components: {
      'EgMain': Main,
    },
    props: [
      'tasks', 'options'
    ],
    provide() {
      const provider = {};
      const self = this;
      Object.defineProperty(provider, 'root', {
        enumerable: true,
        get: () => self
      });
      return provider;
    },
    data() {
      return {
        state: {}
      };
    },
    methods: {
      isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
      },
      mergeDeep(target, ...sources) {
        if (!sources.length) {
          return target;
        }
        const source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
          for (const key in source) {
            if (this.isObject(source[key])) {
              if (!target[key])
                Object.assign(target, {
                  [key]: {}
                });
              this.mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, {
                [key]: source[key]
              });
            }
          }
        }
        return this.mergeDeep(target, ...sources);
      },
      getScrollBarHeight() {
        const outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.height = "100px";
        outer.style.msOverflowStyle = "scrollbar";
        document.body.appendChild(outer);
        var noScroll = outer.offsetHeight;
        outer.style.overflow = "scroll";
        var inner = document.createElement("div");
        inner.style.height = "100%";
        outer.appendChild(inner);
        var withScroll = inner.offsetHeight;
        outer.parentNode.removeChild(outer);
        return noScroll - withScroll;
      },
      initialize() {
        this.state = this.mergeDeep({}, getOptions(this.options), this.options, {
          tasks: this.tasks.map(task => this.mergeDeep({}, task))
        });
        dayjs.locale(options.locale, null, true);
        this.state.taskList.columns = this.state.taskList.columns.map((column, index) => {
          column.finalWidth = (column.width / 100) * this.state.taskList.percent;
          column.styles = this.mergeDeep({}, this.state.taskList.styles, column.styles);
          if (typeof column.style === 'undefined') {
            column.style = {
              'height': 0 + "px",
              'line-height': 0 + "px",
              'width': 0 + "px"
            };
          }
          column.style = this.mergeDeep({}, this.state.taskList.styles.column, column.style);
          if (typeof column.height === 'undefined') {
            column.height = 0;
          }
          column._id = `${index}-${column.label}`;
          return this.mergeDeep({}, column);
        });
        // initialize observer
        this.state.tasks = this.state.tasks.map(task => {
          task.x = 0;
          task.y = 0;
          task.width = 0;
          task.height = 0;
          task.tooltip = {
            visible: false
          };
          task.mouseOver = false;
          task.dependencyLines = [];
          if (typeof task.visible === 'undefined') {
            task.visible = true;
          }
          if (typeof task.collapsed === 'undefined') {
            task.collapsed = false;
          }
          if (typeof task.dependencyLines === 'undefined') {
            task.dependencyLines = [];
          }
          if (typeof task.dependentOn === 'undefined') {
            task.dependentOn = [];
          }
          if (typeof task.parentId === 'undefined') {
            task.parentId = null;
          }
          if (typeof task.style === 'undefined') {
            task.style = {};
          }
          if (typeof task.progressBarStyle === 'undefined') {
            task.progressBarStyle = this.mergeDeep({}, this.state.progress.styles);
          }
          task.children = [];
          task.allChildren = [];
          task.parents = [];
          task.parent = null;
          task.durationMs = 0;
          return this.mergeDeep({}, task);
        });
        this.state.rootTask = {
          id: null,
          label: 'root',
          children: [],
          allChildren: [],
          parents: [],
          parent: null
        };
        this.resetTaskTree();
        this.state.taskTree = this.makeTaskTree(this.state.rootTask);
        this.state.tasks = this.state.taskTree.allChildren;
        this.state.ctx = document.createElement('canvas').getContext('2d');
        this.calculateTaskListColumnsWidths();
        this.state.scrollBarHeight = this.getScrollBarHeight();
        this.state.outerHeight = this.state.height + this.state.scrollBarHeight;
      },
      calculateCalendarDimensions() {
        this.state.calendar.height = 0;
        if (this.state.calendar.hour.display) {
          this.state.calendar.height += this.state.calendar.hour.height;
        }
        if (this.state.calendar.day.display) {
          this.state.calendar.height += this.state.calendar.day.height;
        }
        if (this.state.calendar.month.display) {
          this.state.calendar.height += this.state.calendar.month.height;
        }
      },
      getMaximalLevel() {
        let maximalLevel = 0;
        this.state.tasks.forEach(task => {
          if (task.parents.length > maximalLevel) {
            maximalLevel = task.parents.length;
          }
        });
        return maximalLevel - 1;
      },
      getMaximalExpanderWidth() {
        return this.getMaximalLevel() * this.state.taskList.expander.padding + this.state.taskList.expander.margin;
      },
      calculateTaskListColumnsWidths() {
        let final = 0;
        this.state.taskList.columns.forEach(column => {
          if (column.expander) {
            column.finalWidth = (this.getMaximalExpanderWidth() + column.width) / 100 * this.state.taskList.percent;
          } else {
            column.finalWidth = (column.width / 100) * this.state.taskList.percent;
          }
          final += column.finalWidth;
          let height = this.state.row.height + this.state.grid.horizontal.gap * 2 - this.state.grid.horizontal.strokeWidth;
          column.style.height = height + "px";
          column.style['line-height'] = height + "px";
          column.style.width = column.finalWidth + "px";
        });
        this.state.taskList.finalWidth = final;
      },
      resetTaskTree() {
        this.state.rootTask.children = [];
        this.state.rootTask.allChildren = [];
        this.state.rootTask.parent = null;
        this.state.rootTask.parents = [];
        for (let i = 0, len = this.state.tasks.length; i < len; i++) {
          let current = this.state.tasks[i];
          current.children = [];
          current.allChildren = [];
          current.parent = null;
          current.parents = [];
        }
      },
      makeTaskTree(task) {
        for (let i = 0, len = this.state.tasks.length; i < len; i++) {
          let current = this.state.tasks[i];
          if (current.parentId === task.id) {
            if (task.parents.length) {
              task.parents.forEach(parent => current.parents.push(parent));
            }
            if (task !== this.root) {
              current.parents.push(task);
              current.parent = task;
            } else {
              current.parents = [];
              current.parent = null;
            }
            current = this.makeTaskTree(current);
            task.allChildren.push(current);
            task.children.push(current);
            current.allChildren.forEach(child => task.allChildren.push(child));
          }
        }
        return task;
      },
      getTask(taskId) {
        return this.tasksById[taskId];
      },
      getChildren(taskId) {
        return this.state.tasks.filter(task => task.parent === taskId);
      },
      getSVG() {
        return this.state.svgMain.outerHTML;
      },
      getImage(type = 'image/png') {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = this.state.svgMain.clientWidth;
            canvas.height = this.state.svgMain.clientHeight;
            canvas.getContext('2d').drawImage(img, 0, 0);
            resolve(canvas.toDataURL(type));
          };
          img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG());
        });
      },
      getHeight(visibleTasks, outer = false) {
        let height = visibleTasks.length * (this.state.row.height + this.state.grid.horizontal.gap * 2) + this.state.calendar.height + this.state.calendar.styles.column['stroke-width'] * 2 + this.state.calendar.gap;
        if (outer) {
          height += this.state.scrollBarHeight;
        }
        return height;
      },
      timeToPixelOffsetX(ms) {
        let x = ms - this.state.times.firstTime;
        if (x) {
          x = x / this.state.times.timePerPixel;
        }
        return x;
      },
      pixelOffsetXToTime(pixelOffsetX) {
        let offset = pixelOffsetX - this.state.grid.vertical.style.strokeWidth;
        return offset * this.state.times.timePerPixel + this.state.times.firstTime;
      },
      isInsideViewPort(x, width, buffer = 5000) {
        return (x + width + buffer >= this.state.scroll.tree.left && x - buffer <= this.state.scroll.tree.right) || (x - buffer <= this.state.scroll.tree.left && x + width + buffer >= this.state.scroll.tree.right);
      },
      onScrollTree(ev) {
        this._onScrollTree(ev.target.scrollLeft, ev.target.scrollTop);
      },
      _onScrollTree(left, top) {
        const treeContainerWidth = this.state.svgTreeContainer.clientWidth;
        this.state.scroll.tree.left = left;
        this.state.scroll.tree.right = left + treeContainerWidth;
        this.state.scroll.tree.percent = left / this.state.times.totalViewDurationPx * 100;
        this.state.scroll.tree.top = top;
        this.state.scroll.tree.time = this.pixelOffsetXToTime(left);
        this.state.scroll.tree.dateTime.left = dayjs(this.state.scroll.tree.time);
        this.state.scroll.tree.dateTime.right = dayjs(this.pixelOffsetXToTime(left + this.state.svgTree.clientWidth));
        this.state.svgTreeContainer.scrollLeft = left;
      },
      scrollToTime(time) {
        let pos = this.timeToPixelOffsetX(time);
        const treeContainerWidth = this.state.svgTreeContainer.clientWidth;
        pos = pos - (treeContainerWidth / 2);
        if (pos > this.state.width) {
          pos = this.state.width - treeContainerWidth;
        }
        this.scrollTo(pos);
      },
      scrollTo(pos) {
        this.state.svgTreeContainer.scrollLeft = pos;
        this.state.treeScrollContainer.scrollLeft = pos;
      },
      fixScrollPos() {
        this.$nextTick(() => {
          const oldPercent = this.state.scroll.tree.percent;
          const currentOffset = this.state.times.totalViewDurationPx / 100 * oldPercent;
          this.scrollTo(currentOffset);
        });
      },
      onWheelTree(ev) {
        //this.state.times.timeScale += ev.deltaY * 10;
      },
      onTimeZoomChange(timeZoom) {
        this.state.times.timeZoom = timeZoom;
        this.recalculateTimes();
        this.calculateSteps();
        this.calculateCalendarDimensions();
        this.fixScrollPos();
      },
      onRowHeightChange(height) {
        this.state.row.height = height;
        this.calculateTaskListColumnsWidths();
      },
      onScopeChange(value) {
        this.state.scope.before = value;
        this.state.scope.after = value;
        this.initTimes();
        this.calculateSteps();
        this.computeCalendarWidths();
        this.fixScrollPos();
      },
      onTaskListWidthChange(value) {
        this.state.taskList.percent = value;
        this.calculateTaskListColumnsWidths();
        this.fixScrollPos();
      },
      onTaskListColumnWidthChange(value) {
        this.calculateTaskListColumnsWidths();
        this.fixScrollPos();
      },
      initializeEvents() {
        this.$root.$on('elastigantt.tree.scroll', this.onScrollTree);
        this.$root.$on('elastigantt.tree.wheel', this.onWheelTree);
        this.$root.$on('elastigantt.times.timeZoom.change', this.onTimeZoomChange);
        this.$root.$on('elastigantt.row.height.change', this.onRowHeightChange);
        this.$root.$on('elastigantt.scope.change', this.onScopeChange);
        this.$root.$on('elastigantt.taskList.width.change', this.onTaskListWidthChange);
        this.$root.$on('elastigantt.taskList.column.width.change', this.onTaskListColumnWidthChange);
      },
      recalculateTimes() {
        let max = this.state.times.timeScale * 60;
        let min = this.state.times.timeScale;
        let steps = max / min;
        let percent = this.state.times.timeZoom / 100;
        this.state.times.timePerPixel = this.state.times.timeScale * steps * percent + Math.pow(2, this.state.times.timeZoom);
        this.state.times.totalViewDurationMs = this.state.times.lastDate.diff(this.state.times.firstDate, 'milisecods');
        this.state.times.totalViewDurationPx = this.state.times.totalViewDurationMs / this.state.times.timePerPixel;
      },
      initTimes() {
        let max = this.state.times.timeScale * 60;
        let min = this.state.times.timeScale;
        let percent = this.state.times.timeZoom / 100;
        this.state.times.firstDate = dayjs(this.state.times.firstTaskDate).locale(this.locale).startOf('day').subtract(this.state.scope.before, 'days').startOf('day');
        this.state.times.lastDate = dayjs(this.state.times.lastTaskDate).locale(this.locale).endOf('day').add(this.state.scope.after, 'days').endOf('day');
        this.state.times.firstTime = this.state.times.firstDate.valueOf();
        this.state.times.lastTime = this.state.times.lastDate.valueOf();
        this.recalculateTimes();
      },
      calculateSteps() {
        const steps = [];
        const lastMs = dayjs(this.state.times.lastDate).valueOf();
        const step = this.state.times.stepDuration;
        const currentDate = dayjs(this.state.times.firstDate);
        steps.push({
          date: currentDate,
          offset: {
            ms: 0,
            px: 0,
          }
        });
        for (let currentDate = dayjs(this.state.times.firstDate).add(1, step).startOf('day'); currentDate.valueOf() <= lastMs; currentDate = currentDate.add(1, step).startOf('day')) {
          const offsetMs = currentDate.diff(this.state.times.firstDate, 'milisecods');
          const offsetPx = offsetMs / this.state.times.timePerPixel;
          const step = {
            date: currentDate,
            offset: {
              ms: offsetMs,
              px: offsetPx,
            },
          };
          const previousStep = steps[steps.length - 1];
          previousStep.width = {
            ms: offsetMs - previousStep.offset.ms,
            px: offsetPx - previousStep.offset.px,
          };
          steps.push(step);
        }
        const lastStep = steps[steps.length - 1];
        lastStep.width = {
          ms: this.state.times.totalViewDurationMs - lastStep.offset.ms,
          px: this.state.times.totalViewDurationPx - lastStep.offset.px,
        };
        this.state.times.steps = steps;
      },
      computeCalendarWidths() {
        this.computeDayWidths();
        this.computeHourWidths();
        this.computeMonthWidths();
      },
      computeHourWidths() {
        const state = this.state;
        state.ctx.font = state.calendar.hour.fontSize + ' ' + state.calendar.fontFamily;
        let currentDate = dayjs('2018-01-01T00:00:00'); // any date will be good for hours
        let maxWidths = {};
        Object.keys(state.calendar.hour.format).forEach((formatName) => {
          maxWidths[formatName] = 0;
        });
        for (let hour = 0; hour < 24; hour++) {
          const widths = {
            hour
          };
          Object.keys(state.calendar.hour.format).forEach((formatName) => {
            widths[formatName] = state.ctx.measureText(state.calendar.hour.format[formatName](currentDate.toDate())).width;
          });
          state.calendar.hour.widths.push(widths);
          Object.keys(state.calendar.hour.format).forEach((formatName) => {
            if (widths[formatName] > maxWidths[formatName]) {
              maxWidths[formatName] = widths[formatName];
            }
          });
          currentDate = currentDate.add(1, 'hour');
        }
        state.calendar.hour.maxWidths = maxWidths;
      },
      computeDayWidths() {
        const state = this.state;
        state.ctx.font = state.calendar.day.fontSize + ' ' + state.calendar.fontFamily;
        let currentDate = dayjs(state.times.steps[0].date);
        let maxWidths = {};
        Object.keys(state.calendar.day.format).forEach((formatName) => {
          maxWidths[formatName] = 0;
        });
        for (let day = 0, daysLen = state.times.steps.length; day < daysLen; day++) {
          const widths = {
            day
          };
          Object.keys(state.calendar.day.format).forEach((formatName) => {
            widths[formatName] = state.ctx.measureText(state.calendar.day.format[formatName](currentDate.toDate())).width;
          });
          state.calendar.day.widths.push(widths);
          Object.keys(state.calendar.day.format).forEach((formatName) => {
            if (widths[formatName] > maxWidths[formatName]) {
              maxWidths[formatName] = widths[formatName];
            }
          });
          currentDate = currentDate.add(1, 'day');
        }
        state.calendar.day.maxWidths = maxWidths;
      },
      computeMonthWidths() {
        const state = this.state;
        state.ctx.font = state.calendar.day.fontSize + ' ' + state.calendar.fontFamily;
        let maxWidths = {};
        Object.keys(state.calendar.month.format).forEach((formatName) => {
          maxWidths[formatName] = 0;
        });
        let currentDate = dayjs(this.state.times.firstDate);
        const monthsCount = Math.ceil(this.state.times.lastDate.diff(this.state.times.firstDate, 'months', true));
        for (let month = 0; month < monthsCount; month++) {
          const widths = {
            month
          };
          Object.keys(state.calendar.month.format).forEach((formatName) => {
            widths[formatName] = state.ctx.measureText(state.calendar.month.format[formatName](currentDate.toDate())).width;
          });
          state.calendar.month.widths.push(widths);
          Object.keys(state.calendar.month.format).forEach((formatName) => {
            if (widths[formatName] > maxWidths[formatName]) {
              maxWidths[formatName] = widths[formatName];
            }
          });
          currentDate = currentDate.add(1, 'month');
        }
        state.calendar.month.maxWidths = maxWidths;
      }
    },
    computed: {
      visibleTasks() {
        this.state.taskList.width = this.state.taskList.columns.reduce((prev, current) => {
          return {
            width: prev.width + current.width
          };
        }, {
          width: 0
        }).width;
        this.state.width = this.state.times.totalViewDurationPx + this.state.grid.vertical.style.strokeWidth;
        this.resetTaskTree();
        this.state.tasks = this.makeTaskTree(this.state.rootTask).allChildren;
        const visibleTasks = this.state.tasks.filter(task => task.visible);
        this.state.height = this.getHeight(visibleTasks);
        this.state.outerHeight = this.getHeight(visibleTasks, true);
        for (let index = 0, len = visibleTasks.length; index < len; index++) {
          let task = visibleTasks[index];
          task.width = task.durationMs / this.state.times.timePerPixel - this.state.grid.vertical.style.strokeWidth;
          if (task.width < 0) {
            task.width = 0;
          }
          task.height = this.state.row.height;
          task.x = this.timeToPixelOffsetX(task.startTime);
          task.y = (this.state.row.height + this.state.grid.horizontal.gap * 2) * index + this.state.grid.horizontal.gap + this.state.calendar.height + this.state.calendar.styles.column['stroke-width'] + this.state.calendar.gap;
        }
        return visibleTasks;
      },

    },
    created() {
      this.initialize();
      this.initializeEvents();
      this.tasksById = {};
      this.state.tasks.forEach(task => (this.tasksById[task.id] = task));
      let tasks = this.state.tasks;
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      let firstTaskDate, lastTaskDate;
      for (let index = 0, len = this.state.tasks.length; index < len; index++) {
        let task = this.state.tasks[index];
        task.startDate = dayjs(task.start);
        task.startTime = task.startDate.valueOf();
        task.durationMs = task.duration * 1000;
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
          firstTaskDate = task.startDate;
        }
        if (task.startTime + task.durationMs > lastTaskTime) {
          lastTaskTime = task.startTime + task.durationMs;
          lastTaskDate = dayjs(task.startTime + task.durationMs);
        }
      }
      this.state.times.firstTaskTime = firstTaskTime;
      this.state.times.lastTaskTime = lastTaskTime;
      this.state.times.firstTaskDate = firstTaskDate;
      this.state.times.lastTaskDate = lastTaskDate;
      this.state.times.firstDate = dayjs(firstTaskDate).locale(this.locale).startOf('day').subtract(this.state.scope.before, 'days').startOf('day');
      this.state.times.lastDate = dayjs(lastTaskDate).locale(this.locale).endOf('day').add(this.state.scope.after, 'days').endOf('day');
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.calculateCalendarDimensions();
    },
    mounted() {
      this.$nextTick(() => {
        this.$root.$emit('elastigantt.recenterPosition');
      });
    }
  };

  /* script */
              const __vue_script__$l = script$l;
              
  /* template */
  var __vue_render__$l = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("eg-main", { attrs: { tasks: _vm.tasks, options: _vm.options } })
  };
  var __vue_staticRenderFns__$l = [];
  __vue_render__$l._withStripped = true;

    /* style */
    const __vue_inject_styles__$l = undefined;
    /* scoped */
    const __vue_scope_id__$l = undefined;
    /* module identifier */
    const __vue_module_identifier__$l = undefined;
    /* functional template */
    const __vue_is_functional_template__$l = false;
    /* component normalizer */
    function __vue_normalize__$l(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "F:\\elastigantt\\src\\Elastigantt.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Elastigantt = __vue_normalize__$l(
      { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
      __vue_inject_styles__$l,
      __vue_script__$l,
      __vue_scope_id__$l,
      __vue_is_functional_template__$l,
      __vue_module_identifier__$l,
      undefined,
      undefined
    );

  Vue.component('elastigantt', Elastigantt);

  return Elastigantt;

}());
