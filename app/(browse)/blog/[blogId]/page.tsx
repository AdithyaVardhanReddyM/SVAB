import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";


type Props = {
  params: {
    noteId: string;
  };
};

const NotebookPage = async ({ params: { noteId } }: Props) => {
  
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
      <div className="border shadow-xl border-stone-200 rounded-lg p-4 flex items-center">
          <Link href="/blogs">
            <Button className="bg-blue-500" size="sm">
              Back
            </Button>
          </Link>
          <div className="w-3"></div>
          <UserButton/>
          <div className="ml-auto">
            <Button className="bg-blue-500" size="sm">
              Post
            </Button>
          </div>
        </div>

        <div className="h-4"></div>
        <div className="border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full">
          <TipTapEditor />
        </div>
      </div>
    </div>
  );
};

export default NotebookPage;