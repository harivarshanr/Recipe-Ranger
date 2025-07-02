import styled from "styled-components";

export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 26px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const AppIcon = styled.img`
  width: 60px;
  height: 50px;
  margin: 0 10px;
`;

export const SearchComponent = styled.div`
  display:flex;
  flex-direction:row;
  background-color: white;
  padding: 7px;
  border-radius: 6px;
  width: 29%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
`;
