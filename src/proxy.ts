import { auth } from "@/lib/auth/server";

export default auth.middleware({
  // Redirects unauthenticated users to sign-in page
  loginUrl: "/auth/sign-in",
});

export const config = {
  matcher: [
    // Protected routes requiring authentication
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*|auth/sign-in(?:/|$)|auth/sign-up(?:/|$)|api/auth(?:/|$)).*)",
  ],
};
