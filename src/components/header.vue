<template>
    <header
        class="sdn-header"
        :class="params.responsiveClass"
        role="banner"
        data-module="sdn-header"
    >
        <div class="sdn-header__container govuk-width-container sdn-header__container--logo">
            <router-link :to="(params.homepageUrl)" class="sdn-header__link">
                <img v-if="params.productLogo" :src="params.productLogo" :alt="params.productName" />
                <span v-else class="sdn-header__product-name">{{ params.productName }}</span>
            </router-link>
            <div v-if="params.navigation" class="sdn-header__content">
                <button
                    type="button"
                    role="button"
                    class="sdn-header__menu-button sdn-header__menu-button js-header-toggle"
                    aria-controls="navigation"
                    aria-label="Show or hide Top Level Navigation"
                >Menu</button>
                <nav>
                    <ul
                        id="navigation"
                        class="sdn-header__navigation"
                        aria-label="Top Level Navigation"
                    >
                        <li v-if="params.show_search" class="sdn-header__form">
                            <form>
                                <input class="govuk-input" type="text" placeholder="Hľadať" />
                                <button type="submit">Hľadať</button>
                            </form>
                        </li>
                        <li v-for="(item, index) in params.navigation" :key="index">
                            <!-- TODO: IF DROPDOWN
                      <div class="sdn-header__subnavigation">
                    <a href="#" class="sdn-header__link sdn-header__dropdown-toggle js-dropdown-toggle" :aria-controls="'subnav-dropdown-' + index"><span class="sdn-header__fixed-width-text">{{ item.text }}</span></a>
                    <ul class="sdn-header__dropdown" :id="'subnav-dropdown-' + index">
                        <li>
                          <a href="{{ subitem.href }}">{{ subitem.text }}</a>
                        </li>
                    </ul>
                            </div>-->
                            <a
                                class="sdn-header__link"
                                :class="{'sdn-header__link--active':item.active}"
                                :href="item.href"
                            >{{ item.text }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
function headerParams() {
    this.responsiveClass = "";
    this.homepageUrl = "/";
    this.productLogo = false;
    this.productName = "Home";
    this.show_search = false;
    this.navigation = [];
}
export default {
    props: {
        options: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        params: function() {
            let params = new headerParams();
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
