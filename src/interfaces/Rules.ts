import { QuestionProps } from 'src/interfaces/Question';
import { NavigationProps, RouteProps } from 'src/interfaces/Navigation';

export interface RulesPageProps {
	total: number;
	route: RouteProps;
	navigation: NavigationProps;
}

export interface RulesPageStates {
	questions: QuestionProps[];
}
