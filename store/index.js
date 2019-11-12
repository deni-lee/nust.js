export const state = () => ({
    product1: 0,
    product2: 0
})

export const mutations = {
    increment1(state) {
        state.product1++
            // localStorage.setItem('product1', state.product1)
    },
    increment2(state) {
        state.product2++
            // localStorage.setItem('product2', state.product2)
    }

}