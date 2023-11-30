export interface IEventDegree {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
}

export interface IEventGroup {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    startHour: string;
    endHour: string;
    startMinuite: string;
    endMinuite: string;
    week0: boolean;
    week1: boolean;
    week2: boolean;
    week3: boolean;
    week4: boolean;
    week5: boolean;
    week6: boolean;
}
