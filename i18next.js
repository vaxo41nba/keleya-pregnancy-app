import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// import AsyncStorage from '@react-native-async-storage/async-storage';

i18next.use(initReactI18next).init({
  react: { useSuspense: false },
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'Get started': 'Get started',
        'Choose Language:': 'Choose Language:',
        'Or login': 'Or login',
        'For a fit and relaxed pregnacy': 'For a fit and relaxed pregnacy',
        'Add your details below to set up an account':
          'Add your details below to set up an account',
        'Enter a password': 'Enter a password',
        'Create account': 'Create account',
        "I've read the": "I've read the",
        'privacy policy': 'privacy policy',
        'I accept the': 'I accept the ',
        'terms & conditions': 'terms & conditions',
        and: 'and ',
        "Keleya's advice": "Keleya's advice",
        'Your name': 'Your name',
        "It's great that you're here! First things first, what should we call you?":
          "It's great that you're here! First things first, what should we call you?",
        'When is your baby due,': 'When is your baby due,',
        Continue: 'Continue',
        'Once a week': 'Once a week',
        'times a week': 'times a week',
        'How many times a week do you want to be active?':
          'How many times a week do you want to be active?',
        'Get notifications to boost your motivation':
          'Get notifications to boost your motivation',
        Skip: 'Skip',
        'Allow notifications': 'Allow notifications',
        'Welcome back!': 'Welcome back!',
        'Log in': 'Log in',
        'Have you forgotten your password?':
          'Have you forgotten your password?',
      },
    },
    de: {
      translation: {
        'Get started': 'Loslegen',
        'Choose Language:': 'Sprache wählen:',
        'Or login': 'Oder Anmelden',
        'For a fit and relaxed pregnacy':
          'Für eine fitte und entspannte Schwangerschaft',
        'Add your details below to set up an account':
          'Fügen Sie unten Ihre Daten hinzu, um ein Konto einzurichten',
        'Enter a password': 'Geben Sie ein Passwort ein',
        'Create account': 'Konto erstellen',
        "I've read the": 'Ich habe die',
        'privacy policy': 'Datenschutzerklärung gelesen',
        'I accept the': 'Ich akzeptiere die ',
        'terms & conditions': 'Allgemeinen Geschäftsbedingungen',
        and: 'und ',
        "Keleya's advice": 'den Rat von Keleya',
        'Your name': 'Ihr Name',
        "It's great that you're here! First things first, what should we call you?":
          'Es ist toll, dass du hier bist! Zuerst, wie sollen wir Sie nennen?',
        'When is your baby due,': 'Wann ist dein Baby fällig,',
        Continue: 'Weitermachen',
        'Once a week': 'Einmal wöchentlich',
        'times a week': 'mal pro Woche',
        'How many times a week do you want to be active?':
          'Wie oft in der Woche möchten Sie aktiv sein?',
        'Get notifications to boost your motivation':
          'Erhalten Sie Benachrichtigungen, um Ihre Motivation zu steigern',
        Skip: 'hüpfen',
        'Allow notifications': 'Benachrichtigungen zulassen',
        'Welcome back!': 'Willkommen zurück!',
        'Log in': 'Sich einloggen',
        'Have you forgotten your password?':
          'Haben Sie Ihr Passwort vergessen?',
      },
    },
  },
  interpolation: true,
});

export default i18next;

export const switchLanguage = async (lang, callback) => {
  // In case if we need a language outside of user's phone configuration
  //   await AsyncStorage.setItem('language', lang);
  i18next.changeLanguage(lang, (err, t) => {
    callback(lang);
    if (err) return console.log('something went wrong loading', err);
    t('key');
  });
};
