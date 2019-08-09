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
                            />
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-textarea-description">Text podnetu</label>
                            <textarea
                                class="govuk-textarea"
                                id="govuk-textarea-description"
                                name="govuk-textarea-description"
                                rows="5"
                            ></textarea>
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="select-category">
                                Kategória
                                <em>(nepovinné)</em>
                            </label>

                            <select
                                class="govuk-select govuk-!-width-one-third"
                                id="select-category"
                                name="select-category"
                            >
                                <option value="0">Žiadne</option>
                                <option value="1">Občan</option>
                                <option value="2" selected>Podnikateľ</option>
                                <option value="3">Úradník</option>
                            </select>

                            <select
                                class="govuk-select govuk-!-width-one-third"
                                id="select-subcategory"
                                name="select-subcategory"
                            >
                                <option value="0">Žiadne</option>
                                <option value="1">Bývanie</option>
                                <option value="2" selected>Financie</option>
                                <option value="3">Zamestnanie</option>
                            </select>

                            <select
                                class="govuk-select govuk-!-width-one-third"
                                name="customfield_10204"
                                id="customfield_10204"
                            >
                                <option class="default-option" value selected="selected">Žiadne</option>
                                <option class="option-group-10203" value="10203">Občan</option>
                                <option class="option-group-10204" value="10204">Podnikateľ</option>
                                <option class="option-group-10205" value="10205">Úradník</option>
                            </select>

                            <select
                                class="govuk-select govuk-!-width-one-third"
                                name="customfield_10204:1"
                                id="customfield_10204:1"
                                tabindex="-1"
                                title
                            >
                                <option class="option-group-10203" value>Žiadne</option>
                                <option class="option-group-10203" value="10206">Bývanie</option>
                                <option class="option-group-10203" value="10207">Financie</option>
                                <option class="option-group-10203" value="10208">Zamestnanie</option>
                                <option class="option-group-10203" value="10209">Obrana a Bezpečnosť</option>
                                <option class="option-group-10203" value="10210">Cestovanie</option>
                                <option class="option-group-10203" value="10211">Kultúra</option>
                                <option class="option-group-10203" value="10212">Rodina a Vzťahy</option>
                                <option class="option-group-10203" value="10213">Zdravie</option>
                                <option class="option-group-10203" value="10214">Doprava</option>
                                <option class="option-group-10203" value="10215">Občan a štát</option>
                                <option class="option-group-10203" value="10216">Vzdelanie a šport</option>
                                <option class="option-group-10203" value="10217">Životné prostredie</option>

                                <option class="option-group-10204" value>Žiadne</option>
                                <option
                                    class="option-group-10204"
                                    value="10218"
                                >Administratívny a ekonomický chod</option>
                                <option
                                    class="option-group-10204"
                                    value="10220"
                                >Zodpovedné podnikanie</option>
                                <option class="option-group-10204" value="10221">Duševné vlastníctvo</option>
                                <option
                                    class="option-group-10204"
                                    value="10222"
                                >Ukončenie podnikania</option>
                                <option class="option-group-10204" value="10223">Podnikanie</option>
                                <option class="option-group-10204" value="10224">Začatie podnikania</option>

                                <option class="option-group-10205" value>Žiadne</option>
                                <option class="option-group-" value>Žiadne</option>
                            </select>
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
                            />
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-name">Meno</label>
                            <input
                                class="govuk-input govuk-!-width-two-thirds"
                                id="govuk-input-name"
                                name="govuk-input-name"
                                type="text"
                            />
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-email">E-mail</label>
                            <input
                                class="govuk-input govuk-!-width-two-thirds"
                                id="govuk-input-email"
                                name="govuk-input-email"
                                type="text"
                            />
                        </div>

                        <button type="submit" class="govuk-button">Vytvoriť</button>
                    </fieldset>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
