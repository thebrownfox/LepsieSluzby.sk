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
                <nd-table :data="tableData" :options="tableOptions"></nd-table>
                <nd-button>Zobraziť viac</nd-button>
            </main>
        </div>
    </div>
</template>

<script>
//TODO: Add notification about new jira issues
export default {
    data() {
        return {
            tableOptions: {
                caption: "Čo aktuálne riešime"
            },
            jiraData: null
        };
    },
    computed: {
        tableData: function() {
            let data = this.jiraData;
        }
    },
    methods: {
        getJiraData: function() {
            const searchURL =
                "https://lepsiesluzby.sk/jira/rest/api/2/search?jql=project%20%3D%20SDM%20%20AND%20component%20%3D%20e-services%20ORDER%20BY%20created%20DESC&fields=summary,created,customfield_10204&maxResults=5";
            let jiraData;


            return jiraData;
        }
    },
    mounted: function() {
        this.jiraData = getJiraData();
    }
};
</script>

<style>
</style>
