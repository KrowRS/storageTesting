import { Fragment } from "react";
import { isTemplateExpression } from "typescript";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "/person" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

console.log(window.localStorage.getItem("allEntries"));

export default function Page1() {
  return (
    <>
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <a href="Page2">
                <button>Page2</button>
              </a>
              <a href="Page3">
                <button>Page3</button>
              </a>
            </div>
            {/* /End replace */}
            <button>Click me</button>
          </div>
        </div>
      </main>
    </>
  );
}
