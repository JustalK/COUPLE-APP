import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextPyramideProps } from 'src/interfaces/TextPyramide';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

const Triangle = styled(View)<{ isDown?: boolean }>`
	position: absolute;
	width: 0;
	height: 0;
	border-style: solid;
	border-bottom-color: transparent;
	border-top-color: transparent;
	border-right-color: transparent;
`;

const TriangleLeft = styled(Triangle)<{ isDown?: boolean; height: number; borderLeftColor: string }>`
	top: 0;
	right: -${(props) => props.height}px;
	border-bottom-width: 0px;
	border-top-width: ${(props) => props.height}px;
	border-left-width: ${(props) => props.height}px;
	border-left-color: ${(props) => props.borderLeftColor};
	${(props) =>
		props.isDown &&
		`
		transform: rotateX(180deg);
	`}
`;

const TriangleRight = styled(Triangle)<{ isDown?: boolean; height: number; borderRightColor: string }>`
	top: 0;
	left: -${(props) => props.height}px;
	border-bottom-width: 0px;
	border-top-width: ${(props) => props.height}px;
	border-right-width: ${(props) => props.height}px;
	border-right-color: ${(props) => props.borderRightColor};
	${(props) =>
		props.isDown &&
		`
		transform: rotateX(180deg);
	`}
`;

const StyledText = styled(Text)<{ color: string; size: number }>`
	font-size: ${(props) => props.size}px;
	text-transform: uppercase;
	margin-left: 10px;
	color: ${(props) => props.color};
`;

const StyledView = styled(View)<{ height: number; backgroundColor: string }>`
	height: ${(props) => props.height}px;
	padding: 0 15px;
	background-color: ${(props) => props.backgroundColor};
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

/**
 * Show the background and define the container
 * @params {props} Define the children to be pass to the container
 **/
export default class TextPyramide extends Component<TextPyramideProps, never> {
	/**
	 * Display the icon beside the title
	 * @params {string} name The title to show
	 **/
	showIcon(name: string): JSX.Element {
		return <Icon name={name} type="font-awesome" size={24} color={this.props.color} />;
	}

	/**
	 * Display the container
	 * return {JSX.Element} Display the container
	 **/
	render(): JSX.Element {
		return (
			<StyledView backgroundColor={this.props.backgroundColor} height={this.props.height}>
				<TriangleRight
					height={this.props.height}
					borderRightColor={this.props.backgroundColor}
					isDown={this.props.isDown}
				/>
				{this.props.icon && this.showIcon(this.props.icon)}
				<StyledText size={this.props.size} color={this.props.color}>
					{this.props.text}
				</StyledText>
				<TriangleLeft
					height={this.props.height}
					borderLeftColor={this.props.backgroundColor}
					isDown={this.props.isDown}
				/>
			</StyledView>
		);
	}
}
