import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPaperPlane,
  faEnvelope,
  faEnvelopeOpen,
  faUserAstronaut,
  faImage,
  faImages,
  faGrinHearts,
  faFolder,
  faFolderOpen,
  faLaughBeam,
  faUserTie,
  faCommentDollar,
  faCommentsDollar,
  faHome,
  faStepBackward,
  faExclamationCircle,
  faTimes,
  faTimesCircle,
  faSignInAlt,
  faConciergeBell,
  faPiggyBank,
  faMoneyBillAlt, faHardHat, faWallet
} from '@fortawesome/free-solid-svg-icons';
import { IIcons } from '../types';

library.add(faPaperPlane,
  faUserAstronaut, 
  faImage,
  faImages,
  faGrinHearts,
  faFolder,
  faFolderOpen,
  faLaughBeam,
  faCommentsDollar,
  faCommentDollar,
  faHome,
  faStepBackward,
  faExclamationCircle,
  faTimes,
  faTimesCircle,
  faSignInAlt,
  faConciergeBell,
  faConciergeBell,
  faPiggyBank,
  faMoneyBillAlt,
  faHardHat,
    faWallet
);

export const icons: IIcons = {
  mail: {static: faEnvelope, hover: faEnvelopeOpen},
  profile: {static: faUserTie, hover: faUserAstronaut},
  testimonials: { static: faLaughBeam, hover: faGrinHearts },
  gallery: {static: faImage, hover: faImages},
  work: {static: faFolder, hover: faFolderOpen},
  budget: { static: faWallet, hover: faMoneyBillAlt },
  home: { static: faHome, hover: faHome },
  danger: { static: faExclamationCircle, hover: faExclamationCircle },
  close: { static: faTimes, hover: faTimesCircle },
  expand: { static: faSignInAlt, hover: faSignInAlt },
  bell: {static: faConciergeBell, hover: faHardHat}
};