import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({})};

  padding: 0.4rem 0.8rem;
  border-radius: 1.3rem;
  gap: 1rem;

  color: ${({ theme: { colors } }) => colors.G_07};
  background-color: ${({ theme: { colors } }) => colors.G_01};
  ${({ theme: { fonts } }) => fonts.caption_03};
`;
