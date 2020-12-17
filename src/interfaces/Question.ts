export interface QuestionPageProps {
	total: number;
	questions: QuestionProps[];
}

export interface QuestionPageStates {
	answers: number;
}

export interface QuestionProps {
	question: string;
}
