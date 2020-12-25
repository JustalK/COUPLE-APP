import { QuestionProps } from 'src/interfaces/Question';

export interface ApiGetAllQuestions {
	get_all_questions: QuestionProps[];
}

export interface ApiGetRandomQuestions {
	get_random_questions: QuestionProps[];
}

export interface ApiCountTotalQuestions {
	count_total_questions: number;
}

export interface ApiAddNewQuestion {
	question: QuestionProps;
}
