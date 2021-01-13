export interface CustomButtonProps {
	children?: JSX.Element;
	text: string;
	onPress: () => void;
}

export interface CustomButtonStates {
	hasBeenPressed: boolean;
}

export interface CustomTopButtonProps {
	leftIcon?: string;
	onPressLeft?: () => void;
	middleIcon?: string;
	onPressMiddle?: () => void;
	rightIcon?: string;
	onPressRight?: () => void;
}

export interface CustomTopButtonStates {
	hasBeenPressedLeft: boolean;
	hasBeenPressedRight: boolean;
	hasBeenPressedMiddle: boolean;
  [x: string]: boolean;
}
