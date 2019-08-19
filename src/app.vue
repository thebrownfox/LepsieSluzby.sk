<template>
    <div class="govuk-template__body">
        <div class="navody-template__content">
            <!-- header -->
            <nd-header :options="headerOptions"></nd-header>
            <!-- content -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!-- footer -->
        <div class="navody-template__footer">
            <nd-footer></nd-footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headerOptions: {
                responsiveClass: "sdn-header-1200",
                productName: "Portál lepsiesluzby.sk",
                navigation: [
                    {
                        href: "https://slovensko.digital/projekty",
                        text: "O Projekte"
                    },
                    {
                        href:
                            "https://lepsiesluzby.sk/jira/secure/Dashboard.jspa?selectPageId=10100",
                        text: "Zadané podnety"
                    }
                ]
            }
        };
    }
};
</script>

<style lang="scss">
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
body {
    margin: 0;
}
</style>
