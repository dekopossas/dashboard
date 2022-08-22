import styled from 'styled-components';

interface IcontainerProps {
  color: string;
}

export const Container = styled.div`
  background-color: ${(props) => props.color};
`;
