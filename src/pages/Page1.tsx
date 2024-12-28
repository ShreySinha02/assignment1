import { motion } from "framer-motion";
import { BiSolidMagicWand } from "react-icons/bi";

function Page1() {
  const words = "Inference at the Edge".split(" ");
  const lines = [
    "Boost your AI application's speed and efficiency globally by bringing inference closer to your users.",
    "This allows for faster decision-making, reduced latency, and improved user experiences.",
    "By processing data closer to the source, AI models can work in real-time without needing to rely.",
  ];
  const getRandomDelay = () => Math.random() * 1.2 + 2.3;
  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };
  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex  justify-center flex-col  ">
      <div className="text-center space-y-6 flex justify-center mt-16  flex-col items-center ">
        <div className="text-sm uppercase border-2 border-transparent bg-gradient-to-b from-gray-800 via-black to-gray-900 rounded-3xl text-white flex items-center justify-center h-10 w-36 tracking-wide shadow-md hover:shadow-lg transition-all ease-in-out duration-300 backdrop-blur-md">
          <span className="flex items-center gap-1">
            <span className="text-orange-400 text-lg">
              <BiSolidMagicWand />
            </span>
            Beta release
          </span>
        </div>
        <div className="flex space-x-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              animate={{
                opacity: [0, 1],
                y: [100, 0],
                scale: [1.5, 1],
              }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                type: "tween",
                stiffness: 120,
                damping: 150,
              }}
              className="text-5xl md:text-6xl font-medium tracking-tight"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div className="text-gray-400 text-lg max-w-4xl text-center ">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.5 + index * 0.2, 
                type: "tween",
                stiffness: 200,
                damping: 20,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-3xl font-semibold"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1.5, y: 0 }}
            transition={{
              duration: 1,
              delay: 2.5,
              type: "tween",
              stiffness: 200,
              damping: 20,
            }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="border border-gray-200 hover:text-white text-white px-6 py-2 rounded-3xl font-semibold"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 3,
              type: "tween",
              stiffness: 200,
              damping: 20,
            }}
          >
            Book a demo
          </motion.button>
        </div>
      </div>
      <div className="mt-6 w-full flex flex-row h-2/6  justify-between  text-gray-400 text-sm ">
        <div className=" h-full relative justify-between flex flex-col ml-24 ">
        <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: getRandomDelay(), ease: "easeInOut" }}
        variants={variants}
        className="h-16 w-16 ml-6 bg-slate-800 rounded-2xl shadow-md border-2 border-gray-700 shadow-slate-800 justify-center text-2xl items-center flex"
      >
        Ai
      </motion.div>

      {/* Second Div */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: getRandomDelay(), ease: "easeInOut" }}
        variants={variants}
        className="h-12 -left-12 top-28 absolute w-12 bg-slate-800 shadow-md border-2 border-gray-700 shadow-slate-800 rounded-2xl justify-center text-2xl items-center flex"
      >
        A
      </motion.div>

      {/* Third Div */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: getRandomDelay(), ease: "easeInOut" }}
        variants={variants}
        className="h-24 w-24 bg-slate-800 rounded-3xl shadow-md border-2 border-gray-700 shadow-slate-800 justify-center text-2xl items-center flex"
      >
        M
      </motion.div>
        </div>
        <div className=" ml-32 h-full flex justify-center items-center">
        <motion.div
      initial={{ scale: 0, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }} 
      className="h-32 w-32 backdrop-blur-lg shadow-md border-2 border-gray-700 shadow-slate-800 bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-[2rem] flex justify-center items-center text-2xl text-white font-semibold"
    >
      <span className="text-shadow-lg">Ai</span>
    </motion.div>
        </div>
        <div className=" h-full relative justify-between flex flex-col mr-24 ">
        <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: getRandomDelay(), ease: "easeInOut" }}
        variants={variants}
        className="h-16 w-16 mr-44 bg-slate-800 rounded-3xl shadow-md border-2 border-gray-700 justify-center text-2xl items-center flex"
      >
        A
      </motion.div>

     
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: getRandomDelay(), ease: "easeInOut" }}
        variants={variants}
        className="h-12 right-12 top-28 absolute w-12 bg-slate-800 rounded-2xl shadow-md border-2 border-gray-700 justify-center text-2xl items-center flex"
      >
        A
      </motion.div>

      
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: getRandomDelay(), ease: "easeInOut" }}
        variants={variants}
        className="h-16 w-16 ml-20 bg-slate-800 rounded-3xl shadow-md border-2 border-gray-700 justify-center text-2xl items-center flex"
      >
        M
      </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
