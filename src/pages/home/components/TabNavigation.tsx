import { motion } from "motion/react";
import type { Tab } from "@/pages/home/model/home.types";

interface TabNavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <div className="flex flex-row gap-2  p-1 bg-primary mb-12 relative ">
      <button
        onClick={() => setActiveTab("career")}
        className="px-8 py-3 rounded-full text-heading-m transition-all duration-200 relative z-10 hover:scale-105"
      >
        <motion.span
          className="relative text-on-primary"
          animate={{
            scale: activeTab === "career" ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          Career
          {activeTab === "career" && (
            <motion.span
              className="absolute -top-1 -right-3 text-xs text-on-primary"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              ★
            </motion.span>
          )}
        </motion.span>
        {activeTab === "career" && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full shadow-lg"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
      <button
        onClick={() => setActiveTab("project")}
        className="px-8 py-3 rounded-full text-heading-m transition-all duration-200 relative z-10 hover:scale-105"
      >
        <motion.span
          className="relative text-on-primary"
          animate={{
            scale: activeTab === "project" ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          Project
          {activeTab === "project" && (
            <motion.span
              className="absolute -top-1 -right-3 text-xs text-on-primary"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              ★
            </motion.span>
          )}
        </motion.span>
        {activeTab === "project" && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full shadow-lg"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
      <button
        onClick={() => setActiveTab("skill")}
        className="px-8 py-3 rounded-full text-heading-m transition-all duration-200 relative z-10 hover:scale-105"
      >
        <motion.span
          className="relative text-on-primary"
          animate={{
            scale: activeTab === "skill" ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          Skill
          {activeTab === "skill" && (
            <motion.span
              className="absolute -top-1 -right-3 text-xs text-on-primary"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              ★
            </motion.span>
          )}
        </motion.span>
        {activeTab === "skill" && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full shadow-lg"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    </div>
  );
};

export default TabNavigation;
