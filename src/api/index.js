import {
	get,
	post
} from './api'


export const test = (params) => post('/api/act/mergePuzzle/getActList', params)
export const aaa = (params) => get('/api/act/mergePuzzle/getActList', params)
