import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Note } from '../models/note';
import { User, UserFormValues } from '../models/user';
import { store } from '../stores/store';




axios.defaults.baseURL = 'http://localhost:7000/api';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if(token) config.headers!.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response =>{
  
        
        return response;
     
},(error:AxiosError) => {
    const {data,status,config} = error.response!;
    switch (status) {
        case 400:
            if(typeof data === 'string'){
                toast.error(data);
            }
            if(config.method === 'get' && data.errors.hasOwnProperty('id')){
                history.push('/not-found');
            }
            if(data.errors){
                const modalStateErrors = [];
                for(const key in data.errors){
                    if(data.errors[key]){
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.flat();
            }
            break;
        case 401:
            toast.error('unauthorized');
            break;
        case 404:
            history.push('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data);
            history.push('/server-error');
            break;
        
        
    }
    return Promise.reject(error);
})

const responseBody  = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string,body : {}) => axios.post<T>(url,body).then(responseBody),
    put: <T> (url: string,body : {}) => axios.put<T>(url,body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}



const Notes = {
    list: () => requests.get<Note[]>('/notes'),
    details: (id:string) => requests.get<Note>(`/notes/${id}`),
    create: (note : Note) => axios.post<void>('/notes',note),
    update: (note:Note) => axios.put<void>(`/notes/${note.id}`,note),
    delete: (id:string) => axios.delete<void>(`/notes/${id}`)
}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login',user),
    register: (user:UserFormValues) => requests.post<User>('/account/register',user)
}

const agent = {
    Notes,
    Account

}

export default agent;