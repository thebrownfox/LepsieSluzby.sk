<template>
    <div class="error-containter">
        <p>Sorry error occured :/</p>
        <p>Name: {{ newError.name }}</p>
        <p>Message: {{ newError.message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Error,
            default: () => {},
        },
    },
    data() {
        return {
            newError: this.data,
        };
    },
};
</script>

<style lang="scss">
.error-containter {
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
</style>
