"use client";

import { usePrompts } from "@/app/context/PromptContext";
import { motion } from "framer-motion";

type Props = {
  showMenu: boolean;
};

export default function CommandMenu({ showMenu }: Props) {
  const { promptTemplate, setActivePromptTemplate } = usePrompts();

  return (
    <>
      {showMenu && (
          <motion.div className="flex flex-col rounded-md border border-[#191919] bg-[#0a0a0a]/80 p-2 text-sm font-normal text-white">
            <div className="text-xs font-bold text-white/50 px-5 py-1">Command Menu</div>
            {promptTemplate.map(
              (t: { name: string; content: string; inputs: string[] }) => (
                <motion.div
                  onClick={() => setActivePromptTemplate(t)}  
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  layout
                  layoutId={t.name}
                  key={t.name}
                  className="cursor-pointer px-5 py-1 hover:bg-white/[0.03]"
                >
                  {t.name} -{" "}
                  {t.inputs?.map((i: string) => (
                    <span
                      className="rounded-md bg-white/10 px-1 py-0.5 text-xs"
                      key={t + "-" + i}
                    >
                      {i.slice(5)}
                    </span>
                  ))}{" "}
                  -{" "}
                  {t.content.length < 100
                    ? t.content
                    : t.content.slice(0, 45) + "..." + t.content.slice(-45)}
                </motion.div>
              ),
            )}
          </motion.div>
        )}
    </>
  );
}