<template>
    <div class="govuk-template__body">
        <div class="navody-template__content">
            <!-- header -->
            <nd-header :options="headerOptions">
                <template v-slot:logo>
                    <img
                        id="logo-img"
                        src="/assets/images/logo_big.png"
                        alt="Logo"
                    />
                </template>
            </nd-header>
            <!-- content -->
            <keep-alive>
                <router-view></router-view>
                <vue-recaptcha
                    sitekey="6LcyosUUAAAAALONoX3sSOfB3o0XTgTYgpZhvuzv"
                    ref="invisibleRecaptcha"
                    @verify="onCaptchaVerified"
                    @expired="onCaptchaExpired"
                    size="invisible"
                ></vue-recaptcha>
            </keep-alive>
        </div>
        <!-- footer -->
        <div class="navody-template__footer">
            <nd-footer></nd-footer>
        </div>
    </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
    components: { VueRecaptcha },
    data() {
        return {
            token: "",
            headerOptions: {
                responsiveClass: "sdn-header-1200",
                productName: "lepšie služby",
                // FIXME: Parcel cannot get :src"" only src=""
                //productLogo: "assets/images/logo_big.png",
                navigation: [
                    {
                        href:
                            "https://slovensko.digital/projekty/lepsie-sluzby",
                        text: "O Projekte",
                    },
                    {
                        href:
                            "https://lepsiesluzby.sk/jira/secure/Dashboard.jspa?selectPageId=10100",
                        text: "Zadané podnety",
                    },
                ],
            },
        };
    },
    methods: {
        getRidOfRecaptchaBadge: function() {
            let badge = document.querySelector(".grecaptcha-badge");
            badge.parentNode.style.display = "none";
        },
        onCaptchaExpired() {
            this.$refs.invisibleRecaptcha.reset();
        },
        onCaptchaVerified(token) {
            console.log("logging in...", token);
            this.token = token;
        },
        injectScript(params) {
            let script_injector = document.createElement("script");
            script_injector.setAttribute("src", this.captcha_script_url);
            script_injector.async = false;
            script_injector.defer = false;
            document.head.appendChild(script_injector);
        },
    },
    mounted() {
        this.injectScript();
        this.$refs.invisibleRecaptcha.execute();
        let srcAttrs = document.querySelectorAll("[src]");

        srcAttrs.forEach(element => {
            let srcStr = element.getAttribute("src");
            srcStr.replace("http://localhost:8000/", "./");
            element.setAttribute("src", srcStr);
        });
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

// FIXME: I'm screaming
.govuk-template__body {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
html,
body {
    font-family: "Roboto", sans-serif;
}
body {
    margin: 0;
}
#logo-img {
    width: 80px;
    height: 16px;
    right: -0.75rem;
    bottom: 0.15rem;
    position: relative;
}
</style>
