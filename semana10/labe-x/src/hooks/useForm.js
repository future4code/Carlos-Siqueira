import { useState } from "react"

const useForm = (estadoinicial) => {
    const [form,setForm] = useState(estadoinicial)

    const onChange = (event) =>{
        const {name,value} = event.target
        setForm({ ...form,[name]: value})
    }
    return {form,onChange}
}

export default useForm