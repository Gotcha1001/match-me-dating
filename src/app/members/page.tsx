import { div } from "framer-motion/client";
import Link from "next/link";

export default function MembersPage() {
  return (
    <div>
      <h3 className="text-3xl">This will be the Members page</h3>
      <Link href="/">Go back HOME</Link>
    </div>
  );
}
