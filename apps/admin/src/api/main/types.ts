export interface IMainKeyword {
    id: number;
    name: string;
    url: string;
}

export interface IMainRecommend {
    id: number;
    title: string;
    recommendTitle: string;
    recommendTitle2: string;
    recommendDescription: string;
    recommendDescription2: string;
    recommendImage: string;
    recommendImage2: string;
}

export interface IMainProps {
    keywords: IMainKeyword[];
    recommends: IMainRecommend[];
}