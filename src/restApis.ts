export class RestApis {
    private static readonly BASE_URL: string = "https://hacker-news.firebaseio.com/v0";

    static readonly TOP_STORIES: string = `${RestApis.BASE_URL}/topstories.json`;

    static item(itemId: number): string {
        return `${this.BASE_URL}/item/${itemId}.json`;
    }

}
