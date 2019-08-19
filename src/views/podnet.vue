<template>
    <div class="govuk-width-container">
        <main class="govuk-main-wrapper">
            <div class="govuk-grid-column-full">
                <h2 class="govuk-heading-l">Máte nápad ako zlepšiť elektronické služby ?</h2>
                <p>Poďme do toho spolu a ukážme, kde je priestor na zlepšenie.</p>
            </div>
            <div class="govuk-grid-column-two-thirds">
                <form action="/" method="post" id="submit-form">
                    <fieldset class="govuk-fieldset">
                        <div class="govuk-form-group">
                            <label
                                class="govuk-label"
                                for="govuk-input-summary"
                            >Akú situáciu riešite? Krátky popis.</label>
                            <input
                                class="govuk-input"
                                id="govuk-input-summary"
                                name="govuk-input-summary"
                                type="text"
                                v-model="form.summary"
                            />
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-textarea-description">Text podnetu</label>
                            <textarea
                                class="govuk-textarea"
                                id="govuk-textarea-description"
                                name="govuk-textarea-description"
                                rows="5"
                                v-model="form.description"
                            ></textarea>
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="select-category">
                                Kategória
                                <em>(nepovinné)</em>
                            </label>
                            <nd-select
                                v-model="form.categories.persona"
                                :options="categories.persona"
                            ></nd-select>
                            <nd-select v-model="form.categories.field" :options="subCategories"></nd-select>
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="file-upload">
                                Príloha
                                <em>(nepovinné)</em>
                            </label>
                            <input
                                class="govuk-file-upload"
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                ref="files"
                                multiple
                                @change="fileUpload"
                            />
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-name">Meno</label>
                            <input
                                class="govuk-input govuk-!-width-two-thirds"
                                id="govuk-input-name"
                                name="govuk-input-name"
                                type="text"
                                v-model="form.name"
                            />
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-email">E-mail</label>
                            <input
                                class="govuk-input govuk-!-width-two-thirds"
                                id="govuk-input-email"
                                name="govuk-input-email"
                                type="text"
                                v-model="form.email"
                            />
                        </div>

                        <button class="govuk-button" @click.prevent="submitForm">Vytvoriť</button>
                    </fieldset>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: "tokenlolo",
            form: {
                categories: {
                    persona: null,
                    field: null
                },
                summary: "",
                description: "",
                files: null,
                name: "",
                email: ""
            },
            categories: {
                persona: [
                    {
                        text: "Žiadne",
                        value: null
                    },
                    {
                        text: "Občan",
                        value: 10203,
                        options: [
                            {
                                text: "Žiadne",
                                value: null
                            },
                            {
                                text: "Bývanie",
                                value: 10206
                            },
                            {
                                text: "Financie",
                                value: 10207
                            },
                            {
                                text: "Zamestnanie",
                                value: 10208
                            },
                            {
                                text: "Obrana a Bezpečnosť",
                                value: 10209
                            },
                            {
                                text: "Cestovanie",
                                value: 10210
                            },
                            {
                                text: "Kultúra",
                                value: 10211
                            },
                            {
                                text: "Rodina a Vzťahy",
                                value: 10212
                            },
                            {
                                text: "Zdravie",
                                value: 10213
                            },
                            {
                                text: "Doprava",
                                value: 10214
                            },
                            {
                                text: "Občan a štát",
                                value: 10215
                            },
                            {
                                text: "Vzdelanie a šport",
                                value: 10216
                            },
                            {
                                text: "Životné prostredie",
                                value: 10217
                            }
                        ]
                    },
                    {
                        text: "Podnikateľ",
                        value: 10204,
                        options: [
                            {
                                text: "Žiadne",
                                value: null
                            },
                            {
                                text: "Administratívny a ekonomický chod",
                                value: 10218
                            },
                            {
                                text: "Zodpovedné podnikanie",
                                value: 10220
                            },
                            {
                                text: "Duševné vlastníctvo",
                                value: 10221
                            },
                            {
                                text: "Ukončenie podnikania",
                                value: 10222
                            },
                            {
                                text: "Podnikanie",
                                value: 10223
                            },
                            {
                                text: "Začatie podnikania",
                                value: 10224
                            }
                        ]
                    },
                    {
                        text: "Úradník",
                        value: 10205,
                        options: [
                            {
                                text: "Žiadne",
                                value: null
                            }
                        ]
                    }
                ]
            }
        };
    },
    computed: {
        subCategories: function() {
            let options = [
                {
                    text: "Žiadne",
                    value: null
                }
            ];
            let persona = this.form.categories.persona;
            if (persona) {
                let index = this.categories.persona.findIndex(
                    category => category.value == persona
                );
                options = this.categories.persona[index].options;
            }
            return options;
        }
    },
    methods: {
        //TODO: Fileupload component
        fileUpload: function(event) {
            let uploadedFiles = this.$refs.files.files;
            if (this.form.files === null) {
                this.form.files = [];
            }
            for (var i = 0; i < uploadedFiles.length; i++) {
                this.form.files.push(uploadedFiles[i]);
            }
        },
        postData: async function(inputData) {
            const postURL = "https://lepsiesluzby.sk/jira/rest/api/2/issue";

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "recaptcha-token": this.token
                }
            };
            try {
                const post = await this.axios.post(postURL, inputData, config);
                // TODO: Add files support here
            } catch (error) {
                console.log(error);
            }
        },
        submitForm: function() {
            // TODO: Add validation, change customfields to be more general?
            let data = this.form;
            let cfStr ="customfield_"
            let categoryStr = cfStr + this.form.categories.persona;
            const output = {
                fields: {
                    project: {
                        key: "SDM"
                    },
                    issuetype: {
                        name: "Bug"
                    },
                    summary: this.form.summary,
                    description: this.form.description,
                    components: [
                        {
                            name: "e-services"
                        }
                    ],
                    customfield_10200: this.form.email,
                    customfield_10116: this.form.name,
                    [categoryStr]: {
                        value: this.form.categories.persona,
                        child: {
                            value: this.form.categories.field
                        }
                    }
                }
            };

            this.postData(output);
        },
        getToken: function(loaded) {
            if (loaded) {
                this.$recaptcha("login").then(token => {
                    this.token = token;
                });
            }
        }
    },
    mounted() {
        let loaded = false;
        this.$recaptchaLoaded().then(() => {
            loaded = true;
            this.getToken(loaded);
        });
    }
};
</script>

<style>
</style>
