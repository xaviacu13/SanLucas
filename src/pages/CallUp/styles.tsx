import styled from "@emotion/styled";

export const Container = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: 'Arial', sans-serif;
  color: #222;
  line-height: 1.6;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    padding: 1rem;
    font-size: 0.9rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;
`;

export const Paragraph = styled.p`
  margin: 0.75rem 0;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin: 0.5rem 0 1rem;
`;

export const ListItem = styled.li`
  margin: 0.25rem 0;
  &::before {
    content: "– ";
    color: #555;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 1rem;
  font-weight: bold;
`;

export const Highlight = styled.span`
  color: #c62828;
  font-weight: bold;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
