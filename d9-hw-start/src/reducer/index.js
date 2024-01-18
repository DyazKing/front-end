import React from 'react'

export default function storeReducer(state = [], action) {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return{
        ...state,
        favourites: [...state.favourites, action.payload]
      }
  
    default:
      break;
  }

  return state
}
