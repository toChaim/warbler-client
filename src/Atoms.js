import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border-radius: 50%;
  width: 30px;
  border-color: blue;
`;

export const LikeButton = ({ liked, onClick }) => (
  <ButtonStyle
    className={liked ? 'fa-heart' : 'fa-heart-o'}
    onClick={onClick}
  />
);

export const EditButton = {onClick} => (
  <ButtonStyle className="fa-edit" onClick={onClick} />
);

export const DeleteButton = {onClick} => (
  <ButtonStyle className="fa-trash-o" onClick={onClick} />
);
