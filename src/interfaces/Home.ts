import { NavigationProps, RouteProps } from 'src/interfaces/Navigation';

export interface HomePageStates {
	total: number;
	selectedTopics: string[];
}

export interface HomePageProps {
	route: RouteProps;
	navigation: NavigationProps;
}
