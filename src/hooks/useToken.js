import { useEffect, useState } from "react"


const useToken = user => {
    const [token, setToken] = useState();

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://doctor-portal-rgekx2xd6-mahfuzmoyeens-projects.vercel.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                })
        }

    }, [user])
    return [token]
}

export default useToken;