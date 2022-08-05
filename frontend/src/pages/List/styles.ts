import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};

    margin:0 10px;

    transition: opacity 0.3;

    :hover {
      opacity: 0.7;
    }
  }
`;
