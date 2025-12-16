"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useBasketStore from "@/store";
import {
  Menu,
  MinusIcon,
  PlusIcon,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { AnnouncementBanner } from "./announcement-banner";
import UserProfileComponent from "./UserProfile";

const navigation = [
  { name: "Nuevo", href: "/" },
  { name: "Mujer", href: "/" },
  { name: "Hombre", href: "/" },
  { name: "Accesorios", href: "/" },
  { name: "Sale", href: "/" },
];

const menuItems = [
  {
    title: "Novedades",
    subItems: [
      "Lo Nuevo",
      "Colección Denim",
      "Colección Mallas",
      "New In Poleras y Blusas",
      "New In Sweaters",
      "Promociones 2x",
      "Remate Final",
      "Ver todo",
    ],
  },
  { title: "Moda", subItems: [] },
  { title: "Jeans", subItems: [] },
  { title: "Deportes", subItems: [] },
  { title: "Zapatos", subItems: [] },
  { title: "Lencería y Corsetería", subItems: [] },
  { title: "Carteras y Accesorios", subItems: [] },
];

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleItem = (title: string) => {
    setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <AnnouncementBanner />
      <div className="border-b">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile menu */}
            <Sheet>
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="w-full  mx-auto bg-white  overflow-hidden">
                  <div className="p-4 flex items-center space-x-4 border-b">
                    <div
                      className="rounded-full size-14 bg-gradient-to-tr from-slate-50 to-slate-100 shadow "
                    />
                    <h2 className="text-md font-semibold text-gray-800">MODA MUJER</h2>
                  </div>
                  <nav>
                    <ul className="text-sm">
                      {menuItems.map((item) => (
                        <li
                          key={item.title}
                          className="border-b last:border-b-0"
                        >
                          <button
                            onClick={() => toggleItem(item.title)}
                            className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                          >
                            <span className="font-normal text-gray-600">{item.title}</span>
                            {expandedItems[item.title] ? (
                              <MinusIcon className="size-4 text-gray-800/80" />
                            ) : (
                              <PlusIcon className="size-4 text-gray-800/80"  />
                            )}
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              expandedItems[item.title] ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            {item.subItems.length > 0 && (
                              <ul className="bg-gray-50/50 py-2">
                                {item.subItems.map((subItem) => (
                                  <li key={subItem}>
                                    <a
                                      href="#"
                                      className="block px-6 py-2 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                      {subItem}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
            >
              SHOPER
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-zinc-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center md:gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
                onClick={() => setShowSearch(!showSearch)}
              >
                {showSearch ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
                <span className="sr-only">Buscar</span>
              </Button>

              <UserProfileComponent />

              <Link href={"/basket"}>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Carrito</span>
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${showSearch ? "max-h-16 opacity-100 mb-4" : "max-h-0 opacity-0"}
            `}
          >
            <div className="relative">
              <Form action="/search" className="w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <Input
                  type="search"
                  placeholder="¿Qué estás buscando?"
                  className="w-full pl-10 py-6 text-lg bg-zinc-50 border-zinc-300 focus:border-zinc-400 rounded-xl "
                />
              </Form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
