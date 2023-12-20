import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardWithForm() {
  return (
    <Card className="w-[450px] rounded">
      <CardHeader>
        <CardTitle>Tracking</CardTitle>
        <CardDescription>Track your order.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Track Number" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Search</Button>
      </CardFooter>
    </Card>
  );
}
