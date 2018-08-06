import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => async dispatch => {
    try{
        dispatch(setItemsLoading());
        await axios.get('/api/items').then(res =>
            dispatch({
            type: GET_ITEMS,
            payload: res.data
            })
        );
    }
    catch(error){
        console.log(error, 'error while loading items')
    }
};

export const addItem = item => async dispatch => {
  try {
    const items = await axios.post('/api/items', item)
    dispatch({
      type: ADD_ITEM,
      payload: items.data
    })
  }
  catch(error) {
    console.log(error, 'error while adding items')
  }
};

export const deleteItem = id => async dispatch => {
    try{
        await axios.delete(`/api/items/${id}`).then(res =>
            dispatch({
            type: DELETE_ITEM,
            payload: id
            })
        );
    }catch(error){
        console.log(error, 'error while deleting items')
    }
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
