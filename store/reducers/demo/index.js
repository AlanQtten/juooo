import demoState from '../../state/demo'

export default function(state = demoState.demo, action) {
    if(action.type === 'ADDDEMO') {
        state += 1;
    }
    return state;
}