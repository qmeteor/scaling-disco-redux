/**
 * Created by Bien on 2017-06-11.
 */
export const TOGGLE_RED = 'TOGGLE_RED';
export const TOGGLE_GREEN = 'TOGGLE_GREEN';

export const SET_FILTER = {
    GREEN: 'green',
    RED: 'red'
}


export function changeToRed() {
    console.log('action fired red');

    return {
        type: TOGGLE_RED,
        text: SET_FILTER.RED
    }
}

export function changeToGreen() {
    console.log('action fired green');

    return {
        type: TOGGLE_GREEN,
        text: SET_FILTER.GREEN
    }
}