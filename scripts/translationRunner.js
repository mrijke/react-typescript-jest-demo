// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'src/translations/extracted/',
    translationsDirectory: 'src/translations/locales/',
    languages: ['nl', 'it'], // any translation---don't include the default language
});