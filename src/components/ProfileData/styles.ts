import styled, { css } from "styled-components";
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMap2Line,
  RiMailLine,
  RiLinksLine,
} from "react-icons/ri";

export const Container = styled.div``;

export const Flex = styled.div``;
export const Avatar = styled.img``;
export const Row = styled.div``;
const iconCss = css`
width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCss}
`;
export const Column = styled.div`
  ${iconCss}
`;
export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCss}
`;
export const LocationIcon = styled(RiMap2Line)`
  ${iconCss}
`;
export const EmailIcon = styled(RiMailLine)`
  ${iconCss}
`;
export const BlogIcon = styled(RiLinksLine)`
  ${iconCss}
`;
