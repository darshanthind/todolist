export const ADD = (p) => ({

    type: "ADD",
    payload: p


});

export const DEL = (d) => ({
    type: "DEL",
    payload: d
});

export const EDIT = (i, text) => ({
    type: "EDIT",
    payload: { index: i, change: text }
})

