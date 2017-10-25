import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {LikeButton, EditButton, DeleteButton} from './Atoms';


const WarbleStyle = styled.p`
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.71;
  text-align: left;
`;

const AuthorStyle = styled.span`
  font-weight: bold;
  color: orange;
  font-size: 16px;
`;

const Warble = props => {
  let buttons = <LikeButton liked={props.liked} onCLick={prop.handleLike}/>;
   if (props.author === props.userId){
      buttons= <span> <EditButton onCLick={prop.handleEdit}/> <DeleteButton onCLick={prop.handleDelete}/> </span>;
   }  
  }
  return;
  <div>
    <WarbleStyle>
      <AuthorStyle>{props.author}</AuthorStyle>
      {props.text}
      {' '}
      {buttons}
    </WarbleStyle>
  </div>;
};
