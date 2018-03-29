import {get } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city, page) {
    return get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
}