import { NavigationProps, RouteProps } from 'src/interfaces/Navigation';

export interface HomePageStates {
	total: number;
	started: boolean;
	startedMenu: boolean;
}

export interface HomePageProps {
	route: RouteProps;
	navigation: NavigationProps;
}
