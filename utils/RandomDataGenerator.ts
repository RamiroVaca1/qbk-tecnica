class RandomDataGenerator {

    static generateRandomEmail(): string {
        let randomString = Math.random().toString(36).substring(2, 8);
        return `user${randomString}@example.com`;
    }

    static generateRandomCategory(): string {
        let randomString = Math.random().toString(36).substring(2, 7);
        return `category_${randomString}`;
    }

    static generateRandomSubcategory(): string {
        let randomString = Math.random().toString(36).substring(2, 6);
        return `subcategory_${randomString}`;
    }
}

export default RandomDataGenerator;
