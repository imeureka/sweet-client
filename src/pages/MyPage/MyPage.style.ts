import styled from 'styled-components';
import MypageImage from '../../../public/svg/mypage_image.svg';

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TopImage = styled.div`
  width: 37.5rem;
  height: 34rem;
  flex-shrink: 0;

  background-image: url(${MypageImage});
  z-index: 0;
  margin: 0;
`;
export const UserName = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};

  ${({ theme: { fonts } }) => fonts.heading_03};
`;
export const User = styled.div`
  ${({ theme: { fonts } }) => fonts.heading_01};
  color: ${({ theme: { colors } }) => colors.P_06};
`;
export const UserButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'space-between' })};
  width: 100%;
`;
export const UserWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  width: 100%;
  gap: 1.2rem;
`;
export const ProfileWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  position: absolute;

  border-radius: 12px;
  width: 33.5rem;
  height: 14.9rem;
  backdrop-filter: blur(1.5rem);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 1.6rem;
  gap: 1.6rem;
  top: 19rem;
  left: 1.7rem;

  z-index: 999;

  box-shadow: 0rem 0rem 2rem 0rem rgba(220, 180, 180, 0.35);
`;

export const GiftRoomWrapper = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
  background-color: white;
  width: 100%;
`;

export const NoneText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  height: 32.7rem;
  color: ${({ theme: { colors } }) => colors.G_07};
  ${({ theme: { fonts } }) => fonts.body_07};
`;