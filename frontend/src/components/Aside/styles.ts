import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;

  background-color: ${(props) => props.theme.colors.secundary};
  padding-left: 20px;

  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const LogImg = styled.img``;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav``;

export const MenuItemLink = styled.a``;
