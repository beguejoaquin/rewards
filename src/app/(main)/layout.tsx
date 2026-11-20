import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
} from "@/ui/components/shadcn/navigation-menu";
import { Separator } from "@/ui/components/shadcn/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-500 w-full h-16">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <h1 className="text-2xl">Greez Studio</h1>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <main className="flex-1 p-4">{children}</main>
    </>
  );
}
