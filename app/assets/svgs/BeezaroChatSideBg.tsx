import { motion } from "framer-motion";

export default function AnimatedBg() {
  return (
    <motion.svg
      width="331"
      height="963"
      viewBox="0 0 331 963"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <g clipPath="url(#clip0_3_17927)">
        <motion.path
          d="M0 0H301C317.569 0 331 13.4315 331 30V963H0V0Z"
          fill="#00160D"
          animate={{
            x: [0, 6, -6, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          opacity="0.02"
          d="M658.759 802.456C639.792 825.07 608.268 833 578.783 833C512.092 833 499.857 789.752 431.043 789.752C349.042 789.752 320.531 853.012 233.241 811.86C183.493 788.401 179.376 744.485 181.393 702.948C183.271 664.314 214.42 626.654 250.897 613.927C331.678 585.747 369.251 539.52 379.969 493.194C396.406 422.119 475.247 436.343 483.573 438.777C512.276 447.152 552.563 475.884 550.8 523.415C547.227 619.784 630.017 651.348 657.149 683.643C691.433 724.457 685.867 770.147 658.759 802.456Z"
          fill="white"
          animate={{
            x: [0, 6, -10, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.g
          filter="url(#filter0_f_3_17927)"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="431" cy="-52" r="112" fill="#FFD261" />
        </motion.g>

        <motion.g
          filter="url(#filter1_f_3_17927)"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="-91" cy="77" r="189" fill="#FFB200" />
        </motion.g>

        <motion.path
          opacity="0.03"
          d="M257.442 -214.797C314.255 -200.139 358.706 -146.505 362.576 -87.9511C366.746 -24.7172 327.028 34.954 275.536 71.893C224.038 108.834 161.914 127.217 101.085 144.986C37.1669 163.665 -26.7623 182.333 -90.6759 201.002C-109.706 206.569 -129.322 213.346 -149.008 210.957C-149.631 210.878 -150.254 210.8 -150.866 210.71C-190.608 204.885 -210.334 158.99 -187.831 125.712C-185.458 122.197 -182.849 118.867 -180.021 115.78C-152.427 85.5703 -111.392 72.2961 -72.3675 60.0123C-33.3343 47.7329 7.65484 33.9686 34.6022 3.1899C72.7194 -40.3252 72.7901 -105.997 104.056 -154.662C135.773 -204.031 200.629 -229.455 257.442 -214.797Z"
          fill="white"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.g
          filter="url(#filter2_f_3_17927)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="484.5" cy="775" rx="283.5" ry="231" fill="#137E54" />
        </motion.g>

        <motion.circle
          cx="84.5"
          cy="566.5"
          r="7.5"
          fill="#FFCF54"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="292.5"
          cy="104.5"
          r="7.5"
          fill="#FFCF54"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
        <motion.circle
          opacity="0.4"
          cx="84.5"
          cy="217.5"
          r="7.5"
          fill="#FFE49F"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1.5, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.circle
          opacity="0.3"
          cx="216.5"
          cy="627.5"
          r="7.5"
          fill="#FFCF54"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 0.4, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.circle
          cx="172.5"
          cy="770.5"
          r="7.5"
          fill="#FFCF54"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>

      <defs>
        <filter
          id="filter0_f_3_17927"
          x="35"
          y="-448"
          width="792"
          height="792"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="142"
            result="effect1_foregroundBlur_3_17927"
          />
        </filter>
        <filter
          id="filter1_f_3_17927"
          x="-634"
          y="-466"
          width="1086"
          height="1086"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="177"
            result="effect1_foregroundBlur_3_17927"
          />
        </filter>
        <filter
          id="filter2_f_3_17927"
          x="-113"
          y="230"
          width="1195"
          height="1090"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="157"
            result="effect1_foregroundBlur_3_17927"
          />
        </filter>

        <clipPath id="clip0_3_17927">
          <path
            d="M0 0H301C317.569 0 331 13.4315 331 30V963H0V0Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
}
