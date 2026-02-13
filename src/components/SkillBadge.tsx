"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
    >
      {name}
    </motion.span>
  );
}
