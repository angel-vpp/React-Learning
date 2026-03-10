import { useRef, useState } from "react"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"
import type { Gif } from "../interfaces/gif.interface"

//const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
    const [currentGifs, setCurrentGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setCurrentGifs(gifsCache.current[term])
            return
        }

        const gifs = await getGifsByQuery(term)
        setCurrentGifs(gifs)
        gifsCache.current[term] = gifs
        setPreviousTerms([term, ...previousTerms].slice(0, 8))
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase()

        if (query.length === 0) return

        if (previousTerms.includes(query)) return

        setPreviousTerms([query, ...previousTerms].slice(0, 8))

        const gifs = await getGifsByQuery(query)

        //console.log(gifs)

        setCurrentGifs(gifs)

        gifsCache.current[query] = gifs
    }
    return {
        //Properties
        currentGifs,
        previousTerms,

        //Methods
        handleTermClicked,
        handleSearch,
    }
}
