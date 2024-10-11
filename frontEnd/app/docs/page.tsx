"use client";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";

export default function DocsPage() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Button onPress={notify}>Press for a toast</Button>
    </div>
  );
}
