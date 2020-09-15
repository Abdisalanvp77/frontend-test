import {GET_PAGES} from './types';
import pages from '../../api/pages';
import history from '../../history';

export const getPages = () => async dispatch =>{
    const response = await pages.get('/webpages');
    dispatch({type: GET_PAGES, payload: response.data});
    history.push('/');
}