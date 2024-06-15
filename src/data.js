//Api simulation

//Champions Assets
import Ahri from "/champions/Ahri.png";
import Akali from "/champions/Akali.png";
import Ashe from "/champions/Ashe.png";
import Brand from "/champions/Brand.png";
import Briar from "/champions/Briar.png";

//GameStyles assets.
import engageIcon from "./assets/GameStyleIcons/engageIcon.svg";
import pickIcon from "./assets/GameStyleIcons/pickIcon.svg";
import protectIcon from "./assets/GameStyleIcons/protectIcon.svg";
import siegeIcon from "./assets/GameStyleIcons/siegeIcon.svg";
import splitIcon from "./assets/GameStyleIcons/splitIcon.svg";

//Comp Scaling Assets
import scalingAllAround from "./assets/ScalingVariants/scalingAllAround.svg";
import scalingEarly from "./assets/ScalingVariants/scalingEarly.svg";
import scalingLate from "./assets/ScalingVariants/scalingLate.svg";
import scalingMid from "./assets/ScalingVariants/scalingMid.svg";

export const gameData = [
  {
    compName: "Protech Ashe (Late)",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Protect",
      icon: protectIcon,
    },
    scale: scalingLate,
    createTime: 8,
  },
  {
    compName: "Crust the enemy (Early)",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },
    scale: scalingEarly,
    createTime: 7,
  },
  {
    compName: "Favorite comp for scaling into late game (Late)",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Siege",
      icon: siegeIcon,
    },

    scale: scalingLate,
    createTime: 6,
  },
  {
    compName: "CompName Example 1",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Pick",
      icon: pickIcon,
    },

    scale: scalingMid,
    createTime: 5,
  },
  {
    compName: "CompName Example 2",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Split",
      icon: splitIcon,
    },

    scale: scalingAllAround,
    createTime: 4,
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 3,
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 2,
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 1,
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 2,
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 2,
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 2,
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 1,
  },
  {
    compName:
      "CompName Example Win Win Win Win Win Win Win Win Win Win Win Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 12,
  },
  {
    compName:
      "CompName Example URF URF URF URF URF URF URF URF URF URF URF URF URF URF URF",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: 14,
  },
];
