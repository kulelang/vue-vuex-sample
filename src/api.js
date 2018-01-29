
const api = {
    addTodos(todo){
        console.log('Api : Calling Service :) buat todo')
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('API : Service call doneee')
                resolve(true)
            }, 1000)
        })
    }
}

export default api