<template>
    <table class="govuk-table">
        <caption class="govuk-table__caption govuk-heading-m">{{ options.caption }}</caption>
        <thead class="govuk-table__head">
            <tr class="govuk-table__row">
                <th
                    class="govuk-table__header"
                    :class="{'govuk-table__header--numeric': header.type === Number}"
                    v-for="(header, index) in data.head"
                    :key="index"
                    scope="col"
                >{{ header.title}}</th>
            </tr>
        </thead>
        <tbody class="govuk-table__body" id="listing">
            <tr class="govuk-table__row" v-for="(row, index) in data.body" :key="index">
                <td class="govuk-table__cell" :class="{'govuk-table__cell--numeric': cell.type === Number}" v-for="(cell, index) in row" :key="index"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
//TODO: This is for future?
function tableParams() {
    this.caption = "";
}
export default {
    props: {
        options: {
            type: Object,
            default: () => ({
                caption: "",
            })
        },
        data: {
            type: Object,
            default: () => ({
                head: [],
                body: [],
            })
        }
    }
};
</script>

<style>
</style>
