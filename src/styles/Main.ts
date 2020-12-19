import styled from 'styled-components/native';
import { View } from 'react-native';

export const StyledTriangle = styled.View`
	width: 0;
	height: 0;
	backgroundColor: transparent;
	borderStyle: solid;
`

export const StyledMiddleView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top: ${props => props.marginTop || 0}px;
`
