//Api simulation

//Champions Assets
import Ahri from "../public/champions/Ahri.png";
import Akali from "../public/champions/Akali.png";
import Ashe from "../public/champions/Ashe.png";
import Brand from "../public/champions/Brand.png";
import Briar from "../public/champions/Briar.png";

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
    createTime: "8 hours ago",
  },
  {
    compName: "Crust the enemy (Early)",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },
    scale: scalingEarly,
    createTime: "8 hours ago",
  },
  {
    compName: "Favorite comp for scaling into late game (Late)",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Siege",
      icon: siegeIcon,
    },

    scale: scalingLate,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example 1",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Pick",
      icon: pickIcon,
    },

    scale: scalingMid,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example 2",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Split",
      icon: splitIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
  {
    compName: "CompName Example Win",
    champions: [Ahri, Akali, Ashe, Brand, Briar],
    gameStyles: {
      name: "Engage",
      icon: engageIcon,
    },

    scale: scalingAllAround,
    createTime: "8 hours ago",
  },
];
