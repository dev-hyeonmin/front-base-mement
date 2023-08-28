type Events = {
    cha: degree[];
}

type degree = {
    cha: number,
    chaName: string,
    eventText: string,
    startDate: string,
    endDate: string,
    groups: eventGroups[]
}

type eventGroups = {
    id: number
    groupName: string
    groupSubName: string
    startDate: string
    endDate: string
}