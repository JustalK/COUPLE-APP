import { QuestionProps } from 'src/interfaces/Question';
import { NavigationProps, RouteProps } from 'src/interfaces/Navigation';

export interface LoadingPageProps {
	total: number;
	route: RouteProps;
	navigation: NavigationProps;
}

export interface LoadingPageStates {
	questions: QuestionProps[];
}
