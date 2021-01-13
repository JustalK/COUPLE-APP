import { NavigationProps, RouteProps } from 'src/interfaces/Navigation';

export interface ImprovePageStates {
	question: string;
	selectedTopics: string[];
}

export interface ImprovePageProps {
	route: RouteProps;
	navigation: NavigationProps;
}
