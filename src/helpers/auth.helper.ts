

export const loginHelper = (id: number) => {

    return localStorage.setItem('user', JSON.stringify(id))

}