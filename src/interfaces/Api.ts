import { QuestionProps } from 'src/interfaces/Question';
import { TopicProps } from 'src/interfaces/Topic';

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

export interface ApiGetAllTopics {
	get_all_topics: TopicProps[];
}
