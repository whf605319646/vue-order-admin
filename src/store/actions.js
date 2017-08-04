import * as types from './mutation-types'
import { Axios } from "common/js/Axios"

export const fetchGoodsList = function({state, commit}, params) {
  commit(types.CHANGE_FETCH_GOODS_LIST_PARAMS, params)
  Axios.get('goods/goods_list', {params: state.fetchGoodsListParams}).then(res => {
    if(!res.data) {
      commit(types.UPDATE_GOODS_LIST, {})
    } else {
      commit(types.UPDATE_GOODS_LIST, res.data)
    }
  })
}