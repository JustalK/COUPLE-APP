import { NavigationProps } from 'src/interfaces/Navigation';

export interface MenuPageProps {
	navigation: NavigationProps;
}

export interface MenuPageStates {
	total: number;
	selectedTopics: string[];
}
