<template>
    <button
        type="button"
        class="govuk-button"
        @click="$emit('click', $event.target.value)"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {};
</script>

<style></style>
