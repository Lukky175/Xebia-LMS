// Default page is /home.

import { redirect }
from "next/navigation";

export default function RootPage() {
    redirect("/home");
}