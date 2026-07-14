import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  loading: boolean;
};

export default function LoadingScreen({
  loading,
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#031124]"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <img
              src="/images/MKA.jpg"
              alt="MKA Enerji"
              className="mx-auto h-28 md:h-32 w-auto object-contain mb-8"
            />

            <div className="mx-auto h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-amber"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.05,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}