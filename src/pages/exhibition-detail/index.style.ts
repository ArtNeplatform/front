import styled from '@emotion/styled';

export const ExhibitionImage = styled.img`
  width: 100%;
  height: 600px;
  display: block;
  object-fit: cover;
  position: absolute;
  top: 2;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 620px;
  padding: 20px;
`;

export const Title = styled.h1`
  ${(theme) => theme.theme.typography['28']}
  font-weight: 600;
  margin-top: 20px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding-bottom: 40px;
  border-bottom: 1px solid #dcdcdc;
  width: 995px;
`;

export const AuthorImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  object-fit: cover;
`;

export const AuthorName = styled.h2`
  margin-left: 12px;
  ${(theme) => theme.theme.typography['18']}
  color: ${({ theme }) => theme.colors.font03gray};
  font-weight: 500;
`;

export const Gallery = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  gap: 20px;
`;

export const ArtworkList = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const SubTitle = styled.div`
  ${(theme) => theme.theme.typography['20']}
  font-weight: 600;
  margin-top: 40px;
`;

export const ArtworkImage = styled.img`
  width: 191px;
  height: auto;
  object-fit: contain;
`;
