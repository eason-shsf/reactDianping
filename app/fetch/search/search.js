
import { get } from '../get'

export function getSearchData(page, cityName, searchPath) {
    const result = get('/api/searchList/' + page + '/' + cityName + searchPath)
    return result
}