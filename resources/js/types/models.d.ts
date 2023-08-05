export interface Section {
    id: number;
    title: string;
    description: string;
    is_active: boolean;
}

export interface Question {
    id: number;
    title: string;
    description: string;
    is_active: boolean;
    isMultiple: boolean;
    section_id: string;
    answers?: AnswerProps[];
}

export interface AnswerProps {
    id?: number;
    option: string;
    is_checked: boolean;
}

export interface QuestionAnswer {
    id: number;
    option: string;
}

export interface Exam {
    id: number;
    title: string;
    description: string;
    expiry_date: string;
    expires_on: string;
    total_time: number;
    questions?: Question[];
}

export interface Student {
    id: number;
    name: string;
    email: string;
    subscribed: boolean;
}
