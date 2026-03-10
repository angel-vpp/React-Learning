import { use, /* type JSX */ } from "react"
import { UserContext } from "../context/userContext"
import { Navigate } from "react-router"

interface Props {
    //element: JSX.Element,
    element: React.ReactNode,
}

export const PublicRoute = ({ element }: Props) => {
    const { authStatus } = use(UserContext)

    if (authStatus === 'checking') return <div>Loading...</div>

    if (authStatus === 'authenticated') {
        return <Navigate to="/about" replace />
    }

    return element
}
