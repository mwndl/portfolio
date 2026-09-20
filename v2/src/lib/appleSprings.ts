import { Transition } from "framer-motion";

/**
 * Apple Design Skill Physics Constants (WWDC / Designing Fluid Interfaces):
 *
 * 1. Element Motion (cards, buttons, tabs, position shifts):
 *    Damping ratio: 1.0, Response: 0.4s (Critically damped, zero overshoot)
 * 2. Sheet / Drawer / Modal (popovers, overlays):
 *    Damping ratio: 0.8, Response: 0.3s (Slight bounciness for natural tactile feel)
 * 3. Fast Micro-Interaction (hover, tap down):
 *    Immediate responsiveness without input lag.
 */

// Moving element spring (Damping 1.0, Response 0.4s)
export const appleElementSpring: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 28,
  mass: 1,
};

// Drawer / Panel / Sheet spring (Damping 0.8, Response 0.3s)
export const appleSheetSpring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 24,
  mass: 0.9,
};

// Snappy micro-interaction spring (for active down state & quick switches)
export const appleSnappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

// Touch feedback scale helper (Apple down-state immediate feedback)
export const appleTouchFeedback = {
  whileTap: { scale: 0.96 },
  whileHover: { scale: 1.02 },
  transition: appleElementSpring,
};

export const appleButtonFeedback = {
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.03 },
  transition: appleSnappySpring,
};
