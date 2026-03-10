import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

interface Options {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL

export const searchHeroesAction = async ({ name, category, status, strength, team, universe }: Options = {}) => {
    if (!name && !category && !status && !strength && !team && !universe) return []
    const { data } = await heroApi.get<Hero[]>('/search', {
        params: {
            name: name,
            category: category,
            status: status,
            strength: strength,
            team: team,
            universe: universe,
        }
    })

    return data.map(hero => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`
    }))
}