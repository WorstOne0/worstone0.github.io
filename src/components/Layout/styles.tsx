// React
import styled from "styled-components";

// Interface
interface ContainerProps {
  first: boolean;
  full: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: ${(props) => (props.full ? "100%" : "auto")};
  padding-left: ${(props) => (props.first ? "6rem" : "0rem")};
  position: relative;
`;

export const TopTags = styled.span`
  position: absolute;
  top: 0;

  color: #4d4d4e;
  font-size: 1.8rem;
  font-family: "La Belle Aurore";
`;

export const Content = styled.div`
  height: 100%;
  padding: 3rem 5rem;
`;

export const BottomTags = styled.span`
  position: absolute;
  bottom: 0;

  color: #4d4d4e;
  font-size: 1.8rem;
  font-family: "La Belle Aurore";
`;
