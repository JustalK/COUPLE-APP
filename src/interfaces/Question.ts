import {GameOption} from 'src/interfaces/Game'

export interface QuestionPageProps {
	options: GameOption;
}

export interface QuestionPageStates {
	answers: number;
}

export interface QuestionProps {
	question: string;
}
