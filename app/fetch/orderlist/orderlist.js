
import { get } from '../get'

export function getOrderList() {
    const result = get('/api/orderlist')
    return result
}