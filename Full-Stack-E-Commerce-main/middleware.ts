import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

// During local development you can disable Clerk middleware by
// setting `DISABLE_AUTH=true` in your `.env` to avoid needing real keys.
const disableAuth = process.env.DISABLE_AUTH === "true";

const clerk = clerkMiddleware();

export default function middleware(req: NextRequest) {
  if (disableAuth) return NextResponse.next();
  return clerk(req as any);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
