export interface NavigationProps {
	navigate: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	dispatch?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface RouteProps {
	params: ParamsProps;
}

export interface ParamsProps {
	[key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
