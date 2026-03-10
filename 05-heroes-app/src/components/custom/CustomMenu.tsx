import { Link, useLocation } from "react-router"
//import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"

export const CustomMenu = () => {

    const { pathname } = useLocation()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (

        <NavigationMenu className="mb-4">
            <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild active={isActive("/")} className="navigation-menu-link rounded-md p-2" /*className={cn(isActive('/') && "bg-slate-200 rounded-md", 'p-2')}*/>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild active={isActive("/search")} className="navigation-menu-link rounded-md p-2"/*className={cn(isActive('/search') && "bg-slate-200 rounded-md", 'p-2')}*/>
                        <Link to="/search">Buscar Superhéroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
