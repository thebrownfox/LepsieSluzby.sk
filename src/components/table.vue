<template>
    <table class="govuk-table">
        <caption class="govuk-table__caption govuk-heading-m">
            {{
                options.caption
            }}
        </caption>
        <thead class="govuk-table__head">
            <tr class="govuk-table__row">
                <th
                    v-for="(header, index) in data.head"
                    :key="index"
                    class="govuk-table__header"
                    :class="{
                        'govuk-table__header--numeric': header.type === Number,
                    }"
                    scope="col"
                >
                    {{ header.text }}
                </th>
            </tr>
        </thead>
        <tbody id="listing" class="govuk-table__body">
            <tr
                v-for="(row, rowIndex) in data.body"
                :key="rowIndex"
                class="govuk-table__row"
            >
                <td
                    v-for="(cell, cellIndex) in row.data"
                    :key="cellIndex"
                    class="govuk-table__cell"
                    :class="{
                        'govuk-table__cell--numeric': cell.type === Number,
                    }"
                >
                    {{ cell }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        options: {
            type: Object,
            default: () => ({
                caption: "",
            }),
        },
        data: {
            type: Object,
            default: () => ({
                head: [],
                body: [],
            }),
        },
    },
};
</script>

<style></style>
