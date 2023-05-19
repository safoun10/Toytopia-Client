import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToyTopia -  ${title}`;
    } , [title])
}

export default useTitle;