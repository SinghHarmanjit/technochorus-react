export type Task = {
    id: string;
    taskName: string;
    description: string;
    taskOwner: string;
    dueDate: string;
    stage: string;
};

export enum STATUS {
    BACKLOG = 'BACKLOG',
    INPROGRESS = 'IN PROGRESS',
    NEEDHELP = 'NEED HELP',
    DONE = 'DONE',
}

export enum DIFFICULTY {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}
