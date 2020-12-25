import styled from 'styled-components/native';
import { View, Image } from 'react-native';

export const StyledTriangle = styled(View)`
	width: 0;
	height: 0;
	backgroundcolor: transparent;
	borderstyle: solid;
`;

export const StyledMiddleView = styled(View)<{ marginTop?: number }>`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top: ${(props) => props.marginTop || 0}px;
`;

export const StyledMiniLogo = styled(Image)`
	position: absolute;
	align-self: center;
	top: 20px;
	height: 150px;
	width: 150px;
`;
