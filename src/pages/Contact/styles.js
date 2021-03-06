import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--color-background-dark);

  position: relative;
  overflow: hidden;

  color: #fff;
`;

export const Wrapper = styled.div`
  height: ${(props) => (props.auto ? "100%" : "100vh")};
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: ${(props) => (props.column ? "row" : "column")};
`;
