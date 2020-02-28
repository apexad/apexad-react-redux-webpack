import axios from 'axios';

export const testAction = () => dispatch => {
  dispatch({
   type: 'TEST_ACTION',
   payload: 'test-action-result'
  })
 }

 export const testFetch = () => dispatch => {
  axios.get('http://localhost:3000/tests')
  .then((response) => {
    dispatch({
      type: 'TEST_FETCH',
      payload: response.data,
    });
  })
  .catch(error => {
    dispatch({
      type: 'TEST_ERROR'
    });
  })
 }
 