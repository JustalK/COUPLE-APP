export interface TopicProps {
	name: string;
	icon: string;
	source: string;
}

export interface TopicComponentProps {
	topics: TopicProps[];
	selectedTopics: string[];
	topicSelected: (selected: boolean, id: string) => void;
}
