export class Interactor {
    /**
     * Verify string equality
     * @param target current value
     * @param expected value
     */
    static async verifyStringEquals(target: string, expected: string) {
        console.log(`"${target}" should equal "${expected}"`);
        await expect(target).toEqual(expected);
    }

    /**
     * Verify string contains
     * @param target current value
     * @param expected value
     */
    static async verifyStringContains(target: string, expected: string) {
        console.log(`"${target}" should contain "${expected}"`);
        await expect(target).toContain(expected);
    }
}