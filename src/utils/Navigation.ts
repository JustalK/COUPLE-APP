export const IMAGE_BUTTON = require('src/images/button.png');

const goSomewhere = (navigation, route: string): void => {
	navigation.navigate(route);
}

export const goResult = (navigation): void => {
	goSomewhere(navigation, 'Result');
}

export const goMenu = (navigation): void => {
	goSomewhere(navigation, 'Menu');
}

export const goHome = (navigation): void => {
	goSomewhere(navigation, 'Home');
}
