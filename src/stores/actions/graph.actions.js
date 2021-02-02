import GraphService from '../../services/graph.service'
import { SET_GRAPH_DATA, SET_PIE_DATA } from '../ReduxTypes'
import { ConvertGraphData } from '../../helpers/ConvertGraphData'

/*
    Получение данных для графов
    Конвертация в необходимый apex-у вид
*/
export const requestGraphData = () => dispatch => {
    GraphService.requestGraphData()
        .then(result => {
            let { data, pieData } = ConvertGraphData(result)
            dispatch({ type: SET_GRAPH_DATA, payload: data })
            dispatch({ type: SET_PIE_DATA, payload: pieData })
        }
        ).catch(e => {
            console.log(`Error with graph request, in graph.action`)
            console.dir(e)
        })
}