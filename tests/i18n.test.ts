// i18n.test.ts
import { detectLanguage } from "../src/utils";

// Group related tests together
describe("detectLanguage", () => {

    // This test checks the default case (when navigator.language is English-like)
    test("returns 'en' by default when language is not Arabic", () => {
        // jsdom gives us a fake `navigator` object
        // Here we override its language property to simulate a browser in English
        // Object.defineProperty(navigator, "language", {
        //     value: "en-US",
        //     configurable: true, // makes it possible to reassign in other tests
        // });

        // Call the function and expect the result to be "en"
        expect(detectLanguage()).toBe("en");
    });

    // This test checks the Arabic case
    test("returns 'ar' when browser language starts with ar", () => {
        // Override navigator.language to simulate an Arabic browser
        Object.defineProperty(navigator, "language", {
            value: "ar-EG", // Egyptian Arabic
            configurable: true,
        });

        // Call the function and expect the result to be "ar"
        expect(detectLanguage()).toBe("ar");
    });

    // This test checks what happens if navigator doesn't exist
    test("returns 'en' if navigator is undefined", () => {
        // Temporarily delete global.navigator to simulate server-side environment
        const originalNavigator = global.navigator; // save the real one

        // @ts-ignore: we want to remove it
        delete (global as any).navigator;

        // Call the function and expect fallback "en"
        expect(detectLanguage()).toBe("en");

        // Restore the original navigator so other tests don't break
        (global as any).navigator = originalNavigator;
    });
});
