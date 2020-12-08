interface BackendResponceError{
    detailMessage : string
}

interface Option{
    text : string;
    correct : boolean;
}


export interface BackendResponce{
    isSuccess : boolean;
    result : any;
    error : BackendResponceError;
}


export interface Team{
    id : number;
    name : string;
    createdBy : string;
    createdDate : Date;
    backgroundImageURL : string;
}


export interface Course{
    id : number;
    name : string;
    description : string;
    numberOfQuestions : number;
    durationInMins : number;
    createdBy : string;
    createdDate : Date;
    team : Team;
}

export interface Attendee{
    name : string;
    ctsID : number;
}

export interface Question{
    id : number;
    courseID : number;
    type : string;
    text : string;
    options : Option[];
    createdBy : string;
    createdDate : Date;
}