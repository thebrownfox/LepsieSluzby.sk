<template>
    <select
        v-model="selected"
        @input="$emit('input', $event.target.value)"
        class="govuk-select"
        id="select-category"
        name="select-category"
        v-bind="$attrs"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
    >
        <option v-for="option in options" :key="option.id" :value="option.value">{{ option.value }}</option>
    </select>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => []
        },
        value: {
            type: [String, Number, Boolean, Object, Array, Function],
            default: null
        }
    },
    data() {
        return {
            selected: this.value
        };
    },
    watch: {
        options(value) {
            if (!value.includes(this.selected)) {
                this.selected = value[0].value;
                this.$emit("input", this.selected);
            }
        }
    }
};
</script>

<style>
</style>
