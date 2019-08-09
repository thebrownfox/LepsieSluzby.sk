<template>
    <div>
        <nd-hero></nd-hero>
        <div class="govuk-width-container">
            <main class="govuk-main-wrapper">
                <div class="govuk-grid-row">
                    <div class="govuk-grid-column-three-quarters govuk-!-padding-bottom-6">
                        <nd-thumbnail url="/podnet"></nd-thumbnail>
                    </div>
                </div>
                <table class="govuk-table">
                    <caption class="govuk-table__caption govuk-heading-m">Čo aktuálne riešime</caption>
                    <thead class="govuk-table__head">
                        <tr class="govuk-table__row">
                            <th class="govuk-table__header" scope="col">Podnet</th>
                            <th
                                class="govuk-table__header govuk-table__header--numeric"
                                scope="col"
                            >Kategória</th>
                            <th
                                class="govuk-table__header govuk-table__header--numeric"
                                scope="col"
                            >Dátum</th>
                        </tr>
                    </thead>
                    <tbody class="govuk-table__body" id="listing"></tbody>
                </table>
                <nd-button>Zobraziť viac</nd-button>
            </main>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
