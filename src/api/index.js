import {
	get,
	post
} from './api'
// 配置项
// http://yihua.weiyun.tinyint.cn/api/ec/recommend/list/3/pf1-ch1-v1.json
export const getRecommendList = (params) => get('/api/config/get-one-option?key=app_h5_official_website&group=1', params)
// export const aaa = (params) => get('/api/act/mergePuzzle/getActList', params)
