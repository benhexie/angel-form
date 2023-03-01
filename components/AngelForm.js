import store from "../store"

function AngelForm(form) {
    let formState = store.getState()
    store.subscribe(() => {
        formState = store.getState()
    })
    return [form, formState]
}

export default AngelForm