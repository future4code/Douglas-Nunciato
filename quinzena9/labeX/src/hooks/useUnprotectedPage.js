import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToPagInicioAdm } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToPagInicioAdm(history)
        }
    }, [history])

}

export default useUnprotectedPage