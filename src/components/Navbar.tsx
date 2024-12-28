import { motion } from "motion/react";
function Navbar() {
  const letters = "Gcore".split("");
  const menuItems = ["Products", "Pricing", "Resources", "Partner", "Why Gcore"];
  const buttons = ["Contact Us", "Sign Up for free"];
  return (
    <div className=" w-full h-16 p-4 flex absolute top-0 flex-row  bg-opacity-0 bg-blue-600 text-white justify-between">
     <div className="flex space-x-1 font-bold text-2xl">
  {letters.map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{
        duration: 1, 
        delay: index * 0.2, 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
      }}
    >
      {letter}
    </motion.span>
  ))}
</div>
      <motion.div
        className="flex flex-row justify-around items-center w-4/12"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1.5, staggerChildren: 0.3 }} 
      >
        {menuItems.map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{
              duration: 1,
              delay: index * 0.2, 
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>

      {/* Animated Buttons */}
      <motion.div
        className="flex w-2/12 justify-around"
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1, staggerChildren: 0.3 }} 
      >
        {buttons.map((button, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}  
            animate={{ opacity: 1, y: 0 }}   
            transition={{
              duration: 1,
            }}
            className={`w-36 rounded-3xl flex justify-center items-center ${
              index === 0 ? "bg-white bg-opacity-30 backdrop-blur-md shadow-lg text-white border border-white/20" : "bg-orange-400"
            }`}
          >
            {button}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default Navbar;
