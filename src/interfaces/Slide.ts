export interface SlideComponentProps {
	title: string;
	notice?: string;
	image?: any;
	input?: boolean;
	inputUpdate?: (text: string) => void;
	inputQuestion?: string;
	question?: string;
	description?: string;
}
