import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, TwitterIcon as TikTok } from "lucide-react";
import Link from "next/link";
import ButtonScrollTop from "./ButtonScrollTop";

export function Footer() {
  return (
    <footer className="relative ">
      {/* Curved top edge similar to hero banner */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-white"
        style={{
          clipPath: "ellipse(75% 100% at 50% 0%)",
        }}
      />

      {/* Change background to black and update padding */}
      <div className="relative bg-black text-white pt-20 pb-12">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Newsletter section */}
          <div className="flex flex-col items-center text-center mb-16">
            <h3 className="text-3xl font-bold mb-3">Únete al club Shoper</h3>
            <p className="text-zinc-400 mb-8">
              Recibe un 10% de descuento en tu primera compra
            </p>
            <div className="flex gap-3 w-full max-w-md">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-zinc-700"
              />
              <Button className="" variant={"secondary"} size={"default"}>
                Suscribirse
              </Button>
            </div>
          </div>
          {/* Main footer content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
                Ayuda
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="hover:text-white transition-colors"
                  >
                    Envíos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-white transition-colors"
                  >
                    Devoluciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/size-guide"
                    className="hover:text-white transition-colors"
                  >
                    Guía de tallas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
                Sobre Shoper
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    Quiénes somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores"
                    className="hover:text-white transition-colors"
                  >
                    Tiendas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sustainability"
                    className="hover:text-white transition-colors"
                  >
                    Sostenibilidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Términos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social icons with modern hover effect */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
                Síguenos
              </h4>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">TikTok</span>
                  <TikTok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <ButtonScrollTop />
          {/* Copyright with updated color */}
          <div className="text-center text-sm text-zinc-500">
            <p>
              © {new Date().getFullYear()} Shoper. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
