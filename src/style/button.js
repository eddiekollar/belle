"use strict";

var buttonStyle = {

  defaultStyle: {
    background: '#EFEFEF',
    border: '1px solid #EFEFEF',
    borderBottomColor: '#D0D0D0',
    borderRadius: 2,
    boxSizing: 'border-box',
    color: '#555',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 16,
    lineHeight: '26px',
    padding: '8px 12px 6px 12px',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'bottom'
  },

  defaultHoverStyle: {
    background: '#F5F5F5',
    border: '1px solid #F5F5F5',
    borderBottomColor: '#D0D0D0',
    color: '#666'
  },

  defaultFocusStyle: {
    background: '#F5F5F5',
    border: '1px solid #F5F5F5',
    borderBottomColor: '#D0D0D0',
    color: '#666',
    outline: 0 // avoid default focus behaviour
  },

  defaultActiveStyle: {
    background: '#E8E8E8',
    border: '1px solid #E8E8E8',
    borderTopColor: '#CFCFCF',
    color: '#5C5C5C'
  },

  primaryStyle: {
    background: '#53C7F2',
    border: '1px solid #53C7F2',
    borderBottomColor: '#3C9CC0',
    borderRadius: 2,
    boxSizing: 'border-box',
    color:'#FAFAFA',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 16,
    lineHeight: '26px',
    padding: '8px 12px 6px 12px',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'bottom'
  },

  primaryHoverStyle: {
    background: '#5FCDF5',
    border: '1px solid #5FCDF5',
    borderBottomColor: '#4FB4DA',
    color: '#FFF'
  },

  primaryFocusStyle: {
    background: '#5FCDF5',
    border: '1px solid #5FCDF5',
    borderBottomColor: '#4FB4DA',
    color: '#FFF',
    outline: 0 // avoid default focus behaviour
  },

  primaryActiveStyle: {
    background: '#4DBEE8',
    border: '1px solid #4DBEE8',
    borderTopColor: '#3B97BA',
    color: '#F5F5F5'
  }
};

export default buttonStyle;
