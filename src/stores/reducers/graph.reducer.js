import { SET_GRAPH_DATA, SET_PIE_DATA} from '../ReduxTypes'

const initialUserState = {
    data: [{
        name: 'SomeData',
        data: [
            [
                1612214026,
                189
            ],
            [
                1612214026,
                159
            ],
            [
                1612214026,
                158
            ]
        ]
    }],
    pieData: {
        labels: [],
        series: []
    }

}

export function graphReducer(state = initialUserState, action) {
    switch (action.type) {
        case SET_GRAPH_DATA: return { ...state, data: action.payload };
        case SET_PIE_DATA: return { ...state, pieData: action.payload };
        default: return state;
    }
}