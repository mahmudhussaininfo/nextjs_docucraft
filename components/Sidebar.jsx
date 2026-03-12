"use client";
import {
  getDocsByAuthor,
  getDocsByCategory,
  getDocsByTag,
} from "@/utils/utils.js";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";

const Sidebar = ({ docs }) => {
  const pathname = usePathname();

  const [rootNodes, setRootNodes] = useState([]);
  const [nonRootNodes, setNonRootNodes] = useState({});

  useEffect(() => {
    let matchDocs = docs;
    if (pathname.includes("/tags")) {
      const tag = pathname.split("/")[2];
      matchDocs = getDocsByTag(docs, tag);
    } else if (pathname.includes("/category")) {
      const category = pathname.split("/")[2];
      matchDocs = getDocsByCategory(docs, category);
    } else if (pathname.includes("/author")) {
      const author = pathname.split("/")[2];
      matchDocs = getDocsByAuthor(docs, author);
    }

    const roots = matchDocs.filter((doc) => !doc.parent);
    const nonRoots = Object.groupBy(
      matchDocs.filter((doc) => doc.parent),
      ({ parent }) => parent,
    );

    const nonRootsKeys = Reflect.ownKeys(nonRoots);
    nonRootsKeys.forEach((key) => {
      const foundInRoots = roots.find((root) => root.id === key);
      if (!foundInRoots) {
        const foundInDocs = docs.find((doc) => doc.id === key);
        roots.push(foundInDocs);
      }
    });

    roots.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
      return 0;
    });
    setRootNodes([...roots]);
    setNonRootNodes({ ...nonRoots });
  }, [pathname, docs]);

  return (
    <>
      <nav className="hidden lg:mt-10 lg:block">
        <ul role="list" className="border-l border-transparent">
          {rootNodes.map((root) => (
            <li className="relative" key={root.id}>
              <Link
                className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                href={`/docs/${root.id}`}
              >
                <span>{root.title}</span>
              </Link>
              {nonRootNodes[root.id] && (
                <ul role="list" className="border-l border-zinc-200">
                  {nonRootNodes[root.id].map((childs) => (
                    <li key={childs.id} className="relative">
                      <Link
                        className="flex justify-between gap-2 py-1 pl-8 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href={`/docs/${root.id}/${childs.id}`}
                      >
                        <span>{childs.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
