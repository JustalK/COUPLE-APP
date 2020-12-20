import { Animated } from 'react-native';
import { StackCardInterpolationProps } from '@react-navigation/stack';

/**
* Create a slide effect on the bottom
**/
export const slideY = ({ current, next, inverted, layouts: { screen } }: StackCardInterpolationProps) => {
	const progress = Animated.add(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		}),
		next
			? next.progress.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
					extrapolate: 'clamp',
			  })
			: 0,
	);

	return {
		cardStyle: {
			transform: [
				{
					translateY: Animated.multiply(
						progress.interpolate({
							inputRange: [0, 1, 2],
							outputRange: [
								screen.width,
								0,
								screen.width * -1,
							],
							extrapolate: 'clamp',
						}),
						inverted,
					),
				},
			],
		},
	};
};

export const slideLeft = ({ current, next, inverted, layouts: { screen } }: StackCardInterpolationProps) => {
	const progress = Animated.add(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		}),
		next
			? next.progress.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
					extrapolate: 'clamp',
			  })
			: 0,
	);

	return {
		cardStyle: {
			transform: [
				{
					translateX: Animated.multiply(
						progress.interpolate({
							inputRange: [0, 1, 2],
							outputRange: [
								screen.width * -1,
								0,
								screen.width,
							],
							extrapolate: 'clamp',
						}),
						inverted,
					),
				},
			],
		},
	};
};

/**
* Create a slide effect on the right
**/
export const slideX = ({ current, next, inverted, layouts: { screen } }: StackCardInterpolationProps) => {
	const progress = Animated.add(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		}),
		next
			? next.progress.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
					extrapolate: 'clamp',
			  })
			: 0,
	);

	return {
		cardStyle: {
			transform: [
				{
					translateX: Animated.multiply(
						progress.interpolate({
							inputRange: [0, 1, 2],
							outputRange: [
								screen.width,
								0,
								screen.width * -1,
							],
							extrapolate: 'clamp',
						}),
						inverted,
					),
				},
			],
		},
	};
};
