"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import Link from "next/link";

type Props = {};

const CreateNoteDialog = (props: Props) => {
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const [image, setImage] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input,image);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-dashed border-2 flex border-blue-500 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
          <Plus className="w-6 h-6 text-blue-500" strokeWidth={3} />
          <h2 className="font-semibold text-blue-500 sm:mt-2">
            New Blog
          </h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Blog</DialogTitle>
          <DialogDescription>
            You can create a new Blog by clicking the button below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Title"
          />
          <div className="h-3"></div>
          <Label> Upload an image to your Blog</Label>
          <div className="h-3"></div>
          <Input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="file"
            accept="image/*"
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type="reset" variant={"secondary"}>
              Cancel
            </Button>
            <Link href={"/blog/1"}>
              <Button
                type="submit"
                className="bg-blue-500"
              >
                Create
              </Button>
            </Link>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;