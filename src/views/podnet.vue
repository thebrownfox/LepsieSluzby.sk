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
                            <nd-select
                                v-model="form.categories.field"
                                :options="subCategories"
                                v-if="subCategories.length > 0"
                            ></nd-select>
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="file-upload">
                                Príloha
                                <em>(nepovinné)</em>
                            </label>
                            <nd-files @file="form.files = $event"></nd-files>
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

                        <button
                            class="govuk-button"
                            @click.prevent="submitForm()"
                            :disabled="hasSent || (!gdpr )"
                        >Vytvoriť</button>
                        <div class="govuk-checkboxes suhlas">
                            <div class="govuk-checkboxes__item">
                                <input v-model="gdpr" class="govuk-checkboxes__input" type="checkbox" />
                                <label class="govuk-label govuk-checkboxes__label">
                                    Súhlasím so spracovaním osobných údajov v súlade s nariadením
                                    <a
                                        href="https://slovensko.digital/ochrana-osobnych-udajov"
                                        target="_blank"
                                    >GDPR o ochrane osobných údajov</a>.
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import { async } from "q";
export default {
    data() {
        return {
            token: "",
            gdpr:false,
            hasSent: false,
            form: {
                categories: {
                    persona: "Žiadne",
                    field: null
                },
                summary: "",
                description: "",
                files: [],
                name: "",
                email: ""
            },
            categories: {
                persona: [
                    {
                        value: "Žiadne",
                        id: null
                    },
                    {
                        self:
                            "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10203",
                        value: "Občan",
                        id: "10203",
                        children: [
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10206",
                                value: "Bývanie",
                                id: "10206"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10207",
                                value: "Financie",
                                id: "10207"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10208",
                                value: "Zamestnanie",
                                id: "10208"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10209",
                                value: "Obrana a Bezpečnosť",
                                id: "10209"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10210",
                                value: "Cestovanie",
                                id: "10210"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10211",
                                value: "Kultúra",
                                id: "10211"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10212",
                                value: "Rodina a Vzťahy",
                                id: "10212"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10213",
                                value: "Zdravie",
                                id: "10213"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10214",
                                value: "Doprava",
                                id: "10214"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10215",
                                value: "Občan a štát",
                                id: "10215"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10216",
                                value: "Vzdelanie a šport",
                                id: "10216"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10217",
                                value: "Životné prostredie",
                                id: "10217"
                            }
                        ]
                    },
                    {
                        self:
                            "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10204",
                        value: "Podnikateľ",
                        id: "10204",
                        children: [
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10218",
                                value: "Administratívny a ekonomický chod",
                                id: "10218"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10220",
                                value: "Zodpovedné podnikanie",
                                id: "10220"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10221",
                                value: "Duševné vlastníctvo",
                                id: "10221"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10222",
                                value: "Ukončenie podnikania",
                                id: "10222"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10223",
                                value: "Podnikanie",
                                id: "10223"
                            },
                            {
                                self:
                                    "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10224",
                                value: "Začatie podnikania",
                                id: "10224"
                            }
                        ]
                    },
                    {
                        self:
                            "https://lepsiesluzby.sk/jira/rest/api/2/customFieldOption/10205",
                        value: "Úradník",
                        id: "10205"
                    }
                ]
            }
        };
    },
    computed: {
        subCategories: function() {
            // There have to be options
            let options = [];
            let persona = this.form.categories.persona;
            if (persona && persona !== "Žiadne") {
                let index = this.categories.persona.findIndex(
                    category => category.value == persona
                );
                if (this.categories.persona[index].children) {
                    options = options.concat(
                        this.categories.persona[index].children
                    );
                }
            }
            return options;
        }
    },
    methods: {
        logout: async function() {
            const logoutURL =
                "https://lepsiesluzby.sk/jira/rest/auth/1/session";
            try {
                const logout = await this.axios.delete(logoutURL);
            } catch (error) {
                console.log(error);
            }
        },
        postData: async function(inputData) {
            const postURL = "https://lepsiesluzby.sk/jira/rest/api/2/issue";
            const fileURL = "";
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
                if (this.form.files && post) {
                    try {
                        const attachmentURL =
                            post.data.self + "/" + "attachments";
                        const attachmentConfig = {
                            headers: {
                                "content-type": "multipart/form-data",
                                "X-Atlassian-Token": "nocheck"
                            }
                        };
                        const formFiles = new FormData();

                        this.form.files.forEach(file => {
                            formFiles.append("file", file);
                        });
                        const attachment = await this.axios.post(
                            attachmentURL,
                            formFiles,
                            attachmentConfig
                        );
                        this.logout();
                        this.$router.push("success");
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    this.logout();
                    this.$router.push("success");
                }
            } catch (error) {
                console.log(error);
            }
        },
        submitForm: function() {
            // TODO: Add validation, change customfields to be more general?
            let data = this.form;
            let cfStr = "customfield_";

            let categoryStr = cfStr + "10204"; // data.categories.persona;
            const output = {
                fields: {
                    project: {
                        key: "SDM"
                    },
                    issuetype: {
                        name: "Bug"
                    },
                    summary: data.summary,
                    description: data.description,
                    components: [
                        {
                            name: "e-services"
                        }
                    ],
                    customfield_10200: data.email,
                    customfield_10116: data.name
                }
            };
            if (
                data.categories.persona &&
                data.categories.persona !== "Žiadne"
            ) {
                if (data.categories.field) {
                    output.fields[categoryStr] = {
                        value: data.categories.persona,
                        child: {
                            value: data.categories.field
                        }
                    };
                }
            } else {
                output.fields[categoryStr] = {
                    value: data.categories.persona
                };
            }

            this.postData(output);
            this.hasSent = true;
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

<style lang="scss">
.suhlas {
    margin: 0 0 1rem 0;
    & label {
        padding: 0 0 0 1rem;
        font-size: 1rem;
        width: 75%;
    }
}
</style>
