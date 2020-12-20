export interface QuestionPageProps {
	total: number;
	questions: QuestionProps[];
}

export interface QuestionPageStates {
	answers: number;
	next: boolean;
}

export interface QuestionProps {
	question: string;
}
