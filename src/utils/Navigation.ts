import { NavigationProps } from 'src/interfaces/Navigation';

const goSomewhere = (navigation: NavigationProps, route: string): void => {
	navigation.navigate(route);
};

export const goResult = (navigation: NavigationProps): void => {
	goSomewhere(navigation, 'Result');
};

export const goMenu = (navigation: NavigationProps): void => {
	goSomewhere(navigation, 'Menu');
};

export const goHome = (navigation: NavigationProps): void => {
	goSomewhere(navigation, 'Home');
};

export const goImprove = (navigation: NavigationProps): void => {
	goSomewhere(navigation, 'Improve');
};
