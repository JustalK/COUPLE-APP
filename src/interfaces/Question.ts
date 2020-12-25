import { NavigationProps, RouteProps } from 'src/interfaces/Navigation';

export interface QuestionPageProps {
	total: number;
	questions: QuestionProps[];
	route: RouteProps;
	navigation: NavigationProps;
}

export interface QuestionPageStates {
	answers: number;
	next: boolean;
	lock: boolean;
}

export interface QuestionProps {
	question: string;
}
