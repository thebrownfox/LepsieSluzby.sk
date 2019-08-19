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
            let jiraData = this.jiraData;
            let table = {
                head: [
                    {
                        type: null,
                        text: "Podnet"
                    },
                    {
                        type: null,
                        text: "Kategória"
                    },
                    {
                        type: null,
                        text: "Dátum"
                    }
                ],
                body: []
            };
            if (jiraData) {
                // FIXME: the customfield is hardcoded
                const categoryName = issue => {
                    if (
                        issue &&
                        issue.fields &&
                        issue.fields.customfield_10204
                    ) {
                        if (issue.fields.customfield_10204.child) {
                            return `${issue.fields.customfield_10204.value} - ${issue.fields.customfield_10204.child.value}`;
                        } else {
                            return `${issue.fields.customfield_10204.value}`;
                        }
                    }
                    return "";
                };

                const niceDate = date => {
                    const dateObj = new Date(date);
                    return `${dateObj.getDate()}. ${dateObj.getMonth() +
                        1}. ${dateObj.getFullYear()}`;
                };

                jiraData.data.issues.forEach(issue => {
                    let row = {
                        url: issue.self,
                        data: {
                            summary: issue.fields.summary,
                            category: categoryName(issue),
                            date: niceDate(issue.fields.created)
                        }
                    };

                    table.body.push(row);
                });
            }
            return table;
        }
    },
    methods: {
        getJiraData: async function() {
            const searchURL = "https://lepsiesluzby.sk/jira/rest/api/2/search";
            const params = {
                jql:
                    "project = SDM  AND component = e-services ORDER BY created DESC",
                fields: "summary,created,customfield_10204",
                maxResults: "5"
            };

            const response = await this.axios.get(searchURL, { params });

            return response;
        }
    },
    mounted: async function() {
        this.jiraData = await this.getJiraData();
    }
};
</script>

<style>
</style>
