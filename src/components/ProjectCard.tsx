"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  highlight?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  highlight,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="card group"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="flex gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Demo
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      {highlight && (
        <p className="text-blue-600 text-sm font-medium mb-4">{highlight}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
