import ResumeDataFr from '@/data/resume_fr.json';
import ResumeDataEn from '@/data/resume_en.json';

export default function({ store, app }) {
    store.commit('resume/init', ResumeDataFr);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-param-reassign
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
        if (newLocale === 'fr') {
            store.commit('resume/init', ResumeDataFr);
        } else {
            store.commit('resume/init', ResumeDataEn);
        }
    };
}
