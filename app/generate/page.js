import Generate from "./GenerateClient"
import { Suspense } from "react"

export const metadata = {
  title: "Generate Your Bittree - Linktree Clone",
  description: "Create your personalized Bittree page with links and profile picture."
}

export default function GeneratePage() {
  return  (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  )
}
