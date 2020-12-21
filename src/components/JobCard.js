import React from "react";
import styled from "styled-components";
import logo from "../images/photosnap.svg";

const TagDefault = styled.div`
  background-color: hsl(180, 14%, 20%);
  color: hsl(180, 52%, 96%);
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  height: 20px;
  font-size: 14px;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  background: white;
  padding: 10px 40px;
  display: flex;
  width: 100%;
  align-items: center;
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-right: 25px;
`;

const MainContent = styled.div`
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;
const CompanyName = styled.h4`
  color: hsl(180, 29%, 50%);
  margin-right: 10px;
`;
const NewTag = styled(TagDefault)`
  background-color: hsl(180, 29%, 50%);
`;
const FeaturedTag = styled(TagDefault)``;

const PositionJob = styled.h2`
  margin: 1px 0;
  &:hover {
    color: hsl(180, 29%, 50%);
  }
`;

const Date = styled.p``;
const JobRequirements = styled.p``;
const Country = styled.p``;
const Footer = styled.div`
  display: flex;
  color: hsl(180, 8%, 52%);
  & p + p {
    margin-left: 10px;
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  div + div {
    margin-left: 10px;
  }
`;
const Tag = styled.div``;

const JobCard = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <MainContent>
        <Header>
          <CompanyName>Photosnap</CompanyName>
          <NewTag>NEW!</NewTag>
          <FeaturedTag>FEATURED</FeaturedTag>
        </Header>
        <PositionJob>Senior Frontend Developer</PositionJob>
        <Footer>
          <Date>1d ago</Date>
          <JobRequirements>Full Time</JobRequirements>
          <Country>USA only</Country>
        </Footer>
      </MainContent>
      <Tags>
        <Tag>Frontend</Tag>
        <Tag>Senior</Tag>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
        <Tag>JavaScript</Tag>
      </Tags>
    </Wrapper>
  );
};

export default JobCard;
