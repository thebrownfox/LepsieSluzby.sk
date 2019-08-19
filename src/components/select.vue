<template>
    <select
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="govuk-select"
        id="select-category"
        name="select-category"
    >
        <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
        >{{ option.text }}</option>
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
    }
};
</script>

<style>
</style>
