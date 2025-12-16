"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useBasketStore from "@/store";
import { Check, CreditCard, Download, Loader, Share2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return <Loader />;
  }

  return (
    <div className=" bg-gray-100 flex items-start justify-center  min-h-dvh p-4">
      <Card className="w-full max-w-md bg-white mt-5 lg:mt-24 shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto my-4 bg-green-100 size-20 animate-pulse rounded-full flex items-center justify-center">
            <div className="bg-green-600 p-1 rounded-full">
              <Check className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">¡Pago Exitoso!</h1>
          <p className="text-gray-500">Transacción completada con éxito</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Monto pagado</span>
            <span className="text-xl font-semibold">$1,200.00</span>
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Fecha</span>
              <span className="text-gray-700 flex items-center">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Hora</span>
              <span className="text-gray-700 flex items-center">
                {new Date().toLocaleTimeString() ?? "00:00"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Método de pago</span>
              <span className="text-gray-700 flex items-center">
                <CreditCard className="h-4 w-4 mr-1" />
                Visa terminada en 4242
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Número de referencia</span>
              <span className="text-gray-700 truncate">
                {(orderNumber ?? "").slice(0, 18)}
              </span>
            </div>
          </div>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Descargar recibo
          </Button>
          <Button variant="outline" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
