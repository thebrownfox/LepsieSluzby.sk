<template>
    <footer class="sdn-footer" role="contentinfo">
        <div class="govuk-width-container" :class="params.containerClasses">
            <div class="sdn-footer__container">
                <div class="sdn-footer__newsletter">
                    <span class="sdn-footer__newsletter-heading">
                        Novinky emailom
                        <small
                            class="sdn-footer__newsletter-heading-tooltip"
                        >(raz mesačne)</small>
                    </span>
                    <div id="newsletter-success" style="display: none">
                        <p>
                            <strong>Na Váš e-mail sme poslali potvrdzovaciu správu.</strong>
                            <br />Ďakujeme za Váš záujem.
                        </p>
                    </div>
                    <form
                        id="newsletter-form"
                        data-action="https://my.sendinblue.com/users/subscribeembed/js_id/29wti/id/4"
                        method="post"
                    >
                        <div class="govuk-form-group sdn-footer__newsletter-form-group">
                            <input type="hidden" name="js_id" id="js_id" value="29wti" />
                            <input type="hidden" name="listid" id="listid" value="4" />
                            <input type="hidden" name="from_url" id="from_url" value="yes" />
                            <input type="hidden" name="hdn_email_txt" id="hdn_email_txt" value />
                            <input
                                id="email-input"
                                class="govuk-input sdn-footer__newsletter-input"
                                name="email"
                                placeholder="Zadajte emailovú adresu"
                            />
                            <nd-button type="submit" class="sdn-footer__newsletter-button">Prihlásiť</nd-button>
                        </div>
                    </form>
                    <span class="sdn-footer__newsletter-disclaimer">
                        Prihlásením dávam dobrovoľný súhlas OZ Slovensko.Digital na zasielanie bezplatného newslettera na mnou zadaný e-mail. Tento súhlas môžem kedykoľvek odvolať na
                        <a
                            href="mailto:kontakt@slovensko.digital"
                            class="sdn-footer__link"
                        >kontakt@slovensko.digital</a>. Oboznámil(a) som sa s informáciami v sekcii
                        <a
                            href="https://slovensko.digital/ochrana-osobnych-udajov "
                            class="sdn-footer__link"
                            target="_blank"
                        >Ochrana osobných údajov</a>.
                    </span>
                </div>
                <div class="sdn-footer__donate">
                    <span class="sdn-footer__heart-wrapper">
                        <span class="sdn-footer__heart"></span>
                    </span>
                    <span class="sdn-footer__donate-text">
                        Páči sa vám čo pre vás robíme?
                        <br />
                        <a
                            href="https://slovensko.digital/dve-percenta#ako-poukazat"
                            class="sdn-footer__link sdn-footer__donate-link"
                        >Podporte nás</a>
                    </span>
                </div>
            </div>
        </div>
        <div class="sdn-footer__bottom-container">
            <div class="govuk-width-container">
                <div class="sdn-footer__bottom-columns">
                    <div class="sdn-footer__links">
                        <ul>
                            <li v-for="(link, index) in params.links" :key="index">
                                <a :href="link.url">{{ link.text }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="sdn-footer__contact">
                        <div class="sdn-footer__contact-content">
                            <strong>Slovensko.Digital</strong>
                            <br />Staré grunty 12, 841 04 Bratislava
                            <br />IČO: 50158635
                            <br />
                            <a href="mailto:kontakt@slovensko.digital">kontakt@slovensko.digital</a>
                        </div>
                    </div>
                    <div v-if="params.social" class="sdn-footer__social">
                        <a
                            v-for="(network, index) in params.social"
                            :key="index"
                            :href="network.url"
                            :class="'footer-icon footer-icon__' + network.name"
                        >
                            <span>{{ network.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
function footerParams() {
    this.containerClasses = "";
    this.links = [];
    this.social = [];
}
export default {
    props: {
        options: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        newsletterSubmit: async function(submitEvent) {
            const api =
                "https://my.sendinblue.com/users/subscribeembed/js_id/29wti/id/4";
            //FormData
            // js_id: 29wti
            // listid: 4
            // from_url: yes
            // hdn_email_txt:
            // email: marek.brencic.sxe@gmail.com

            let post = this.axios.post();
        }
    },
    computed: {
        params: function() {
            let params = new footerParams();
            for (const prop in this.options) {
                params[prop] = this.options[prop];
            }
            return params;
        }
    }
};
</script>

<style>
</style>
