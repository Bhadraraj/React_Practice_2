import { useState, useEffect } from "react";


export const FetchCustom = (url) => {

    const [state, setState] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(url);
                const responseData = await response.json();
                console.log(responseData)
                setState(responseData)
            }
            catch (error) {
                console.log("Error " + error)

            }

        }
        fetchData()
    }, [])
    return (state)


}
