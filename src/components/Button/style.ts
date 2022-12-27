import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  ${({theme}) => css`
    background-color: ${theme.colors['grey-900']};
    padding: 16px 24px;

    align-items: center;
    justify-content: center;

    border-radius: 6px;
  `}
`;

export const Label = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sm};
  `}

  font-weight: 700;
  line-height: 18.2px;
`;
