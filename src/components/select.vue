<template>
    <select
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
        class="govuk-select"
        v-bind:value="value"
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
    watch: {
        options(newValue) {
            if (!newValue.includes(this.value)) {
                this.$emit("input", newValue[0].value);
            }
        }
    },
    mounted() {
        if (!this.options.includes(this.value)) {
            this.$emit("input", this.options[0].value);
        }
    }
};
</script>

<style lang="scss">
</style>
