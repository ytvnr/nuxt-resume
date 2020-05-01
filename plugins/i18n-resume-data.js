import ResumeDataFr from '@/data/resume_fr.json';
import ResumeDataEn from '@/data/resume_en.json';

export default function({ store, app }) {
    store.dispatch('resume/useResume', ResumeDataFr);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-param-reassign
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
        if (newLocale === 'fr') {
            store.dispatch('resume/useResume', ResumeDataFr);
        } else {
            store.dispatch('resume/useResume', ResumeDataEn);
        }
    };
}
