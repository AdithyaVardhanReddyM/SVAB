import { getFollowedUsers } from "@/lib/follow-service";
import { getRecommended } from "@/lib/recommended-service";

import { Wrapper } from "./wrapper";
import { Following, FollowingSkeleton } from "./following";
import { 
  Toggle, 
  ToggleSkeleton
} from "./toggle";
import { 
  Recommended, 
  RecommendedSkeleton
} from "./recommended";
import Link from "next/link";
import { StickyNote } from "lucide-react";


export const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <Link
        href={'/blogs'}
      > 
        <div className="pl-6 mb-6 flex items-center justify-centre gap-3">
            <StickyNote />
            <p className="font-semibold text-primary">
              Blogs
            </p>
        </div>
      </Link>
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
