export interface NavigationProps {
	navigate: any
	dispatch?: any
}

export interface RouteProps {
	params: ParamsProps
}

export interface ParamsProps {
	[key: string]: any
}
