import { Badge } from "@/components/ui/badge"
import { Heart, Trophy, Users, Zap } from "lucide-react"
import { HeroStatCard } from "./HeroStatCard"
import { useHeroSummary } from "../hooks/useHeroSummary"
import { FavoriteHeroContext } from "../context/FavoriteHeroContext"
import { use /*, useMemo */ } from "react"

export const HeroStats = () => {

    const { data: summary } = useHeroSummary()
    const { favoriteCount } = use(FavoriteHeroContext)

    if (!summary) {
        return <div>Cargando...</div>
    }

    // No se usa memorización porque el componente ya se renderiza basándose en los cambios en summary y favoriteCount
    // const percentageFavorites = useMemo(() => {
    //     return (favoriteCount / summary.totalHeroes * 100).toFixed(2)
    // }, [favoriteCount, summary])


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <HeroStatCard
                title="Total de Personajes"
                icon={<Users className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                        {summary?.heroCount} Héroes
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                        {summary?.villainCount} Villanos
                    </Badge>
                </div>
            </HeroStatCard>

            <HeroStatCard
                title="Favoritos"
                icon={<Heart className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold text-red-600 my-4" data-testid="favorite-count">{favoriteCount}</div>
                <p className="text-xs text-muted-foreground" data-testid="favorite-percentage">{(favoriteCount / summary.totalHeroes * 100).toFixed(2)}% of total</p>
            </HeroStatCard>

            <HeroStatCard
                title="Más Fuertes"
                icon={<Zap className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
                <p className="text-xs text-muted-foreground">Fuerza: {summary?.strongestHero.strength}</p>
            </HeroStatCard>

            <HeroStatCard
                title="Más Inteligentes"
                icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
                <p className="text-xs text-muted-foreground">Inteligencia: {summary?.smartestHero.intelligence}</p>
            </HeroStatCard>
        </div>
    )
}
