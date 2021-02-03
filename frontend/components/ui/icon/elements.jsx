import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.4rem solid ${COLORS.ACCENT};
  border-radius: 50%;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  img {
    width: calc(${(props) => props.size} * 0.5);
    object-fit: contain;
  }
`;
