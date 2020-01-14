<template>
  <div class="ks-input-number" :class="{'ks-input-number--byunit':unit,'ks-input-number--plain':plain,'ks-input-number--disabled':disabled,'ks-input-number--medium':size === 'medium'}" :style="{'max-width':maxWidth}">
    <el-input
      ref="input"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="inputValue"
      @change="handleInputChange"
    />
    <span class="ks-input-number__unit" v-if="unit">{{unit}}</span>
  </div>
</template>
<script>
export default {
  name: "KsInputNumber",
  props: {
    plain:Boolean,
    size:String,
    /**文本值 */
    value: {
      type: [Number, String],
      default: ""
    },
    /**最小数 */
    min: {
      type: Number,
      default: 0
    },
    /**最大数 */
    max: Number,
    /**默认提示文字 */
    placeholder: {
      type: String,
      default: ""
    },
    /**保留小位数 */
    decimalPlaces: {
      type: Number,
      default: 0
    },
    /**单位 */
    unit: String,
    /**文本禁止输入 */
    disabled: Boolean,
    /**设置最大宽度 */
    maxWidth:{
      type:String,
      default:"140px"
    }
    
  },
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  watch: {
    value(val) {
      this.inputValue = val;
      this.$emit("change", this.inputValue);
    }
  },
  methods: {
    /**
     * 处理文本值
     * @param {String} 当前文本值
     */
    handleInputChange(val) {
      if (val !== "") {
        let _val = parseFloat(val) || 0;
        _val = Math.max(_val, this.min);
        if (this.max) {
          _val = Math.min(_val, this.max);
        }
        this.inputValue = parseFloat(_val.toFixed(this.decimalPlaces));
        
      }

      /**更新值 */
      this.$emit("change", this.inputValue);
    },
    /**
     * 焦点事件
     */
    focus() {
      this.$refs.input.focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.ks-input-number {
  position: relative;
}

.ks-input-number__unit {
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 38px;
  height: auto;
  text-align: center;
  background: $background-color;
  cursor: pointer;
  font-size: 13px;
  display: block;
  right: 1px;
  border-radius: 0 4px 4px 0;
  border-left: 1px solid #dcdfe6;
  line-height: 38px;
}
.ks-input-number--disabled {
  color: #999;
}
.ks-input-number--plain{
  .ks-input-number__unit{
    background: none;
    border-left: 0px;
  }
}
.ks-input-number--byunit /deep/ .el-input__inner{
    padding-right: 48px;
}
.ks-input-number--plain.ks-input-number--byunit /deep/ .el-input__inner{
  padding-right: 38px;
}
.ks-input-number--plain.ks-input-number--byunit.ks-input-number--medium /deep/ .el-input__inner{
  padding-right: 34px;
}
.ks-input-number--medium{
  .ks-input-number__unit{
    width: 34px;
    height: 34px;
    line-height: 34px;
  }
}
</style>

