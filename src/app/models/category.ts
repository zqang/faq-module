import { Qna } from "./qna";

export class Category{
    constructor(
        public categoryId: number,
        public name: string,
        public qnaList: Qna[]
    ){}
}