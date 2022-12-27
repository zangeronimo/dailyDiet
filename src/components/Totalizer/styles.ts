import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors['green-light']};
  `}

  align-items: center;
  justify-content: center;
  padding: 8px;

  border-radius: 8px;
`;

export const Percentage = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.fonts.xl};
  `}

  font-weight: 700;
  line-height: 41.6px;
`;

export const Description = styled.Text`
  line-height: 41.6px;
  margin-top: -10px;
`;
