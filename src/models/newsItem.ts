export interface NewsItem {
    "by" : string;
    "descendants": number;
    "id" : number;
    "kids" : number[];
    "score" : number;
    "time" : number;
    "title" : string;
    "type" : NewsItemType;
    "url" : string;
    "text": string;
}

export enum NewsItemType {
    STORY = "story",
    COMMENT = "comment",
    ASK = "ask",
    JOB = "job",
    POLL = "poll"
}
