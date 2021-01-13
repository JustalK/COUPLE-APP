import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface TopicProps {
	id: string;
	name: string;
	icon: IconProp;
	source: string;
}

export interface TopicComponentProps {
	topics: TopicProps[];
	selectedTopics: string[];
	topicSelected: (selected: boolean, id: string) => void;
}
