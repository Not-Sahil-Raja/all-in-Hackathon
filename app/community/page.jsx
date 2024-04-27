import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

const page = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr] bg-gray-100 dark:bg-gray-950">
      <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-6 p-6">
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <BookIcon className="h-6 w-6" />
              <span>Edu Africa</span>
            </Link>
            <Button className="h-8 w-8" size="icon" variant="outline">
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <nav className="flex-1 space-y-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Featured Resources
              </h4>
              <div className="grid gap-2">
                <Link
                  className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  <span>Math Tutorials</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                </Link>
                <Link
                  className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  <span>English Lessons</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                </Link>
                <Link
                  className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  <span>Science Experiments</span>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                </Link>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Top Contributors
              </h4>
              <div className="grid gap-2">
                <Link
                  className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>John Doe</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                </Link>
                <Link
                  className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <span>Jane Appleseed</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                </Link>
                <Link
                  className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <span>Mia Sanchez</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                </Link>
              </div>
            </div>
          </nav>
          <div className="mt-auto">
            <Button className="w-full" variant="outline">
              Ask a Question
            </Button>
            <Button className="w-full mt-4" variant="outline">
              Create a Problem
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <BookIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search questions..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Community</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Ask questions, share resources, and connect with other learners.
              </p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Asked 2 days ago
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">
                    How do I solve this math problem?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    I'm struggling with this algebra problem and could use some
                    help. Can anyone provide a step-by-step solution?
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      <MessageCircleIcon className="h-4 w-4" />
                      <span>Reply</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ThumbsUpIcon className="h-4 w-4" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Appleseed</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Asked 1 week ago
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">
                    Where can I find free English lessons?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    I'm trying to improve my English skills, but I don't have
                    the budget for paid lessons. Any recommendations for free
                    online resources?
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      <MessageCircleIcon className="h-4 w-4" />
                      <span>Reply</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ThumbsUpIcon className="h-4 w-4" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Mia Sanchez</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Asked 3 days ago
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">
                    How can I set up a science experiment at home?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    I want to do some fun science experiments with my kids, but
                    I don't know where to start. Any tips on easy, safe
                    experiments we can do at home?
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      <MessageCircleIcon className="h-4 w-4" />
                      <span>Reply</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ThumbsUpIcon className="h-4 w-4" />
                      <span>Like</span>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ShareIcon className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Posted 1 day ago
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium">
                    Algebra Problem: Solving for x
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    I'm trying to solve this algebra problem: 2x + 5 = 13. Can
                    anyone walk me through the steps to find the value of x?
                  </p>
                  <div className="mt-4">
                    <Button size="sm" variant="outline">
                      View Problem
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}