import { useState } from "react";
import { motion, cubicBezier } from "framer-motion";

export const ChangingText = () => {
  let words = ["Creating", "Crafting", "Building", "Dreaming"];
  const [currentState, nextState] = useState(words);

  return (
    <div className="changing_txt_container">
      <div className="txt_spacer">Futureeeee</div>
      <motion.div
        key={currentState[0]}
        className="changing_txt"
        initial={{ y: 0 }}
        animate={{ y: [0, -200] }}
        transition={{
          ease: cubicBezier(0.165, 0.84, 0.44, 1),
          duration: 3,
          times: [0.8, 1],
        }}
      >
        {currentState[0]}
      </motion.div>
      <motion.div
        key={currentState[3]}
        className="changing_txt"
        initial={{ y: 200 }}
        animate={{ y: [200, 0] }}
        onAnimationComplete={() => {
          nextState(
            currentState.map((_, i, a) => a[(i + a.length - 1) % a.length])
          );
        }}
        transition={{
          ease: cubicBezier(0.165, 0.84, 0.44, 1),
          duration: 3,
          times: [0.8, 1],
        }}
      >
        {currentState[3]}
      </motion.div>
    </div>
  );
};
