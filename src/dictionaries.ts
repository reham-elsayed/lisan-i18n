
import { AllLanguagesDictionary } from './types';

export const dictionaries: AllLanguagesDictionary = {
    en: {
        translation: {
            greeting: "Hello, world! Welcome to our app.",
            farewell: "Goodbye, {{name}}.",
            messages: {
                new: "You have {{count}} new message.",
                new_plural: "You have {{count}} new messages.",
                no_new: "You have no new messages."
            },
            rtl_info: "This is a left-to-right language.",
            navigation: {
                home: "Home",
                profile: "Profile",
                settings: "Settings"
            }
        }
    },
    ar: {
        translation: {
            greeting: "مرحباً بالعالم! أهلاً بك في تطبيقنا.",
            farewell: "إلى اللقاء، {{name}}.",
            messages: {
                new: "لديك رسالة جديدة واحدة.",
                new_plural: "لديك {{count}} رسائل جديدة.",
                no_new: "ليس لديك أي رسائل جديدة."
            },
            rtl_info: "هذه لغة من اليمين إلى اليسار.",
            navigation: {
                home: "الرئيسية",
                profile: "الملف الشخصي",
                settings: "الإعدادات"
            }
        }
    }
};